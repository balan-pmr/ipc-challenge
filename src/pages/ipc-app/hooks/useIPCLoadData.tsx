import json from 'mock-data/data.json'
import { IPCMockAdapter , IPCAPIAdapter} from 'pages/ipc-app/adapters/ipc.adapter';
import { useEffect, useState } from "react";
import { IIPC } from "pages/ipc-app/models/ipc.model";

export const useIPCLoadAPIData =  (): any=> {
    const[result, setResult]= useState< Array<IIPC> >([]);
    
    const onReLoadData = async (e:any) =>{
        e.preventDefault();
        setResult([])
        await executeAPICall()
    }

    useEffect(() => {
        (async () => { await executeAPICall ();})();
    }, []);

    const executeAPICall = async () => {
        let url: string | undefined = process.env.REACT_APP_URL_GET_IPC;
        if(url !== undefined){
            fetch(url).then( res => res.json() ).then(data => setResult(IPCAPIAdapter(data)) )
        }else{
            console.error('No URL for getting IPC data.')
            setResult([])
        }            
    }

    return { result, onReLoadData }
}

export const useIPCLoadMockData = (): any   => {

    const onReLoadData =  (e:any) =>{ 
        setResult(prev => prev=[])
        let interval = setInterval(()=>{  setResult(prev => prev=IPCMockAdapter(json) ); clearInterval(interval); }, 500)
    } 

    const[result, setResult]= useState< Array<IIPC> >([]);
    
    useEffect(() => { setResult(IPCMockAdapter(json)) }, []);

    return { result , onReLoadData }

}

