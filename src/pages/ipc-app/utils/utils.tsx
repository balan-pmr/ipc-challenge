
import { IIPC } from "pages/ipc-app/models/ipc.model";

export const  filterDataByHour = (data: Array<IIPC>, value:string): any => {
    let newData = data.filter(obj => obj.date.getHours() === Number(value));
    const filteredX = newData.map(ipc => ipc.date.toLocaleString());
    const filteredY = newData.map(ipc => ipc.price);
    return {filteredX, filteredY, newData}
}

export const  filterDataByDay = (data: Array<IIPC>, value:string): any => {
    let newData =data.filter(obj => obj.date.getDate() === Number(value));
    const filteredX = newData.map(ipc => ipc.date.toLocaleString());
    const filteredY = newData.map(ipc => ipc.price);
    return {filteredX, filteredY, newData}
}

export const  filterDataByMonth = (data: Array<IIPC>, value:string): any => {
    let newData = data.filter(obj => obj.date.getMonth() === Number(value));
    const filteredX = newData.map(ipc => ipc.date.toLocaleString());
    const filteredY = newData.map(ipc => ipc.price);
    return {filteredX, filteredY, newData}
}

export const  filterDataByYear = (data: Array<IIPC>, value:string): any => {
    let newData = data.filter(obj => obj.date.getFullYear() === Number(value));
    const filteredX = data.map(ipc => ipc.date.toLocaleString());
    const filteredY = data.map(ipc => ipc.price);
    return {filteredX, filteredY, newData}
}