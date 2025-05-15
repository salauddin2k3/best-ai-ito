import React from 'react';
import iconImage from '../../assets/IconAsk.png'
import bgImage from '../../assets/AskBG.png'

const AskEcon = () => {
    return (
        <div className=' container mx-auto mt-44 relative'>
            <div className='flex justify-center'>
                <img src={bgImage} alt="" />
            </div>
            <div className='flex justify-center'>
                <div className='flex items-center gap-74 justify-around absolute top-1/3'>
                    <div className='flex items-center gap-15'>
                        {/* Vector: Question */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="59" viewBox="0 0 38 59" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.041709 16.6117C0.735117 7.17169 8.374 0 19.1394 0C29.7922 0 38 6.9685 38 16.5093C38 19.6531 37.2168 22.433 35.4857 25.0131C33.79 27.5402 31.2715 29.7436 28.0256 31.9039L28.0107 31.9131C25.2215 33.7377 23.7471 35.0449 22.9236 36.2648C22.1652 37.3887 21.8252 38.6376 21.8252 40.6715C21.8252 40.7766 21.8167 40.881 21.8005 40.9826C21.6336 42.9934 19.9026 44.645 17.6648 44.645C15.3591 44.645 13.4895 42.8628 13.4895 40.6651C13.4895 40.6108 13.4902 40.5572 13.4923 40.5028V40.3624C13.474 37.8013 13.9002 35.5528 15.0446 33.4391L16.2837 31.5574C17.8048 29.6117 19.9409 27.8711 22.6581 26.0431C25.3913 24.1784 27.0872 22.6065 28.1063 21.1347C29.0818 19.7264 29.5009 18.321 29.5009 16.6285C29.5009 11.5543 25.2415 8.42818 19.0001 8.42818C13.163 8.42818 8.95439 11.2933 8.32033 17.0103C8.32316 17.0667 8.32386 17.1232 8.32386 17.1803C8.32386 19.3315 6.52989 21.1602 4.17536 21.1602C2.03289 21.1602 0.269329 19.6236 0.028301 17.6424C0.00638956 17.5161 -0.00279891 17.3876 0.000736896 17.2578L3.00524e-05 17.1802C3.00524e-05 16.9883 0.014166 16.7985 0.0424407 16.6116L0.041709 16.6117ZM12.4496 53.8962C12.4496 51.0282 14.8995 48.8312 17.804 48.8312C20.7614 48.8312 23.1165 51.0769 23.1165 53.8962C23.1165 56.6654 20.813 59 17.804 59C14.8472 59 12.4496 56.7149 12.4496 53.8962Z" fill="#F1F1F4" />
                        </svg>

                        {/* Text */}
                        <h3 className='font-sora text-4xl color-f1 font-semibold'>Ask anything about econ?</h3>
                    </div>

                    {/* Img: Icon */}
                    <div>
                        <img src={iconImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskEcon;