import React from 'react'
import Image from 'next/image'
// import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from 'chart.js';
// import { Canvas } from 'skia-canvas';
// import fsp from 'node:fs/promises';
import CaseFeild from "../../../public/Human.svg"
import PendingReview from "../../../public/PendingReview.svg"
import TimeSaved from "../../../public/TimeSaved.svg"
import upword from "../../../public/upword.svg"
import downword from "../../../public/downword.svg"
import LineChart from '../Components/LineChart';
import Table from '../Components/Table'
const Dashboard = () => {
    const cards = [
        {
            name: "Case Feild",
            numbers: '40,689',
            percentage: 8.5,
            text: 'Up from yesterday',
            color: "text-cardsgreentxt",
            lowericon: upword,
            upericon: CaseFeild

        },
        {
            name: "Case Feild",
            numbers: '40,689',
            percentage: 8.5,
            text: 'Up from yesterday',
            color: "text-cardsgreentxt",
            lowericon: upword,
            upericon: CaseFeild

        },

        {
            name: "Pending Review",
            numbers: 12,
            percentage: 1.3,
            text: 'Up from past week',
            color: "text-cardsgreentxt",
            lowericon: upword,
            upericon: PendingReview

        },

        {
            name: "Time saved",
            numbers: '$89,000',
            percentage: 4.3,
            text: 'Down from yesterday',
            color: "text-cardsredtxt",
            lowericon: downword,
            upericon: TimeSaved

        }

    ]


    return (


        <div className='px-8 flex flex-col bg-bgcolor h-[100%] overflow-y-auto'>
            <h1 className='font-bold text-3xl py-5 font-HeadingFont text-[32px]'>Dashboard</h1>
            <div className="grid grid-cols-4 gap-14   ">
                {
                    cards.map((item, index) => {
                        return <div key={index} className="flex flex-col justify-center gap-2 py-3 px-10 h-[150px] shadow-lg rounded-2xl bg-white">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2"><p className='font-semibold font-HeadingFont  text-cardblacktxt'>{item.name}</p><h1 className='font-bold font-HeadingFont text-2xl'>{item.numbers}</h1></div>
                                <div className="img">
                                    <Image src={item.upericon} height={60} width={60} />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center"> <Image src={item.lowericon} height={24} width={24} /><p className='font-semibold font-HeadingFont text-cardblacktxt '><span className={`${item.color} `}>{item.percentage}% </span> Up from yesterday</p> </div>
                        </div>
                    })
                }
            </div>

            <div className="my-[35px] shadow-md p-5 px-8 bg-white"> <LineChart /></div>



            <div className=' shadow-lg p-5 px-8'>
                <Table />

            </div>
        </div>







    )
}

export default Dashboard