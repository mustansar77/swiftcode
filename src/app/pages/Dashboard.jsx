'use client';
import React from 'react';
import Image from 'next/image';
import CaseFeild from '../../../public/Human.svg';
import PendingReview from '../../../public/PendingReview.svg';
import TimeSaved from '../../../public/TimeSaved.svg';
import upword from '../../../public/upword.svg';
import downword from '../../../public/downword.svg';
import LineChart from '../Components/LineChart';
import Table from '../Components/Table';
const Dashboard = () => {
    const cards = [
        {
            name: 'Case Feild',
            numbers: '40,689',
            percentage: 8.5,
            text: 'Up from yesterday',
            color: 'text-cyanColor',
            lowericon: upword,
            upericon: CaseFeild,
        },
        {
            name: 'Case Feild',
            numbers: '40,689',
            percentage: 8.5,
            text: 'Up from yesterday',
            color: 'text-cyanColor',
            lowericon: upword,
            upericon: CaseFeild,
        },
        {
            name: 'Pending Review',
            numbers: 12,
            percentage: 1.3,
            text: 'Up from past week',
            color: 'text-cyanColor',
            lowericon: upword,
            upericon: PendingReview,
        },
        {
            name: 'Time saved',
            numbers: '$89,000',
            percentage: 4.3,
            text: 'Down from yesterday',
            color: 'text-cardsredtxt',
            lowericon: downword,
            upericon: TimeSaved,
        },
    ];
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col bg-bgcolor min-h-screen">
            <h1 className="font-bold text-2xl sm:text-3xl py-5 font-HeadingFont">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center gap-2 py-3 px-6 h-[150px] shadow-lg rounded-2xl bg-white"
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="font-bold font-HeadingFont text-headingscolor">{item.name}</p>
                                <h1 className="font-bold font-HeadingFont text-2xl">{item.numbers}</h1>
                            </div>
                            <div className="img">
                                <Image src={item.upericon} height={60} width={60} alt={item.name} />
                            </div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Image src={item.lowericon} height={24} width={24} alt="trend icon" />
                            <p className="font-semibold font-HeadingFont text-headingscolor">
                                <span className={`${item.color}`}>{item.percentage}% </span>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="my-8 shadow-md p-4 sm:p-6 md:p-8 bg-white w-full overflow-x-auto">
                <LineChart />
            </div>
            <div className="shadow-lg p-4 sm:p-6 md:p-8 w-full overflow-x-auto">
                <Table />
            </div>
        </div>
    );
};
export default Dashboard;
