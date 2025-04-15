interface AxiosRequestConfig {
    baseURL?: string;
    headers?: Record<string, string>;
    timeout?: number;
    params?: Record<string, any>;
}

interface AxiosResponse<T = any> {
    // 这个<T = any>可以临时设置类型，直接用any也行
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    // 这个Record<string, string>的意思是一个对象里面的键和值的类型都是string
    config: AxiosRequestConfig;
}

class MyAxios {
    private baseURL: string = ''
    private defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
    //     这个没事不要加，除非确定服务端允许Content-Type
    }
    private timeout: number = 0

    constructor(config?: AxiosRequestConfig) {
        // 构造函数，这里用于设置默认值
        if (config?.baseURL) this.baseURL = config.baseURL
        if (config?.headers) this.defaultHeaders = {
            ...this.defaultHeaders,
            ...config.headers
        }
        if (config?.timeout) this.timeout = config.timeout
    }

    private buildURL(url: string, params?: Record<string, any>): string {
        // 构建完整 URL
        const fullURL = this.baseURL ? `${this.baseURL}${url}` : url

        if (!params) return fullURL

        // 处理查询参数
        const queryParams = new URLSearchParams()
        // 这个实例对象的append方法可以将添加的键值对接到原值后面，格式：原值&键值对1&键值对2
        Object.entries(params).forEach(([key, value]) => {
            // 这个方法把header变成键值对数组
            queryParams.append(key, String(value))
        })
        return `${fullURL}${fullURL.includes('?') ? '&' : '?'}${queryParams.toString()}`
    }

    private request(method: string, url: string, config?: {
        data?: any;
        headers?: Record<string, string>;
        params?: Record<string, any>;
    }): Promise<AxiosResponse> {
        // 这玩意的意思是返回值是promise，promise的返回值是AxiosResponse类型
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            // 处理请求 URL
            const requestURL = this.buildURL(url, config?.params)

            // 创建请求
            xhr.open(method, requestURL, true)

            // 设置超时
            if (this.timeout > 0) {
                xhr.timeout = this.timeout
            }

            // 设置请求头
            const headers = {
                ...this.defaultHeaders,
                ...(config?.headers || {})
            }

            Object.entries(headers).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value)
            })

            // 处理响应
            xhr.onload = () => {
                const response: AxiosResponse = {
                    data: this.parseResponseData(xhr),
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: this.parseHeaders(xhr.getAllResponseHeaders()),
                    config: {
                        baseURL: this.baseURL,
                        headers,
                        timeout: this.timeout
                    }
                }

                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(response)
                } else {
                    reject({
                        response,
                        message: `Request failed with status code ${xhr.status}`
                    })
                }
            }

            // 处理错误
            xhr.onerror = () => {
                reject({
                    message: 'Network Error',
                    request: xhr
                })
            }

            // 处理超时
            xhr.ontimeout = () => {
                reject({
                    message: `Timeout of ${this.timeout}ms exceeded`,
                    code: 'ECONNABORTED'
                })
            }

            // 发送请求
            if (method !== 'GET' && method !== 'HEAD' && config?.data) {
                // GET和HEAD类型不应该包含请求体，所以加上这段
                const body = this.prepareRequestBody(config.data, headers['Content-Type'])
                // headers['Content-Type']是用来判断请求体要保持原样直接发过去还是JSON.parse()化
                xhr.send(body)
            } else {
                xhr.send()
            }
        })
    }

    private parseResponseData(xhr: XMLHttpRequest): any {
        const contentType = xhr.getResponseHeader('Content-Type') || ''

        if (contentType.includes('application/json')) {
            try {
                return JSON.parse(xhr.responseText)
            } catch (e) {
                return xhr.responseText
            }
        }
        return xhr.response
    }

    private parseHeaders(headers: string): Record<string, string> {
        const result: Record<string, string> = {}
        if (!headers) return result

        headers.split('\r\n').forEach(line => {
            const parts = line.split(': ')
            const key = parts.shift()
            if (key) {
                const value = parts.join(': ')
                result[key] = value
            }
        })
        return result
    }

    private prepareRequestBody(data: any, contentType?: string): any {
        if (data === null || data === undefined) {
            return null
        }

        if (contentType?.includes('application/json')) {
            return JSON.stringify(data)
        }
        return data
    }

    get(url: string, config?: {
        headers?: Record<string, string>;
        params?: Record<string, any>
    }): Promise<AxiosResponse> {
        return this.request('GET', url, config)
    }

    post(url: string, data?: any, config?: {
        headers?: Record<string, string>;
        params?: Record<string, any>
    }): Promise<AxiosResponse> {
        return this.request('POST', url, {
            ...config,
            data
        })
    }

    put(url: string, data?: any, config?: {
        headers?: Record<string, string>;
        params?: Record<string, any>
    }): Promise<AxiosResponse> {
        return this.request('PUT', url, {
            ...config,
            data
        })
    }

    delete(url: string, config?: {
        headers?: Record<string, string>;
        params?: Record<string, any>
    }): Promise<AxiosResponse> {
        return this.request('DELETE', url, config)
    }
}

// 创建默认实例
const axios = new MyAxios()

// 导出实例和类
export default axios
export {
    axios
}
