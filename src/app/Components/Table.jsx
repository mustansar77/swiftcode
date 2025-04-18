import React from 'react'
import Image from 'next/image'
import Bitmap from '../../../public/Bitmap.svg'

const Table = () => {

    const datatable = [
        {
            Productname: "Apple Watch",
            Location: "6096 Marjoline Landing",
            datetime: "12.09.2019-12.53",
            price: "423",
            Amount: "$34295",
            status: "Delivered"
        },
        {
            Productname: "Apple Watch",
            Location: "6096 Marjoline Landing",
            datetime: "12.09.2019-12.53",
            price: "423",
            Amount: "$34295",
            status: "Delivered"
        },
        {
            Productname: "Apple Watch",
            Location: "6096 Marjoline Landing",
            datetime: "12.09.2019-12.53",
            price: "423",
            Amount: "$34295",
            status: "Delivered"
        },
        {
            Productname: "Apple Watch",
            Location: "6096 Marjoline Landing",
            datetime: "12.09.2019-12.53",
            price: "423",
            Amount: "$34295",
            status: "Delivered"
        },
    ]

    return (
        <>
            <div className="flex justify-between py-5">
                <div><h1 className=' text-[24px] font-bold text-cardblacktxt font-HeadingFont'>Pending Review Details</h1></div>
                <div className="border: 0.6px solid border-[#D5D5D5]">
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
                </div>
            </div>
            <div className='shadow-xl '>

                <table className='w-[100%] '>
                    <thead className='bg-tableheardercolor'>
                        <tr>
                            <th className='text-start items-center py-3 px-3 text-cardblacktxt font-HeadingFont text-[14px] font-bold'>Productname</th>
                            <th className='text-start items-center  text-cardblacktxt font-HeadingFont text-[14px] font-bold'>Location</th>
                            <th className='text-start items-center  text-cardblacktxt font-HeadingFont text-[14px] font-bold'>Date - Time</th>
                            <th className='text-start items-center  text-cardblacktxt font-HeadingFont text-[14px] font-bold'>Piece </th>
                            <th className='text-start items-center  text-cardblacktxt font-HeadingFont text-[14px] font-bold'>Amount</th>
                            <th className='text-start items-center  text-cardblacktxt font-HeadingFont text-[14px] font-bold'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datatable.map((item, index) => {
                            return (
                                <tr cla>
                                    <td className='flex items-center gap-3 p-2 '><Image src={Bitmap} width={36} height={36} alt='' />{item.Productname}</td>
                                    <td className='font-HeadingFont  font-semibold text-[14px] text-cardblacktxt'>{item.Location}</td>
                                    <td className='font-HeadingFont font-semibold text-[14px] text-cardblacktxt'>{item.datetime}</td>
                                    <td className='font-HeadingFont font-semibold text-[14px] text-cardblacktxt'>{item.price}</td>
                                    <td className='font-HeadingFont  font-semibold text-[14px] text-cardblacktxt'>{item.Amount}</td>
                                    <td className='justify-center font-HeadingFont font-semibold text-[14px]  text-cardblacktxt'>
                                        <p className='bg-[#00B69B] w-[70%] flex justify-center py-1 rounded-[100px] text-white'>
                                            {item.status}
                                        </p>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table