import { useAtom } from 'jotai/index'
import { CheckWork, FontSize } from '../../jotai/store.tsx'
import './index.less'

export function AsideButtom() {
    const [checkWork] = useAtom(CheckWork)
    const [fontSize] = useAtom(FontSize)
    return (
        <div id="buttom" className="buttom-cls">
            <a
                href="#"
                className="show-rp"

                style={{
                    overflow: 'hidden',
                    fontSize: fontSize + 'px'
                }}
            >🧧 领取一个外卖红包吧，每日可领取~</a>
            <div
                id="red-package"
            >
                <img src="https://momoyu.cc/assets/mthb-CdT7CTbd.jpg" alt="" />
                <div className="bb"></div>
            </div>
            <p
                style={{
                    overflow: 'hidden',
                    fontSize: fontSize + 'px'
                }}
            >📣
                <span>{checkWork ? '摸鱼' : '学习'}</span>提醒：今天是3月4日，周二的傍晚<br />
                古人云：‘为天地立心，为生民立命。’我却说：‘为<span>{checkWork ? '工资摸鱼' : '工作学习'}</span>，为<span>{checkWork ? '自由争命' : '未来奋斗'}</span>。’
            </p><br />
            <p
                style={{
                    overflow: 'hidden',
                    fontSize: fontSize + 'px'
                }}
            >
                离周末还有4天<br />
                离清明节还有32天<br />
                离劳动节还有58天<br />
                离端午节还有88天
            </p><br />
            <a
                href="https://peal.cc/blog/01JKSGGB5Z2GABN0ATJ01PSEB7"
                target="_blank"
                style={{
                    overflow: 'hidden',
                    fontSize: fontSize + 'px'
                }}
                rel="noreferrer"
            >《致各位<span>{checkWork ? '鱼友' : '学友'}</span>的一封信》</a>
            <a
                href="https://peal.cc/blog/01JKSGGB5ZCZGQXVD0S7DGDK8F"
                id="last-a"
                target="_blank"
                style={{
                    overflow: 'hidden',
                    fontSize: fontSize + 'px'
                }}
                rel="noreferrer"
            >《赞助名单公示》</a>
        </div>
    )
}
