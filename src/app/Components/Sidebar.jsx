'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Dashboard from '../../../public/Dashboard.svg'
import UploadFilings from '../../../public/.svg'
import Heart from '../../../public/Heart.svg'
import Message from '../../../public/Message.svg'
import Ticksbar from '../../../public/Ticksbar.svg'
import Help from '../../../public/Help.svg'
import Settings from '../../../public/Settings.svg'
import Logout from '../../../public/Logout.svg'
const Sidebar = () => {
    const currentPath = usePathname()
    const navItems = [
        { name: 'Dashboard', path: '/Dashboard', icon: Dashboard },
        { name: 'Upload Filings', path: '/UploadFilings', icon: UploadFilings },
        { name: 'MyFilings', path: '/MyFilings', icon: Heart },
        { name: 'Templates', path: '/Templates', icon: Message },
        { name: 'Billing', path: '/Billing', icon: Ticksbar },
        { name: 'Help', path: '/Help', icon: Help },
    ]
    const bottomNav = [
        { name: 'Settings', path: '/Settings', icon: Settings },
        { name: 'Logout', path: '/Logout', icon: Logout },
    ]
    const getLinkClass = (path) =>
        currentPath === path
            ? 'p-2 bg-buttonBackground text-white rounded-md cursor-pointer flex gap-x-3 items-center'
            : 'p-2 hover:bg-buttonBackground hover:text-white text-cardblacktxt rounded-md cursor-pointer flex gap-x-3 items-center'
    return (
        <div className="p-7 h-screen w-full flex flex-col gap-5 justify-between border-r border-borderColor  ">

            <div className="flex bg-white  flex-col border-b border-borderColor pb-4  ">
                <div className='w-[100%] flex items-center justify-center'>
                    <h1 className="text-headingscolor text-[20px] font-extrabold  font-HeadingFont">SwiftDocket</h1>

                </div>
                {navItems.map((item, index) => (
                    <Link href={item.path} key={index} className='my-[5px] '>
                        <div className={`${getLinkClass(item.path)} px-8`}>
                            <Image src={item.icon} alt={item.name} width={22} height={25} />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex  flex-col  ">

                {bottomNav.map((item, index) => (
                    <Link href={item.path} key={index} className='my-[5px] '>
                        <div className={`${getLinkClass(item.path)} px-8`}>
                            <Image src={item.icon} alt={item.name} width={22} height={25} />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Sidebar





