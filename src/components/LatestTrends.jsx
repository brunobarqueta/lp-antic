import { ChevronRight } from "lucide-react";

const EmailButton = () => {
	return (
		<div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 items-center justify-center mb-12 md:mb-0">
			<div className="flex flex-col md:flex-row gap-4 w-4/5 md:w-3/5">
				<input className="bg-primary bg-opacity-30 font-varta text-secondary text-opacity-90 px-4 h-[50px] w-full" placeholder="email@address.com" />
				<button className="font-karla bg-antic-brown text-white px-8 h-[50px]">Subscribe</button>
			</div>
		</div>
	);
};

const LatestTrends = () => {
	return (
		<div className="flex flex-col md:flex-row h-full w-full mt-72 md:mt-10 bg-white">
			<div className="w-full md:w-1/2 flex flex-col px-10 py-10">
				<h2 className="text-3xl text-black-title font-merriweather tracking-tighter font-thin">Be aware of the latest trends</h2>
				<p className="mt-2 text-sm md:text-md text-secondary font-varta">Stay informed of new trends, but also of our various offers.</p>
				<p className="mt-5 text-sm font-bold text-logo font-karla tracking-wider flex cursor-pointer">
					Learn more <ChevronRight className="mt-0.5 h-4 w-4" />
				</p>
			</div>
			<EmailButton />
		</div>
	);
};

export default LatestTrends;
