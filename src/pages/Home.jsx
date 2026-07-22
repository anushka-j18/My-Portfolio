import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import EditorsNote from '../components/sections/EditorsNote';
import EngineeringStories from '../components/sections/EngineeringStories';
import EngineeringToolkit from '../components/sections/EngineeringToolkit';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import Achievements from '../components/sections/Achievements';
import Education from '../components/sections/Education';
import CurrentlyLearning from '../components/sections/CurrentlyLearning';
import BeyondCode from '../components/sections/BeyondCode';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <EditorsNote />
      <EngineeringStories />
      <EngineeringToolkit />
      <ExperienceTimeline />
      <Achievements />
      <Education />
      <CurrentlyLearning />
      <BeyondCode />
      <Contact />
    </div>
  );
};

export default Home;
