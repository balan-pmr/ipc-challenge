
import IPCGraph from './IPC.graph';

import { useIPCLoadAPIData} from '../hooks/useIPCLoadData';

const Dashboard =  () => {

    // useIPCLoadMockData or useIPCLoadAPIData
    const { result, onReLoadData} = useIPCLoadAPIData();
    
    return (
        <div>
            <div>
                <button onClick={ e => {onReLoadData(e);} } > Reload IPC Data</button>
            </div>
            { result.length === 0? <div>No IPC data to graph.</div> : <IPCGraph data={result} /> } 
        </div>
    )

}

export default Dashboard;

