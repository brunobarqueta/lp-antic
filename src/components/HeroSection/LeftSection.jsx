import { ChevronDown, Menu } from "lucide-react";

const NavigationList = ({ navItems }) => (
	<ul className="flex flex-row font-varta gap-8 mt-12">
		<li className="hidden md:block text-3xl font-bold text-logo mb-5 font-merriweather tracking-wider">antic</li>
		{navItems.map((item, index) => (
			<li key={index} className="text-md text-secondary mt-2">
				{item}
			</li>
		))}
	</ul>
);
const Header = ({ toggleMenu }) => (
	<div className="md:hidden flex justify-between items-center">
		<h1 className="mt-6 ml-6 text-white font-bold font-merriweather tracking-wider text-3xl">antic</h1>
		<button onClick={toggleMenu} className="flex text-white opacity-50 focus:outline-none mt-6 mr-4">
			<Menu className="w-8 h-8" />
		</button>
	</div>
);

const LeftSection = ({ toggleMenu, isOpen, handleSlideDown }) => {
	const navItems = ["Products", "Rooms", "Services", "Inspirations"];

	return (
		<div className="flex flex-col w-full h-screen md:bg-primary md:w-1/2 justify-between md:pl-28 md:pr-20 gap-16">
			<div className="hidden md:flex">
				<NavigationList navItems={navItems} />
			</div>
			<Header toggleMenu={toggleMenu} />
			{isOpen && (
				<ul className="absolute top-0 right-0 mt-12 mr-4 p-4 bg-primary border border-gray-200 rounded shadow-md font-varta text-secondary">
					{navItems.map((item, index) => (
						<li key={index} className="text-md mt-2">
							{item}
						</li>
					))}
				</ul>
			)}
			<div className="px-8 pb-20 md:pb-0 md:pr-32 text-white flex flex-col items-center justify-center md:items-start md:justify-normal">
				<p className="text-xs font-bold md:text-logo font-karla tracking-wider mb-12">HOME DESIGN</p>
				<h2 className="text-3xl md:text-5xl md:text-logo font-thin font-merriweather md:tracking-tighter md:leading-normal text-center md:text-left">Elegance for Interiors & Exteriors</h2>
				<p className="text-lgmd:text-xl md:text-secondary font-extralight mt-6 font-varta text-center md:text-left">We provide everyone with modern, trendy, quality furniture</p>
				<div className="bg-transparent md:bg-primary rounded-full border-2 border-white md:border-logo hover:border-antic-brown hover:shadow-lg mt-6 md:mt-12 h-12 w-12 flex items-center justify-center cursor-pointer">
					<ChevronDown onClick={handleSlideDown} className="md:text-logo hover:text-antic-brown text-2xl" />
				</div>
			</div>
		</div>
	);
};

export default LeftSection;
