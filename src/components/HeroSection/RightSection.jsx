import heroBg from "../../assets/hero-bg.svg";

const RightSection = () => {
  return (
    <div className="hidden md:flex w-full md:h-full md:w-1/2 bg-primary justify-center items-center">
      <div className="max-h-screen-sm overflow-hidden">
        <img src={heroBg} alt="hero background" className="w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default RightSection;
