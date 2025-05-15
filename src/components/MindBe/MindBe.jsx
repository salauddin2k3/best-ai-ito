import React from 'react';
import powerImage from '../../assets/power-circle.png'

const MindBe = () => {
    return (
        <div className=' container mx-auto mt-44'>
            <div className='flex items-center justify-center gap-44'>
                {/* Left Side */}
                <div>
                    {/* Heading */}
                    <h2 className='color-f1 font-sora text-5xl font-semibold leading-[64.8px]'>Empty your mind.Be <br />formless, shapeless,
                        <br />Be like water.</h2>

                    {/* Para */}
                    <div className='mt-5'>
                        <p className='text-xl font-inter color-f1 font-normal'>Up to 35% discount validating Test-net.</p>
                        <p className='text-xl font-inter color-f1 font-normal mt-2'>Design for perpetual evolution with the capacity to <br />execute with the most efficient layers and VM's in the <br />ecosystem.</p>
                    </div>

                    {/* btn */}
                    <div className='mt-7.5'>
                        <button className=' text-lg font-medium font-inter flex items-center bg-[#7059FF] px-12 py-4 rounded-full gap-2.5'> Early-stage White-list<span className=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M7 17.5002L17 7.50024" stroke="#F1F1F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 7.50024H17V17.5002" stroke="#F1F1F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></span></button>
                    </div>
                </div>

                {/* Right Side */}
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={powerImage} alt="" />
                    </div>

                    {/* Text */}
                    <div className='flex items-center gap-2.5 mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 7H18C18.6566 7 19.3068 7.12933 19.9134 7.3806C20.52 7.63188 21.0712 8.00017 21.5355 8.46447C21.9998 8.92876 22.3681 9.47996 22.6194 10.0866C22.8707 10.6932 23 11.3434 23 12C23 12.6566 22.8707 13.3068 22.6194 13.9134C22.3681 14.52 21.9998 15.0712 21.5355 15.5355C21.0712 15.9998 20.52 16.3681 19.9134 16.6194C19.3068 16.8707 18.6566 17 18 17H15M9 17H6C5.34339 17 4.69321 16.8707 4.08658 16.6194C3.47995 16.3681 2.92876 15.9998 2.46447 15.5355C1.52678 14.5979 1 13.3261 1 12C1 10.6739 1.52678 9.40215 2.46447 8.46447C3.40215 7.52678 4.67392 7 6 7H9" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 12H16" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#46CBD4] text-base font-medium font-inter'>A fast blockchain for real world problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MindBe;