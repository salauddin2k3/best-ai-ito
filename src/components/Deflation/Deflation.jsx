import React from 'react';
import Image from '../../assets/deflation.png'

const Deflation = () => {
    return (
        <div className='mt-43 container mx-auto'>
            <div className='flex items-center justify-evenly'>
                {/* Left Side */}
                <div>
                    {/* Heading */}
                    <h2 className='color-f1 font-sora text-5xl font-semibold '>Deflation</h2>
                    {/* Para */}
                    <div>
                        <p className='text-xl font-inter text-[#909098] font-normal mt-5'>The most important lesson central banks taught through <br />history is that inflation hurts..</p>
                        <p className='text-xl font-inter text-[#909098] font-normal mt-5'>We burn all gas plus a safe fraction in treasury. 90% of <br />circulating suply will be burned day by day until matching <br />21,000,000 final tokens from original 210,000,000.</p>
                    </div>

                    {/* Percentage */}
                    <div className='mt-11.5 flex gap-18'>
                        <div>
                            <h2 className='text-[#29CC91] font-sora text-5xl font-semibold'>90%</h2>
                            <p className='text-xl font-inter text-[#909098] font-normal mt-3'>Of circulating <br />supply to be burnt</p>
                        </div>
                        <div>
                            <h2 className='text-[#E337CB] font-sora text-5xl font-semibold'>100%</h2>
                            <p className='text-xl font-inter text-[#909098] font-normal mt-3'>Of All Gas <br />is burned</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Deflation;