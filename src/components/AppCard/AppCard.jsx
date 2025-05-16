import React from 'react';
import rightSideImage from '../../assets/app-right.png'
import appBgImage from '../../assets/bg/app-bg.png'

const AppCard = () => {
    return (
        <div className='mt-32 container mx-auto w-fit relative'>
            <img className='rounded-[20px] absolute' src={appBgImage} alt="" />
            <div className='border border-[#ffffff0f] border-solid pl-20 pr-7 py-11 rounded-[20px] bg-[#ffffff08] backdrop-blur-[7.5px]'>
                <div className='flex items-center gap-16'>
                    <div>
                        {/* Left Side */}
                        <div>
                            {/* Title Section */}
                            <div className='flex items-center gap-2.5'>
                                <div className='flex gap-0.5 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                        <path d="M7 1L1 7L7 13" stroke="#2F9AA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                                        <path d="M5.78827 1.42212L0.999987 14.5778" stroke="#2F9AA3" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                        <path d="M1.78827 13L7.78827 7L1.78827 1" stroke="#2F9AA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className='font-inter text-xl font-medium text-[#2F9AA3]'>Chapter - DeFi</p>
                            </div>

                            {/* Heading Section */}
                            <div>
                                <h2 className='text-5xl font-sora font-semibold color-f1 mt-3'>Go Build your dApp</h2>
                            </div>

                            {/* Para Section */}
                            <p className='font-inter text-xl font-normal text-[#909098] mt-5'>Open terminal / or no-code dApp builder.</p>

                            {/* Btn Section */}
                            <div className='mt-9'>
                                <button className='text-xl font-medium font-inter flex items-baseline bg-[#7059FF] px-12 py-5 rounded-full gap-2'>Build now <span className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                        <path d="M7.10583 1L1.10583 7L7.10583 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                                        <path d="M5.8941 1.42218L1.10582 14.5779" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                        <path d="M1.8941 13L7.8941 7L1.8941 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span></button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <img src={rightSideImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;