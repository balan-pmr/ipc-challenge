import { IIPC, IIPCMockList, IIPCResponse } from 'pages/ipc-app/models/ipc.model'

export const IPCMockAdapter = (data: IIPCMockList): Array<IIPC> => {
    try {
        return  data.result.map(object => {
            return {
                date: new Date(Date.parse(object.date)),
                price: object.price,
                percentageChange: object.percentageChange,
                volume: object.volume,
                change: object.change
            };
        })
    } catch (error) {
        console.error('IPCMockAdapter: Error when processing mock data e:'+error)
        return [];
    }
}

export const IPCAPIAdapter = (data: Array<IIPCResponse>): Array<IIPC> => {
    try {
        let ipcData: Array<IIPC> = data.map(object => {
            return {
                date: new Date(Date.parse(object.date)),
                price: object.price,
                percentageChange: object.percentageChange,
                volume: object.volume,
                change: object.change
            };
        })
        return ipcData
    } catch (error) {
        console.error('IPCMockAdapter: Error when processing mock data e:'+error)
        return [];
    }
}





