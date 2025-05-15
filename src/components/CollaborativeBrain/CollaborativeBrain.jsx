import React from 'react';
import BrainNetwork from '../BrainNetwork/BrainNetwork';

const CollaborativeBrain = () => {
    return (
        <div className=' mt-42.5 container mx-auto'>
            <div>
                {/* Heading */}
                <div>
                    <h2 className='color-f1 font-sora text-5xl font-semibold text-center'>Collaborative Brain</h2>
                    <p className='text-xl font-inter text-[#909098] font-normal mt-5 text-center'>Beyond a traditional team... econ is co-created by & for the community. We <br />collaborate and incentive hundreds of developers, AI-specialist and blockchain <br />architects globally to optimize</p>
                </div>

                {/* Circle */}
                <div>
                    <BrainNetwork></BrainNetwork>
                </div>

                {/* Btn */}
                <div className='mt-30 flex justify-center'>
                    <button className='text-xl font-medium font-inter flex items-baseline bg-[#7059FF] px-25 py-5.5 rounded-full gap-2'>Collaborative Brain</button>
                </div>
            </div>
        </div>
    );
};

export default CollaborativeBrain;