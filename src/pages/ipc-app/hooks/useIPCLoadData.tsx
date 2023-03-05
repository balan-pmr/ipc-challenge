import json from 'mock-data/data.json'
import { IPCMockAdapter , IPCAPIAdapter} from 'pages/ipc-app/adapters/ipc.adapter';
import { useEffect, useState } from "react";
import { IIPC } from "pages/ipc-app/models/ipc.model";

export const useIPCLoadAPIData =  (): any=> {
    const[result, setResult]= useState< Array<IIPC> >([]);
    const[reaload, setReload]= useState<boolean >(false);
    
    const onReLoadData = (e:any) =>{
        e.preventDefault();
        //console.log('onReLoadData')
        setResult([])
        setReload( prev => !prev);
    }

    useEffect(() => {
        const execute = async () => {
            let url: string | undefined = process.env.REACT_APP_URL_GET_IPC;
            if(url !== undefined){
                fetch(url).then( res => res.json() ).then(data => setResult(IPCAPIAdapter(data)) )
            }else{
                console.error('No URL for getting IPC data.')
                setResult([])
            }            
        }
        execute()
    }, [setResult, reaload]);

    return { result, onReLoadData }
}

export const useIPCLoadMockData = (): any   => {
    const[result, setResult]= useState< Array<IIPC> >([]);
    useEffect(() => {
       setResult(IPCMockAdapter(json))
    }, [setResult]);
    return { result }
}

