import React from 'react';

import Banner from '../components/Banner';
import Events from '../components/Events';
import Counter from '../components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collabs from '../components/Collabs';

const Home = () => {
  return (
    <div>
        <Banner />
        <Counter />
        <Events />
        <Collabs />
    </div>
  )
}

export default Home;