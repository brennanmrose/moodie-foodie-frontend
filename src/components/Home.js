import React from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';

const Home = () => (

    <div>
      <span>
        <br></br>
        <h1 class="home">Welcome to Moodie Foodie!</h1>
        <p id="home">You can use this app to look up foods, drinks and desserts based on your current mood! You may also add new recipes to fit your unique preferences and build out a digital cookbook centered around your moods.</p>
      </span>
      <div class="image-holder">
        <img src="https://d2ebzu6go672f3.cloudfront.net/media/content/images/p3_MedDiet_W1806_gi667751254.jpg" alt="Recipe" class="center" />
      </div>
    </div>

);

export default Home;
