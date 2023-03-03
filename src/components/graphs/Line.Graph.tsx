
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


interface LineGraphProps {
    labels: Array<string>;
    data: Array<number>;
    title: string;
    tooltipLabel: string;
}


const LineGraph = (props:LineGraphProps) => {
    
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.tooltipLabel,
                data: props.data,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
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
                text: props.title,
            },
        },
    };

    return <Line data={data} options={options} />
}

export default LineGraph;