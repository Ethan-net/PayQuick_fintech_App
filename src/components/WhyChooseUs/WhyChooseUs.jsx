import React from 'react'
import Gift from '/src/assets/images/gift.png'
import Circle from '/src/assets/images/circle.png'


function whyChooseUs() {


  return (
    <div className='lg:my-10 lg:mx-40 sm:mx-3 md:mx-20  mt-14 mx-4'>
        <>  
    <h1 className='text-center text-black font-semibold lg:text-4xl text-2xl md:text-3xl '>Why Choose us?</h1>
    </>
    <div className='flex justify-between mt-10 lg:gap-5 md:gap-3 gap-2 '>
        <div>
        <img className=' mb-8 w-8 ml-8 lg:ml-10 lg:mb-14 lg:w-10 md:w-8 md:ml-6 md:mb-6   ' src={Gift} alt="Gift Icon" />
            <div className='rounded-lg bg-green lg:p-8  md:p-4 p-3' >
                <img className='lg:w-16 md:w-12 w-12 ' src={Circle} alt="circle icon" />
                <h3 className='text-base mt-2 lg:text-xl font-medium text-white lg:mt-5 md:mt-4 md:text-lg '>98% Success Rate</h3>
            <p className='text-xs mt-2 lg:text-sm text-white lg:mt-2 lg:mr-10 md:text-xs md:mr-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
            <button className='bg-yellow rounded-3xl font-semibold text-xs py-1 px-3 mt-3 lg:text-sm lg:py-2 lg:px-4 lg:mt-5 md:text-xs md:px-3 md:py-2'>Read More</button>
            </div>
        </div>
        <div >
            <img className='mb-8 w-8 ml-8 lg:ml-10 lg:mb-14 lg:w-10 md:w-8 md:ml-6 md:mb-6 ' src={Gift} alt="Gift Icon" />
            <div className='rounded-lg bg-green lg:p-8  md:p-4 p-3'>
                <img className='lg:w-16 md:w-12 w-12  ' src={Circle} alt="circle icon"  />
            <h3 className='text-base mt-2 lg:text-xl font-medium text-white lg:mt-5 md:mt-4 md:text-lg '>100% Success Rate</h3>
            <p className='text-xs mt-2 lg:text-sm text-white lg:mt-2 lg:mr-10 md:text-xs md:mr-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
            <button className='bg-yellow rounded-3xl font-semibold text-xs py-1 px-3 mt-3 lg:text-sm lg:py-2 lg:px-4 lg:mt-5 md:text-xs md:px-3 md:py-2'>Read More</button>
            </div>
        </div>
        <div>
            <img className='mb-8 w-8 ml-8 lg:ml-10 lg:mb-14 lg:w-10 md:w-8 md:ml-6 md:mb-6  ' src={Gift} alt="Gift Icon" />
            <div className='rounded-lg bg-green lg:p-8  md:p-4 p-3'>
                <img className='lg:w-16 md:w-12 w-12 ' src={Circle} alt="circle icon" />
            <h3 className='text-base mt-2  lg:text-xl font-medium text-white lg:mt-5 md:mt-4 md:text-lg'>100% Success Rate</h3>
            <p className='text-xs mt-2 lg:text-sm text-white lg:mt-2 lg:mr-10 md:text-xs md:mr-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
            <button className='bg-yellow rounded-3xl font-semibold text-xs py-1 px-3 mt-3 lg:text-sm lg:py-2 lg:px-4 lg:mt-5 md:text-xs md:px-3 md:py-2'>Read More</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default whyChooseUs