import { atom } from "recoil";


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
    default:108,
})

export const messages = atom({
    key:"messages",
    default:6
})