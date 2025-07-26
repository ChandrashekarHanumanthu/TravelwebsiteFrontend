import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons';
import './Recommend.css';

const Recommendation = () => {
    return (
        <div className="container mt-5 recommend-container">
            <div className="row">
                <div className="mb-5">
                    <h1 className="dest-head">Find the <span className="highlight">destination</span> you want</h1>
                    <p className="dest-para">We provide travel and vacation services with the best destinations</p>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-img-container">
                            <img
                                src="https://c4.wallpaperflare.com/wallpaper/773/987/659/maldives-dock-island-beach-wallpaper-preview.jpg"
                                className="card-img-top"
                                alt="Destination Image"
                            />
                            <button className="recommend-btn">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                Recommend
                            </button>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Maldive Islands</h5>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <span className="rating-text">4.1</span>
                                <span className="rating-text">Excellent</span>
                            </div>
                            <div className="location">
                                <span className="location-text">Maldives</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-img-container">
                            <img
                                src="https://wallpaperaccess.com/full/1094090.jpg"
                                className="card-img-top"
                                alt="Destination Image"
                            />
                            <button className="recommend-btn">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                Recommend
                            </button>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Switzerland</h5>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <span className="rating-text">4.1</span>
                                <span className="rating-text">Excellent</span>
                            </div>
                            <div className="location">
                                <span className="location-text">Switzerland</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-img-container">
                            <img
                                src="https://images.alphacoders.com/905/thumb-1920-905423.jpg"
                                className="card-img-top"
                                alt="Destination Image"
                            />
                            <button className="recommend-btn">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                Recommend
                            </button>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Eiffel Tower</h5>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star filled" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <span className="rating-text">4.1</span>
                                <span className="rating-text">Excellent</span>
                            </div>
                            <div className="location">
                                <span className="location-text">Paris</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
