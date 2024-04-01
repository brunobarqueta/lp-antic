import { ChevronLeft, ChevronRight } from "lucide-react";

const ChevronIcon = ({ direction }) => {
    return (
        <div className="bg-white rounded-full border-2 border-logo hover:border-antic-brown hover:shadow-lg h-10 w-10 flex items-center justify-center cursor-pointer">
            {direction === "left" ? <ChevronLeft className="text-logo hover:text-antic-brown text-2xl" /> : <ChevronRight className="text-logo hover:text-antic-brown text-2xl" />}
        </div>
    );
};

const InspirationsText = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between h-full w-full bg-white px-8 md:px-32 md:gap-40 order-1 md:order-2">
            <h2 className="text-4xl text-antic-brown font-merriweather tracking-tighter font-thin">Inspirations</h2>
            <p className="text-secondary font-varta mt-4 mb-12 md:px-12">
                Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and
                we want to share that with you.
            </p>
            <div className="hidden md:block">
                <div className="flex flex-col md:flex-row gap-2">
                    <ChevronIcon direction="left" />
                    <ChevronIcon direction="right" />
                </div>
                <p className="text-secondary text-lg opacity-50 font-varta tracking-wider self-start mt-2 md:mt-4 md:ml-2">01/05</p>
            </div>
        </div>
    );
};

export default InspirationsText;
