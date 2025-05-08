import React from 'react';
import logo1 from '../../assets/logo/metamask.png'
import logo2 from '../../assets/logo/ledger.png'
import logo3 from '../../assets/logo/sparq.png'
import logo4 from '../../assets/logo/capital.png'
import logo5 from '../../assets/logo/openai.png'
import logo6 from '../../assets/logo/fuel.png'

const Companies = () => {
    return (
        <div className='mt-64 container mx-auto'>
            {/* Heading Section */}
            <h2 className='text-2xl font-sora text-[#909098] font-semibold text-center'>Trusted by companies at</h2>

            {/* Logo Section */}
            <div className='mt-8 flex items-center justify-evenly'>
                {/* 1st logo */}
                <div>
                    <img src={logo1} alt="" />
                </div>
                {/* 2nd logo */}
                <div>
                    <img src={logo2} alt="" />
                </div>
                {/* 3rd logo */}
                <div>
                    <img src={logo3} alt="" />
                </div>
                {/* 4th logo */}
                <div>
                    <img src={logo4} alt="" />
                </div>
                {/* 5th logo */}
                <div>
                    <img src={logo5} alt="" />
                </div>
                {/* 6th logo */}
                <div>
                    <img src={logo6} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Companies;