import json from 'mock-data/data.json'
import { IPCMockAdapter } from 'pages/ipc-app/adapters/ipc.adapter';
import { IIPC } from 'pages/ipc-app/models/ipc.model'
import IPCGraph from './IPC.graph';

const Dashboard = () => {

    const data: Array<IIPC> | [] = IPCMockAdapter(json)

    return (
        <div>
            <IPCGraph data={data} />
        </div>
    )

}

export default Dashboard;

