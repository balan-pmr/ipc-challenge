import json from 'mock-data/data.json'
import IIPC from 'pages/ipc-app/dashboard/models/ipc.model'
import LineGraph from 'components/graphs/Line.Graph';

const Dashboard = () => {

    const data: Array<IIPC> = json.result;
    return (
        <div>
            I am a Dashboard.<br />
            Data lenght : {data.length}
            <LineGraph/>
        </div>
    )
}

export default Dashboard;