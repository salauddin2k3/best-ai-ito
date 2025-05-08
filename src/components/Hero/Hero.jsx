import React from 'react';

const Hero = () => {
    return (
        <div className=''>
            <div className='container mx-auto mt-44 flex flex-col items-center justify-center'>
                {/* title Section */}
                <div className='flex items-center gap-2'>
                    <p><svg className='w-8' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M10.4993 2.1665L2.16602 6.33317L10.4993 10.4998L18.8327 6.33317L10.4993 2.1665Z" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.16602 14.6665L10.4993 18.8332L18.8327 14.6665" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.16602 10.5L10.4993 14.6667L18.8327 10.5" stroke="#46CBD4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></p>
                    <p className='font-medium text-2xl font-inter text-[#46CBD4]'>Fast, no-code & cross-chain</p>
                </div>

                {/* Heading Section */}
                <div className='mt-3'>
                    <h2 className='text-6xl font-bold font-sora flex gap-3'>Build Earn <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="53" viewBox="0 0 40 53" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3747 2.46553C30.5964 1.6366 30.2536 0.760034 29.5287 0.302264C28.8017 -0.15593 27.863 -0.0872872 27.2111 0.467968L0.687382 23.7773C0.134757 24.2499 -0.112259 24.9905 0.0481957 25.701C0.209086 26.4093 0.749903 26.9719 1.45206 27.1599L14.6949 30.7083L9.62553 49.6279C9.40343 50.4564 9.74663 51.333 10.4715 51.7912C11.1982 52.2494 12.1373 52.1807 12.7891 51.625L39.3129 28.3157C39.8651 27.8436 40.1125 27.1025 39.9516 26.3924C39.7907 25.6842 39.2499 25.1215 38.5482 24.9335L25.3042 21.3847L30.3741 2.4651L30.3747 2.46553Z" fill="#29CC91" />
                    </svg></span> Automate</h2>
                </div>

                {/* Para Section */}
                <div className='mt-6'>
                    <p className='text-xl font-normal font-inter color-b6 text-center'>This statement refers to a system design that emphasizes speed, ease of use without <br /> requiring coding expertise, and compatibility with multiple blockchain networks <br /> through modular components.</p>
                </div>

                {/* Btn Section */}
                <div className='mt-12 flex items-center gap-6'>
                    <button className='text-xl font-medium font-inter flex items-baseline bg-[#7059FF] px-12 py-5 rounded-full gap-2'>Build now <span className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                            <path d="M7.10583 1L1.10583 7L7.10583 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16" fill="none">
                            <path d="M5.8941 1.42218L1.10582 14.5779" stroke="white" stroke-width="2" stroke-linecap="round" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                            <path d="M1.8941 13L7.8941 7L1.8941 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span></button>
                    <button className='flex text-xl font-medium font-inter color-f1 items-center gap-2 px-12 py-5 rounded-full border border-[#F1F1F4]'>Go to Docs <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M7.89404 17L17.894 7" stroke="#F1F1F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.89404 7H17.894V17" stroke="#F1F1F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span></button>
                </div>
            </div>
        </div>
    );
};

export default Hero;