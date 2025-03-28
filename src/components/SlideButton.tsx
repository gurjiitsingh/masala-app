import { UseSiteContext } from '@/SiteContext/SiteContext';
import React, { useEffect, useState } from 'react'

export default function SlideButton({paytypeL}:{paytypeL:string}) {
const [ on, setOn ] = useState<boolean>(false);
const { paymentType, setPaymentType } = UseSiteContext();
useEffect(()=>{
    if(paymentType !== paytypeL){
        setOn(false);
    }
},[paymentType,on])

function clickHandler(){
  console.log("paytype----------",paytypeL)
    setPaymentType(paytypeL)
     setOn(true)
}
  return (
    <button onClick={() => {clickHandler()
       }
             
        }>
    <div className=' w-[100px] bg-slate-300  border-zinc-300 border-2 rounded-3xl px-1 py-1'>
        <div className='w-full bg-amber-200 rounded-3xl shadow-2xl'>
        {!on ?
     <div className='w-full flex justify-start'>  <div className='w-5 h-5 bg-slate-300 rounded-3xl px-1 py-1'></div></div>
     :
     <div className='w-full flex justify-end'>   <div className='w-5 h-5 bg-red-300 rounded-3xl px-1 py-1'></div></div>
        }
    </div></div>
    </button>
  )
}


{/* <div className='mt-8 w-[100px] bg-slate-400 border border-zinc-500 rounded-3xl px-1 py-1'>
        <div className='w-full bg-slate-300 rounded-3xl shadow-2xl'>
        {!on ?
     <div className='w-full flex justify-start'>  <div className='w-5 h-5 bg-slate-400 rounded-3xl px-1 py-1'></div></div>
     :
     <div className='w-full flex justify-end'>   <div className='w-5 h-5 bg-slate-600 rounded-3xl px-1 py-1'></div></div>
        }
        </div> */}