import {ChevronDownIcon,AdjustmentsHorizontalIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"


export default function Home() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    
      <div className="bg-gray-50">
        <div className="container mx-auto lg:max-w-screen-lg">
    <div dir="rtl" className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] min-h-screen">
     <div className="hidden md:block md:row-span-2 md:col-span-3">
      <div className="bg-white rounded-3xl overflow-hidden">
    <div className="flex items-center justify-between py-4 px-4 bg-purple-400"
    onClick={()=>setIsOpen(!isOpen)}>
    <span>دسته بندی مقالات</span>
    <ChevronDownIcon className={`w-6 h-6 cursor-pointer bg-purple-400 transition-all duration-200 
    ${isOpen ? "rotate-180":"rotate-0"}`}
    />
    </div>
    <div className={`${isOpen ? "block":"hidden"}`}>
      <Link href={"#"} className="block px-2 hover:bg-purple-100 py-2 mb-1" >
       همه مقالات
      </Link>
      <Link href={"#"}  className="block px-2 hover:bg-purple-100 py-2 mb-1">
       ریکت 
      </Link>
      <Link href={"#"}  className="block px-2 hover:bg-purple-100 py-2 mb-1">
     جاوااسکریپت
      </Link>
        </div>
        </div>
        </div>
        <div className="hidden md:block md:col-span-9 " >
     <div className="bg-white rounded-3xl px-4 flex items-center">
      <div className="flex gap-x-2 items-center ml-4">
      <AdjustmentsHorizontalIcon className="w-6 h-6 " />
      <span className="text-gray-700">مرتب سازی:</span>
      </div>
      <ul className=" flex items-center gap-x-4">
        <li className="text-gray-700 cursor-pointer py-4">پر بازدید ترین ها</li>
        <li className="text-gray-700 cursor-pointer py-4">محبوب ترین ها</li>
        <li className="text-gray-700 cursor-pointer py-4">جدید ترین ها</li>
      </ul>
     </div>
      </div>  
      <div className="">
        </div> 
  </div>
      </div>
      </div>
  )
}
