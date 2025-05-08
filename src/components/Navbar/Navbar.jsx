import React from 'react';

const Navbar = () => {
    return (
        <div className=''>
            <div className='container mx-auto p-8'>
                <div className='flex items-center justify-between'>
                    {/* Logo Section */}
                    <div className='flex items-center gap-3'>
                        <a href="#"><h2 className=''><svg className='w-9' xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 36 42" fill="none">
                            <g clip-path="url(#clip0_0_98)">
                                <path d="M12.7257 0.150059H13.8682C18.8685 11.635 23.9678 23.0792 29.1664 34.4826C30.03 36.3767 30.9808 37.8649 32.0186 38.9473C32.8396 39.8035 34.0276 40.4577 35.5825 40.9099V41.6133C30.0838 41.717 24.585 41.743 19.0862 41.6911C19.0677 41.6911 18.9945 41.6994 18.8666 41.7161C18.6535 41.7458 18.5089 41.6077 18.4329 41.3019C18.4183 41.2412 18.4175 41.1779 18.4307 41.1169C18.444 41.0558 18.4709 40.9985 18.5094 40.9493C18.5479 40.9001 18.597 40.8603 18.6531 40.8327C18.7092 40.8052 18.7708 40.7907 18.8332 40.7904C20.3622 40.7848 22.7252 40.3762 23.2812 38.7082C23.701 37.4489 22.9309 35.7475 22.3694 34.4882C20.2344 29.7196 16.1311 20.4735 10.0597 6.7497C10.0226 6.6663 10.0217 6.5829 10.0569 6.4995L12.7257 0.150059Z" fill="#7059FF" />
                                <path d="M11.6564 41.8497H0V40.9934C3.48052 40.7293 6.19655 39.7647 4.35621 35.6142C3.30538 33.2475 2.26011 30.9031 1.22041 28.5809C1.18268 28.4965 1.16248 28.4055 1.16104 28.3132C1.15961 28.221 1.17697 28.1295 1.21207 28.0443L3.64454 22.1508C3.70278 22.0098 3.80104 21.8889 3.9272 21.8031C4.05336 21.7173 4.20189 21.6703 4.35445 21.6679C4.50702 21.6655 4.65693 21.7079 4.78569 21.7898C4.91445 21.8716 5.01642 21.9894 5.079 22.1286C6.99718 26.393 8.98115 30.727 11.0309 35.1305C12.2763 37.8048 13.9777 40.2957 16.9356 40.7905C16.9749 40.7969 17.0108 40.8167 17.0372 40.8466C17.0635 40.8766 17.0787 40.9147 17.0801 40.9545L17.1024 41.6134C17.1035 41.6368 17.0999 41.6603 17.0917 41.6823C17.0836 41.7043 17.0711 41.7245 17.0551 41.7416C17.039 41.7588 17.0196 41.7725 16.9981 41.7819C16.9767 41.7914 16.9535 41.7965 16.93 41.7968L11.6564 41.8497Z" fill="#7059FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_98">
                                    <rect width="35.5836" height="41.6995" fill="white" transform="translate(0 0.150253)" />
                                </clipPath>
                            </defs>
                        </svg></h2></a>
                        <a href="#"><h2 className='color-f1 font-sora text-4xl font-normal'>BEST AI</h2></a>
                    </div>

                    {/* Menu Section */}
                    <div>
                        <ul className='flex items-center gap-12'>
                            <li className='color-b6 font-inter font-medium'><a href="#">Explore</a></li>
                            <li className='color-b6 font-inter font-medium'><a href="#">Build</a></li>
                            <li className='color-b6 font-inter font-medium'><a href="#">BuildBest ai Brain</a></li>
                        </ul>
                    </div>

                    {/* Docs Section */}
                    <div className='flex items-end gap-2'>
                        <h2 className='color-f1 text-lg font-medium underline'><a href="#">Go to Docs</a></h2>
                        <h2><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M5.83203 14.6668L14.1654 6.3335" stroke="#F1F1F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.83203 6.3335H14.1654V14.6668" stroke="#F1F1F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></a></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;