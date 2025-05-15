import React from 'react';
import Image from '../../assets/utility.png'

const Utility = () => {
    return (
        <div className='mt-43 container mx-auto'>
            <div className='flex items-center justify-evenly'>
                {/* Left Side */}
                <div>
                    <img src={Image} alt="" />
                </div>

                {/* Right Side */}
                <div>
                    {/* Heading */}
                    <h2 className='color-f1 font-sora text-5xl font-semibold '>Utility</h2>
                    {/* Para */}
                    <div>
                        <p className='text-xl font-inter text-[#909098] font-normal mt-5'>The $ECON token function as a utility tool collateral while <br />Hubs participate in the consensus mechanics. In addition <br />tokens in the treasury adjust liquidity in all multi-chain <br />assets and shared.</p>
                        <p className='text-xl font-inter text-[#909098] font-normal mt-5'>All rewards are generated from treasury and <br />ecosystem performance, NOT by minting inflation as <br />traditional protocols.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utility;