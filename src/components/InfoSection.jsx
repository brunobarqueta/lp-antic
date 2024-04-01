import { ChevronRight } from "lucide-react";

const GridSection = ({ titles, descriptions }) => {
    return (
        <div className="w-full md:w-1/2 bg-primary flex flex-col justify-center items-center md:mb-0 md:px-10 md:py-10 gap-8 md:pr-24 font-varta">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                {titles.map((title, index) => (
                    <div key={index} className="md:col-span-2">
                        <h2 className="text-lg md:text-xl font-semibold text-logo">{title}</h2>
                        <p className="mt-2 text-sm md:text-md text-secondary">{descriptions[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const InfoSection = () => {
    const gridTitles = ["Our Advices", "Click and Collect", "Conception Service", "Installation Service"];
    const gridDescriptions = [
        "What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.",
        "Adapted and contactless. Free from € 200 of purchases in stores offering the service.",
        "Personalized service with an expert advisor for your interior and exterior decoration or layout projects.",
        "Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner."
    ];

    return (
        <div className="flex flex-col md:flex-row h-full w-full md:mt-10 scroll-target">
            <div className="w-full md:w-1/2 bg-primary flex flex-col px-10 py-10 md:pl-28 md:pr-32">
                <h2 className="text-5xl text-secondary font-merriweather tracking-tighter font-thin">We stay by your side to design your projects</h2>
                <p className="mt-5 text-sm font-bold text-logo font-karla tracking-wider flex cursor-pointer">
                    Find out more <ChevronRight className="mt-0.5 h-4 w-4" />
                </p>
            </div>
            <GridSection titles={gridTitles} descriptions={gridDescriptions} />
        </div>
    );
};

export default InfoSection;
