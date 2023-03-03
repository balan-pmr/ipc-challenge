
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'vaca', 'pollito'];
    const data = {
        labels,
        datasets: [
            {
                label: 'My First Dataset 1',
                data: [300, 500, 10, 200, 30, 440, 530, 20, 200],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'My First Dataset 2',
                data: [440, 530, 20, 200, 300, 500, 10, 200, 30],
                fill: false,
                borderColor: 'red',
                tension: 0.1
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'IPC Indicator Dashboard',
            },
        },
    };

    return (<Line data={data} options={options} />)
}

export default LineGraph;