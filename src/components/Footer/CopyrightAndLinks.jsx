const CopyrightAndLinks = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-center font-varta mt-8 md:mt-10 md:w-full md:justify-between px-8 md:px-28 mb-16 order-5">
			<p className="text-lg text-secondary opacity-70 order-2 mt-8 md:mt-0 md:order-1">&copy; 2021 Agence Dnd</p>
			<div className="flex flex-col md:flex-row gap-2 md:gap-10 order-1 md:order-2">
				<div className="flex flex-row gap-6">
					<p className="text-lg text-secondary opacity-70">Privacy Policy</p>
					<p className="text-lg text-secondary opacity-70">Terms of Service</p>
				</div>
				<p className="text-lg text-secondary opacity-70">Language</p>
			</div>
		</div>
	);
};

export default CopyrightAndLinks;
