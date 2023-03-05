
import { IIPC } from "pages/ipc-app/models/ipc.model";

export const  filterDataByHour = (data: Array<IIPC>, value:string): any => {
    let newData = data.filter(obj => obj.date.getHours() === Number(value));
    return { newData}
}

export const  filterDataByDay = (data: Array<IIPC>, value:string): any => {
    let newData =data.filter(obj => obj.date.getDate() === Number(value));
    return { newData}
}

export const  filterDataByMonth = (data: Array<IIPC>, value:string): any => {
    let newData = data.filter(obj => obj.date.getMonth() === Number(value));
    return {  newData}
}

export const  filterDataByYear = (data: Array<IIPC>, value:string): any => {
    let newData = data.filter(obj => obj.date.getFullYear() === Number(value));
    return { newData}
}