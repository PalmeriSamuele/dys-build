import React from 'react'

const DysCommunityForm = () => {
    return (
        <section className='flex flex-col gap-2'>
            <h2 className="indyspensable-dys-option-text text-base">Join our DYS Community and stay up-to-date</h2>
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-sm'>Personnal informations</p>
                <div className='flex gap-2'>
                    <input type='text' className='border border-[#ecb867] rounded w-1/2 px-2 outline-[#ecb867]' placeholder='First name *' />
                    <input type='text' className='border border-[#ecb867] rounded w-1/2 px-2 outline-[#ecb867]' placeholder='Last name *' />
                </div>
                <input type='email' className='border border-[#ecb867] rounded w-full px-2 outline-[#ecb867]' placeholder='Email *' />
                <div className='border border-[#ecb867] rounded w-full px-2 flex justify-between'>
                    <span className='text-gray-400'>Age</span>
                    <div className='grid grid-cols-2'>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>20-30</span>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>30-40</span>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>40-50</span>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>50&more</span>
                        </div>
                    </div>
                </div>
                <div className='border border-[#ecb867] rounded w-full px-2 flex justify-between'>
                    <span className='text-gray-400'>Tools</span>
                    <div className='grid grid-cols-2 gap-x-4'>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>Daily</span>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>Weekly</span>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>Monthly</span>
                        </div>
                        <div className='flex gap-1'>
                            <input type='radio' />
                            <span>Never</span>
                        </div>
                    </div>
                </div>
                <div className='border border-[#ecb867] rounded w-full px-2 flex justify-between flex flex-col gap-2 p-2'>
                    <p className='font-bold text-sm'>Can you list and describe which tool you use the most and what you like or dislike ?</p>
                    <textarea placeholder='Write here...' rows={8} className='border border-[#ecb867] rounded w-full p-2 outline-[#ecb867]' />
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' />
                    <p className='text-sm'>I agree to be contacted for more details</p>
                </div>
                <button className='bg-black text-white rounded w-[100px]'>
                    Send
                </button>
            </div>
        </section>)
}


export default DysCommunityForm