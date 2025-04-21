import React from 'react'
import Image from 'next/image'
import Threebars from '../../../public/Threebars.svg'
import Search from '../../../public/search.svg'
import Notifications from '../../../public/Notifications.svg'
import Flag from '../../../public/Flag.svg'
import DropDown from '../../../public/Drop Down.svg'
import Woman from '../../../public/Woman.svg'
const Headers = () => {
    return (
        <div className="sticky py-3 pl-8 top-0 bg-white w-full">
            <nav className="flex items-center   justify-between">
                <div className="flex  w-[100%] items-center gap-8">
                    <Image src={Threebars} alt='' width={24} height={25} />
                    <div className="w-[50%]  flex items-center gap-2 px-3 border-[1px] rounded-[100px]
                    bg-bgcolor ">
                        <Image src={Search} alt='' width={20} height={20} />
                        <input
                            className="m-1.5 outline-none w-[100%] bg-transparent"
                            type="text"
                            placeholder="Search" />
                    </div>
                </div>
                <div className="flex items-center gap-5  w-[100%] justify-end pr-3">
                    <Image src={Notifications} alt='' width={29} height={30.5} />
                    <Image src={Flag} alt='' width={40} height={27} />
                    <div className="flex gap-2 text-[14px] font-semibold font-HeadingFont ">
                        <p>English</p>
                        <Image src={DropDown} alt='' width={8.17} height={4.67} className='text-iconcolor' />
                    </div>
                    <Image src={Woman} alt='' width={44} height={44} />
                    <div className="flex flex-col items-center ">
                        <h3 className="font-bold  text-cardblacktxt text-[14px] font-HeadingFont">Moni Roy</h3>
                        <p className="text-sm  text-r">Admin</p>
                    </div>
                    <div className='w-[30px] h-[30px] border-[0.1px] border-headerboarder  p-1 rounded-full flex items-center justify-center'>
                        <Image src={DropDown} alt='' height={30} width={30} className="   " />
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Headers