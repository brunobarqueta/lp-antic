import './App.css'

import Carousel from './components/Carousel';
import CopyrightAndLinks from './components/Footer/CopyrightAndLinks';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import InfoSection from './components/InfoSection';
import InspirationsText from './components/InspirationsText';
import LatestTrends from './components/LatestTrends';
import SocialMedia from './components/Footer/SocialMedia';
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleSlideDown = () => {
		const targetElement = document.querySelector(".scroll-target");
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className="bg-primary flex flex-col h-screen w-screen overflow-x-hidden">
			<HeroSection toggleMenu={toggleMenu} isOpen={isOpen} handleSlideDown={handleSlideDown} />

			<InfoSection />
			
			<LatestTrends />

			<InspirationsText />

			<Carousel />

			<Footer />
			<SocialMedia />
			<CopyrightAndLinks />
		</div>
	);
}

export default App
