import React from 'react';
import Image from 'next/image';
import Bitmap from '../../../public/Bitmap.svg';
const Table = () => {
    const datatable = [
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
        {
            Productname: 'Apple Watch',
            Location: '6096 Marjoline Landing',
            datetime: '12.09.2019-12.53',
            price: '423',
            Amount: '$34295',
            status: 'Delivered',
        },
    ];
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between py-5">
                <h1 className="text-[24px] font-bold text-headingscolor font-HeadingFont">
                    Pending Review Details
                </h1>
                <div className="mt-4 md:mt-0">
                    <select
                        className="bg-transparent border border-grayborder text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonBackground">
                        <option value="January">January</option>
                        <option value="December">December</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto shadow-xl">
                <table className="min-w-full divide-y divide-grayColor">
                    <thead className="bg-tableheardercolor">
                        <tr>
                            <th className="px-6 py-3 text-left  font-HeadingFont font-bold text-headingscolor text-[14px] tracking-wider">
                                ProductName
                            </th>
                            <th className="px-6 py-3 text-left  font-HeadingFont font-ebold text-headingscolor text-[14px]  tracking-wider">
                                Location
                            </th>
                            <th className="px-6 py-3 text-left font-HeadingFont font-bold text-headingscolor text-[14px]  tracking-wider">
                                Date - Time
                            </th>
                            <th className="px-6 py-3 text-left  font-HeadingFont font-ebold text-headingscolor  text-[14px]  tracking-wider">
                                Piece
                            </th>
                            <th className="px-6 py-3 text-left  font-HeadingFont font-bold text-headingscolor  text-[14px]  tracking-wider">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left font-HeadingFont font-bold  text-headingscolor text-[14px]  tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-grayColor">
                        {datatable.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3  font-HeadingFont font-semibold text-cardblacktxt text-[14px]">
                                    <Image src={Bitmap} width={36} height={36} alt="" />
                                    {item.Productname}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-HeadingFont font-semibold text-headingscolor text-[14px]">
                                    {item.Location}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  font-HeadingFont font-semibold text-headingscolor text-[14px]">
                                    {item.datetime}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  font-HeadingFont font-semibold text-headingscolor text-[14px]">
                                    {item.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  font-HeadingFont font-semibold text-headingscolor text-[14px]">
                                    {item.Amount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  font-HeadingFont font-semibold text-headingscolor text-[14px]t">
                                    <span className="inline-flex px-4 py-2 text-xs leading-5 font-semibold rounded-full bg-cyanColor text-white">
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default Table;
