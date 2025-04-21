'use client';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);
const LineChart = () => {
    const data = {
        labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '50k', '55k', '60k'],
        datasets: [
            {
                label: 'Sales',
                data: [20, 40, 60, 80, 100],
                fill: false,
                borderColor: '#0070f3',
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.y}%`;
                    },
                },
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return `${value}%`;
                    },
                },
            },
        },
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <h1 className='text-[24px] font-bold text-headingscolor font-HeadingFont'>Filings Overtime</h1>
                <select
                    className="bg-transparent border border-graymedium text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonBackground"
                    defaultValue="October">
                    {[
                        'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'
                    ].map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Line data={data} options={options} />
            </div>
        </>
    );
};
export default LineChart;
