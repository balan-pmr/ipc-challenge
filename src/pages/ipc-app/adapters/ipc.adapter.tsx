import { IIPC, IIPCMockList } from 'pages/ipc-app/models/ipc.model'

export const IPCMockAdapter = (data: IIPCMockList): Array<IIPC> => {
    try {
        let ipcData: Array<IIPC> = data.result.map(object => {
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



