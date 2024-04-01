import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const HeroSection = ({ toggleMenu, handleSlideDown, isOpen}) => {
  return (
    <div className="flex flex-row h-full w-full bg-hero-pattern bg-cover">
      <LeftSection toggleMenu={toggleMenu} isOpen={isOpen} handleSlideDown={handleSlideDown} />
      <RightSection />
    </div>
  );
};

export default HeroSection;
