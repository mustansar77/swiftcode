"use client";
import React, { useState } from 'react';

const UploadFilings = () => {
    const [fileData, setFileData] = useState([
        { name: "case1.pdf", date: "Apr 14, 2025", Status: 'Filed' },
        { name: "case2.pdf", date: "Processing", Status: 'Processing' }
    ]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setSelectedFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        if (file) setSelectedFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const saveFileInfo = () => {
        if (!selectedFile) {
            alert('Please select or drag a file first.');
            return;
        }

        const now = new Date();
        const newEntry = {
            name: selectedFile.name,
            date: now.toLocaleDateString(),
            Status: "Filed"
        };

        setFileData((prevData) => [...prevData, newEntry]);
        setSelectedFile(null); // clear after submit
        document.getElementById('fileInput').value = null;
    };

    return (
        <div className='py-10 px-10 w-full'>
            <h1 className='font-extrabold font-HeadingFont text-cardblacktxt text-[25px]'>Upload Filings</h1>
            <div className="grid grid-cols-2 w-[100%] gap-20 py-7 ">
                {/* Upload Section */}
                <div className="flex flex-col  gap-7">
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className={`border-2 ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-[#a7a6a6] bg-white'} 
               h-[250px] w-[90%] rounded-[5px] flex justify-center items-center transition-all duration-200`}
                    >
                        <h1 className='font-bold font-HeadingFont text-cardblacktxt text-[20px]  text-center'>
                            Drag and drop files here
                        </h1>
                    </div>

                    {/* File Input */}
                    <div className="w-full flex p-3 items-center">
                        <input
                            type="file"
                            id="fileInput"
                            className='font-bold font-HeadingFont text-cardblacktxt text-[16px]'
                            onChange={handleFileChange}
                        />
                    </div>

                    {/* Show selected file (if any) */}
                    {selectedFile && (
                        <div className="text-sm text-gray-700 font-medium pl-3">
                            Selected File: <span className="font-semibold">{selectedFile.name}</span>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="w-full flex p-2 items-center">
                        <button
                            className='font-semibold bg-buttonBackground rounded-[5px] p-3 font-HeadingFont text-white text-[18px]'
                            onClick={saveFileInfo}
                        >
                            Submit Filings
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="w-full">
                    <table className='w-full'>
                        <thead className='border-2 border-[#a7a6a6]'>
                            <tr>
                                <th colSpan={3} className='text-left pl-3 py-5 font-extrabold font-HeadingFont text-cardblacktxt text-[25px]'>
                                    Filing Status
                                </th>
                            </tr>
                            <tr>
                                <td className='border-2 font-bold font-HeadingFont text-[18px] border-[#a7a6a6] h-12 pl-3'>Filename</td>
                                <td className='border-2 font-bold font-HeadingFont text-[18px] border-[#a7a6a6] h-12 pl-3'>Date Uploaded</td>
                                <td className='border-2 font-bold font-HeadingFont text-[18px] border-[#a7a6a6] h-12 pl-3'>Status</td>
                            </tr>
                        </thead>
                        <tbody className='border border-black'>
                            {fileData.map((item, index) => (
                                <tr key={index} className='border-2 border-black'>
                                    <td className='border-2 font-bold font-HeadingFont text-[17px] border-[#a7a6a6] h-12 pl-3'>{item.name}</td>
                                    <td className='border-2 font-bold font-HeadingFont text-[17px] border-[#a7a6a6] h-12 pl-3'>{item.date}</td>
                                    <td className='border-2 font-bold font-HeadingFont text-[17px] border-[#a7a6a6] h-12 pl-3'>{item.Status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UploadFilings;
