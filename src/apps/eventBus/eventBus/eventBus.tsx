// class EventBus {
//     private events: Map<string, Function[]> = new Map()
//
//     constructor(event: Map<string, Function[]>) {
//         this.events = event
//     }
//
//     on(eventName: string, callback: Function): void {
//         if (!this.events.has(eventName)) {
//             this.events.set(eventName, [])
//         }
//         this.events.get(eventName)?.push(callback)
//     }
//
//     off(eventName: string, callback?: Function): void {
//         if (callback) {
//             this.events.get(eventName)?.map((item, index) => {
//                 item == callback && this.events.get(eventName)?.splice(index, 1)
//             })
//         } else {
//             this.events.delete(eventName)
//         }
//     }
//
//     emit(eventName: string, ...date: any): void {
//         this.events.get(eventName)?.forEach((item) => {
//             item(...date)
//         })
//     }
// }

// const eventBus = new EventBus(new Map())
// export default eventBus
// export {
//     eventBus
// }

export function createEvent() {
    const events: Record<string, Function[]> = {}
    return {
        on(eventName: string, fn: Function): void {
            if (!events[eventName]) {
                events[eventName] = []
            }
            events[eventName].push(fn)
        },
        off(eventName: string, fn: Function): void {
            if (!fn) {
                delete events[eventName]
            } else {
                events[eventName].map((item, index) => {
                    if (item == fn) {
                        events[eventName].splice(index, 1)
                    }
                })
            }
        },
        emit(eventName: string, ...date: any): void {
            events[eventName].forEach((item) => {
                item(...date)
            }
            )
        }
    }
}

const eventBus = createEvent()
export default eventBus
export {
    eventBus
}
