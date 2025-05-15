import React from 'react';

const Exponentially = () => {
    return (
        <div className='mt-44 container mx-auto'>
            <div className='flex items-center gap-30 justify-center'>
                {/* Lest Side */}
                <div>
                    <div>
                        <h2 className='text-[#7059FF]  font-sora text-7xl font-bold'>250K <sub className='text-5xl text-[#f1f1f4cc]'>TPS</sub> </h2>
                        <p className='text-xl font-inter text-[#909098] font-normal mt-3'>Peak network capacity at 450kTPS</p>
                    </div>

                    <hr className="border-[#42526D] my-16 w-[323px] border-dashed " />

                    <div>
                        <h2 className='text-[#7059FF]  font-sora text-7xl font-bold'>{`<`}1.98 <sub className='text-5xl text-[#f1f1f4cc]'>SEC</sub> </h2>
                        <p className='text-xl font-inter text-[#909098] font-normal mt-3'>Transaction finality</p>
                    </div>
                </div>


                {/* Right Side */}
                <div>
                    <div>
                        {/* Heading Section */}
                        <h2 className='color-f1 font-sora text-5xl font-semibold leading-[64.8px]'>Exponentially <br />scalable</h2>

                        {/* Second Heading */}
                        <div className='mt-5 flex items-center gap-2.5'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_0_179)">
                                        <path d="M9.99935 1.66699L1.66602 5.83366L9.99935 10.0003L18.3327 5.83366L9.99935 1.66699Z" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.66602 14.1667L9.99935 18.3334L18.3327 14.1667" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.66602 10L9.99935 14.1667L18.3327 10" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_179">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h4 className='text-[#46CBD4] font-inter text-xl font-medium'>Modular Architecture</h4>
                        </div>

                        {/* Para Section */}
                        <div className='mt-2.5'>
                            <p className='text-xl font-inter text-[#909098] font-normal'>rdPoS validation by deterministically ordered micro <br />sampling to efficiently find the alpha majority securing <br />every transaction.</p>
                            <p className='text-xl font-inter text-[#909098] font-normal mt-6'>Design for perpetual evolution with the capacity to <br />execute with the most efficient layers and VM's in the <br />ecosystem.</p>
                        </div>

                        {/* Btn Section */}
                        <div className='mt-8 flex items-center gap-6'>
                            <button className='text-lg font-medium font-inter flex items-baseline bg-[#7059FF] px-12 py-4 rounded-full gap-2'>Build now <span className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                    <path d="M7.10583 1L1.10583 7L7.10583 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                                    <path d="M5.8941 1.42218L1.10582 14.5779" stroke="white" stroke-width="2" stroke-linecap="round" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                                    <path d="M1.8941 13L7.8941 7L1.8941 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span></button>
                            <button className='flex text-lg font-medium font-inter color-f1 items-center gap-2 px-12 py-4 rounded-full border border-[#F1F1F4]'>Go to Docs <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M7.89404 17L17.894 7" stroke="#F1F1F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.89404 7H17.894V17" stroke="#F1F1F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exponentially;