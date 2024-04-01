import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const SocialMedia = () => {
	return (
		<div className="flex gap-6 order-4 items-center justify-center">
			<img src={facebook} alt="Facebook" className="w-8 h-8" />
			<img src={twitter} alt="Instagram" className="w-8 h-8" />
			<img src={linkedin} alt="Twitter" className="w-8 h-8" />
			<img src={instagram} alt="LinkedIn" className="w-8 h-8" />
		</div>
	);
};

export default SocialMedia;
