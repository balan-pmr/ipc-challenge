
import IPCGraph from './IPC.Graph';
import {useIPCLoadAPIData} from '../hooks/useIPCLoadData';
import Alert from 'components/alerts/Alert';

const Dashboard =  () => {

    const { result, onReLoadData, message } = useIPCLoadAPIData();

    const IPCGraphComponent = result && result.length>=0 ? <IPCGraph data={result} />:<></>;
    const classForButton =  result && result.length >0? "button-active":"button-inactive";
    
    return (
        <div>
            <Alert message={message.message} type={message.type} />
            <div className='center-content'><h1>DASHBOARD</h1></div>
            {IPCGraphComponent}
            <div className='center-content'>
                <button className={classForButton} onClick={ e => {onReLoadData(e);} } > Reload IPC Data</button>
            </div>            
        </div>
    )

}

export default Dashboard;

