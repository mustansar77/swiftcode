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
                // tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
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
            <div className="flex justify-between">
                <div><h1 className='text-[24px] font-bold font-HeadingFont text-cardblacktxt'>Filings Overtime </h1></div>
                {/* <div className="border: 0.6px solid bg-lightgrey"> */}
                <select name="" id="" className="bg-transparent border border-gray-400 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonBackground">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option selected value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                {/* </div> */}
            </div>
            <div className="w-full  ">
                <div className="w-[100%] h-[350px]">
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    );
};

export default LineChart;
