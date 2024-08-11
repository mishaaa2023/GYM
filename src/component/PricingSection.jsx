import React from 'react'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const PricingSection = () => {
  return (
    <>

    <section className='    w-[100%] 'style={{marginTop:"5rem"}}>
    <h1 className='mt-5 text-center  text-4xl josefin-sans'>Our Pricing Plans</h1>
   <div className='flex  items-center justify-center gap-4 py-9 flex-wrap 'style={{marginTop:"2rem"}}>
   <div className='w-[20rem]  flex items-center gap-4 justify-center flex-col bg-slate-300 p-10 rounded-lg mx-3'>
        <h1 className='text-[2rem]'>Basic</h1>
        <h2 className='text-[5rem]'>$12</h2>
        <p>per month</p>
        <div className='flex flex-col gap-4'>
            <ul className='flex flex-col gap-2'>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Weight training equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Group fitness class schedule</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Weight training equipment</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Group fitness class schedule</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Weight training equipment</li>
            </ul>
            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Pay Now
        </button>
        </div>
    </div>
    <br/>
    <div className='w-[20rem]  flex items-center gap-4 justify-center flex-col bg-slate-300 p-10 rounded-lg mx-3'>
        <h1 className='text-[2rem]'>Standard</h1>
        <h2 className='text-[5rem]'>$22</h2>
        <p>per month</p>
        <div className='flex flex-col gap-4'>
            <ul className='flex flex-col gap-2'>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Weight training equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Group fitness class schedule</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Weight training equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Group fitness class schedule</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><RxCross2 /> Weight training equipment</li>
            </ul>
            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Pay Now
        </button>
        </div>
    </div>
    <br/>
    <div className='w-[20rem]  flex items-center gap-4 justify-center flex-col bg-slate-300 p-10 rounded-lg mx-3'>
        <h1 className='text-[2rem]'>Premium</h1>
        <h2 className='text-[5rem]'>$34</h2>
        <p>per month</p>
        <div className='flex flex-col gap-4'>
            <ul className='flex flex-col gap-2'>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Weight training equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Group fitness class schedule</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Weight training equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Group fitness class schedule</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Unlimited gym access</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Cardio equipment</li>
                <li className='text-1xl flex items-center gap-2'><TiTick /> Weight training equipment</li>
            </ul>
            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Pay Now
        </button>
        </div>
    </div>
    <br/>
   </div>
    </section>
    
    </>
  )
}

export default PricingSection