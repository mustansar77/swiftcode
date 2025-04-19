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
import settingWhiteIcon from '../../../public/homme.svg'
import helpWhiteIcon from '../../../public/1.svg'
import billingWhiteIcon from '../../../public/2.svg'
import templateWhiteIcon from '../../../public/3.svg'
import heartWhiteIcon from '../../../public/4.svg'
import dashboardDarkIcon from '../../../public/5.svg'
import uploadFilingsWhiteIcon from '../../../public/6.svg'
import logoutWhiteIcon from '../../../public/power.svg'

import { Power } from 'lucide-react'




const Sidebar = () => {
    const currentPath = usePathname()

    const navItems = [
        { name: 'Dashboard', path: '/Dashboard', icon: dashboardDarkIcon, iconActive: Dashboard, },
        { name: 'Upload Filings', path: '/UploadFilings', icon: UploadFilings, iconActive: uploadFilingsWhiteIcon, },
        { name: 'MyFilings', path: '/MyFilings', icon: Heart, iconActive: heartWhiteIcon, },
        { name: 'Templates', path: '/template', icon: Message, iconActive: templateWhiteIcon, },
        { name: 'Billing', path: '/biling', icon: Ticksbar, iconActive: billingWhiteIcon, },
        { name: 'Help', path: '/help', icon: Help, iconActive: helpWhiteIcon, },
    ]

    const bottomNav = [
        { name: 'Settings', path: '/setting', icon: Settings, iconActive: settingWhiteIcon, },
        { name: 'Logout', path: '/', icon: Logout, iconActive: logoutWhiteIcon, },
    ]

    const getLinkClass = (path) =>
        currentPath === path
            ? 'p-2 bg-buttonBackground text-white rounded-md cursor-pointer flex gap-x-3 items-center'
            : 'p-2 hover:bg-buttonBackground hover:text-white text-cardblacktxt rounded-md cursor-pointer flex gap-x-3 items-center'

    return (
        <div className="p-7 h-screen w-full flex flex-col gap-5 justify-between  border-[0.5px] border-borderColor">
            <div className="flex bg-white flex-col border-b border-borderColor pb-4">
                <div className='w-[100%] flex items-center justify-center'>
                    <h1 className="text-headingscolor text-[20px] font-extrabold font-HeadingFont">SwiftDocket</h1>
                </div>

                {navItems.map((item, index) => (
                    <Link href={item.path} key={index} className="my-[5px]">
                        <div className={`${getLinkClass(item.path)} px-8 py-5 group`}>
                            <div className="relative w-[22px] h-[25px]">
                                {/* Default (Black) Icon */}
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={22}
                                    height={25}
                                    className={`absolute top-0 left-0 transition-opacity duration-300 ${currentPath === item.path ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                                        }`}
                                />
                                {/* Active/Hover (White) Icon */}
                                <Image
                                    src={item.iconActive}
                                    alt={item.name}
                                    width={22}
                                    height={25}
                                    className={`absolute top-0 left-0 transition-opacity duration-300 ${currentPath === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}
                                />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    </Link>

                ))}
            </div>

            <div className="flex flex-col">
                {bottomNav.map((item, index) => (
                    <Link href={item.path} key={index} className="my-[5px]">
                        <div className={`${getLinkClass(item.path)} px-8 py-5 group`}>
                            <div className="relative w-[22px] h-[25px]">
                                {/* Default (Black) Icon */}
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={22}
                                    height={25}
                                    className={`absolute top-0 left-0 transition-opacity duration-300 ${currentPath === item.path ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                                        }`}
                                />
                                {/* Active/Hover (White) Icon */}
                                <Image
                                    src={item.iconActive}
                                    alt={item.name}
                                    width={22}
                                    height={25}
                                    className={`absolute top-0 left-0 transition-opacity duration-300 ${currentPath === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}
                                />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
