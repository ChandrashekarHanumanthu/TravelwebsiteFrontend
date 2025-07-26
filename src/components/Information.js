import React from 'react';
import './Information.css';

const Information = () => {
    return (
        <div className='information-container'>
            <div className='info'>
                <div className='info-headings'>
                    <h1 className='info-head'>To stay connected and more information</h1>
                    <p>Put your email below for more information about Travel Logo</p>
                </div>
                <div className='info-email'>
                    <div className="input-with-icon">
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            className="input-field"
                        />
                    </div>
                    <button className='btn btn-primary mx-4'>Send</button>
                </div>
            </div>
            <div>
                <img
                    src="https://media.istockphoto.com/id/477372378/photo/travel-collage-world-images.jpg?s=612x612&w=0&k=20&c=f58flJv08W5A9NAn2t4XFmd8Z_T2UwNc8dPdK-xkxc8="
                    alt="Travel Collage"
                    className='info-image'
                />
            </div>
        </div>
    );
};

export default Information;
