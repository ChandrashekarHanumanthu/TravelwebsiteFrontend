import React from 'react';
import './Popular.css';

const PopularDestinations = () => {
    return (
        <div className='popular-destinations'>
            <div className='pop-top-section'>
                <div className='pop-text-content'>
                    <h1 className='pop-heading'>Popular destinations in Switzerland for you</h1>
                    <p className='pop-paragraph'>A collection of the most popular destinations</p>
                </div>
                <button className='pop-explore-btn'>Explore</button>
            </div>
            <div className='pop-bottom-section'>
                <div className='pop-left'>
                    <div className='pop-img-container'>
                        <img
                            src="https://www.wanderlustmagazine.com/wp-content/uploads/2023/10/WAND_Indonesia-scaled.jpg"
                            alt="Wanderlust"
                            className='pop-horizontal-img'
                        />
                        <p className='pop-text-overlay'>Wanderlust</p>
                    </div>
                </div>
                <div className='pop-middle'>
                    <div className='pop-img-container'>
                        <img
                            src="https://c4.wallpaperflare.com/wallpaper/599/182/461/hdr-landscape-indonesia-temple-wallpaper-preview.jpg"
                            alt="Bell Temple"
                            className='pop-vertical-img'
                        />
                        <p className='pop-text-overlay'>Bell Temple</p>
                    </div>
                    <div className='pop-img-container'>
                        <img
                            src="https://w0.peakpx.com/wallpaper/567/460/HD-wallpaper-bali-bay-beach-ultra-asia-indonesia-ocean-blue-view-travel-beach-nature-beautiful-summer-tropical-aerial-bali-places-destinations-seawater-littlefinger-kelingking.jpg"
                            alt="Bali"
                            className='pop-vertical-img'
                        />
                        <p className='pop-text-overlay'>Bali</p>
                    </div>
                </div>
                <div className='pop-right'>
                    <div className='pop-img-container'>
                        <img
                            src="https://theworldtravelguy.com/wp-content/uploads/2020/10/DSCF6411-3.jpg"
                            alt="Indonesia Islands"
                            className='pop-horizontal-img'
                        />
                        <p className='pop-text-overlay'>Indonesia Islands</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;
