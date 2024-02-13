import { atom ,selector } from "recoil";


export const networkAtom = atom({
    key:"networkAtom",
    default:206
})

export const jobs = atom({
    key:"jobs",
    default:0
})

export const notifications = atom({
    key:"notifications",
    default:120,
})

export const messages = atom({
    key:"messages",
    default:6
})


export const totalNotifications = selector({
    key:"totalNotifications",
    get:({get})=>{
        const networkAtomCount = get(networkAtom)
        const jobsCount = get(jobs)
        const notificationsCount = get(notifications)
        const messagesCount = get(messages)
        return networkAtomCount + jobsCount + notificationsCount + messagesCount
    }

})