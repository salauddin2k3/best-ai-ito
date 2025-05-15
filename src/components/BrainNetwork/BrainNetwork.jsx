import React from 'react';
import brain from "../../assets/brain.png"; // replace with your brain image
import avatar1 from "../../assets/avatar1.png"; // use actual avatar images
import avatar2 from "../../assets/avatar2.png"; // use actual avatar images
import avatar3 from "../../assets/avatar3.png"; // use actual avatar images
import avatar4 from "../../assets/avatar4.png"; // use actual avatar images
import avatar5 from "../../assets/avatar5.png"; // use actual avatar images
import avatar6 from "../../assets/avatar6.png"; // use actual avatar images
import avatar7 from "../../assets/avatar7.png"; // use actual avatar images
import avatar8 from "../../assets/avatar8.png"; // use actual avatar images
import avatar9 from "../../assets/avatar9.png"; // use actual avatar images

const BrainNetwork = () => {
  return (
    <div className='mt-30 relative'>
      <div className='flex items-center justify-center'>
        <div className='border-2 border-[#2C2C32] border-solid rounded-full px-25 py-25'>
          {/* 1st circle */}
          <img className='absolute right-[46%] top-[-5%]' src={avatar1} alt="" />
          <img className='absolute right-[46%] bottom-[-5%]' src={avatar3} alt="" />
          <img className='absolute right-[11.5%] top-[44.5%]' src={avatar2} alt="" />
          <img className='absolute left-[11.5%] top-[44.5%]' src={avatar4} alt="" />

          {/* 2nd circle */}
          <img className='absolute right-[30%] top-[13%]' src={avatar5} alt="" />
          <img className='absolute left-[30%] bottom-[13%]' src={avatar6} alt="" />
          <div className='border-2 border-[#2C2C32] border-solid rounded-full px-25 py-25'>

            {/* 3rd circle */}
            <img className='absolute left-[31.5%] top-[25%]' src={avatar7} alt="" />
            <img className='absolute right-[31.5%] bottom-[25%]' src={avatar9} alt="" />
            <div className='border-2 border-[#2C2C32] border-solid rounded-full px-25 py-25'>

              {/* 4th circle */}
              <img className='absolute right-[33.5%] top-[38%]' src={avatar8} alt="" />
              <div className='border-2 border-[#2C2C32] border-solid rounded-full px-28.5 py-26 '>
                <img src={brain} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainNetwork;