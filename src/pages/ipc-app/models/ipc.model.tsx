export interface IIPC {
    date: Date;
    price: number;
    percentageChange: number;
    volume: number;
    change: number;
}

export interface IIPCResponse {
    date: string;
    price: number;
    percentageChange: number;
    volume: number;
    change: number;
}

export interface IIPCMockList {
    result: Array<IIPCResponse>
}


export interface IIPCCategory {
    category: string;
    yData: Array<number>;
}
