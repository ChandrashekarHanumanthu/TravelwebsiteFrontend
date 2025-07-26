import React from 'react';
import './Home.css';
import { FaTelegramPlane,FaTwitter, FaFacebookF } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt,faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Hotpicks from './Hotpicks';
import BookingForm from './Booking';
import Recommendation from './Recommend';
import PopularDestinations from './PopularDest';
import Information from './Information';
import ThankingSection from './ThankSection';

const Home = () => {

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our Travel Agency</h1>
          <p>Explore the world with us!</p>
        </div>
      </div>
    <div>
      <Hotpicks/>
    </div>

    <div className='book-container'>
        <h1 className='book-head'>Book your Ticket Here</h1>
        <BookingForm/>
      </div>
        <Recommendation/>
        <PopularDestinations/>
        <Information/>
        <ThankingSection/>
</div>
  )
}

export default Home;

// https://www.wanderlustmagazine.com/wp-content/uploads/2023/10/WAND_Indonesia-scaled.jpg
//https://c4.wallpaperflare.com/wallpaper/599/182/461/hdr-landscape-indonesia-temple-wallpaper-preview.jpg
//https://w0.peakpx.com/wallpaper/567/460/HD-wallpaper-bali-bay-beach-ultra-asia-indonesia-ocean-blue-view-travel-beach-nature-beautiful-summer-tropical-aerial-bali-places-destinations-seawater-littlefinger-kelingking.jpg
//https://theworldtravelguy.com/wp-content/uploads/2020/10/DSCF6411-3.jpg
