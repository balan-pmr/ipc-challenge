
import IPCGraph from './IPC.graph';
import {useIPCLoadAPIData} from '../hooks/useIPCLoadData';

const Dashboard =  () => {

    const { result, onReLoadData} = useIPCLoadAPIData();
    
    const IPCGraphComponent = result && result.length>=0 ? <IPCGraph data={result} />:<></>;

    const classForButton = result && result.length >=0 ? "button-active":"button-inactive";
    
    return (
        <div>
            <div>
                <button className={classForButton} onClick={ e => {onReLoadData(e);} } > Reload IPC Data</button>
            </div>
            {IPCGraphComponent}
        </div>
    )

}

export default Dashboard;

