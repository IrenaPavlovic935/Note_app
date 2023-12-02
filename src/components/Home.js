import React from 'react';
import HomeImage from '../static/images/image_for_home.jpg';

const Home = ({ onAddNote }) => {
  return (
    <div className='home'>
        <div className='picture_for_home_page'>
            <img src={HomeImage}  style={{objectFit:'cover'}}/>
        </div>
        
        <div className='Add_Note'>
        <h1>Create free notes & collborate <br/> with your team</h1>
        <button  onClick={onAddNote}>
            Add Note
        </button>
        </div>
     
    </div>
  );
};

export default Home;
