import { ChevronRight } from "lucide-react";
import footerImg from "../../assets/footer-img.svg";

const FooterSection = ({ title, items, order }) => {
    return (
        <div className={`text-lg text-secondary order-${order}`}>
            <h3 className="text-2xl font-bold text-antic-brown mb-2">{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    const sections = [
        { title: "About", items: ["Our Story", "Our Stores", "Our Partners"], order: 1 },
        { title: "Services", items: ["Click and Collect", "Conception", "Installation", "Advices", "Gift Card"], order: 3 },
        { title: "Products", items: ["Furniture", "Decoration", "Storage", "Baby and Child", "Connected Home"], order: 2 },
        { title: "Rooms", items: ["Living Room", "Dining Room", "Kitchen", "Bedroom", "Bathroom", "Office", "Laundry", "Garage"], order: 4 }
    ];

    return (
        <footer className="bg-primary text-white py-12 px-8 md:px-20 flex flex-col md:flex-row justify-between order-3 font-varta">
            <div className="flex items-center justify-center md:justify-normal md:items-start">
                <h1 className="text-3xl font-bold text-antic-brown mb-5 font-merriweather tracking-wider">antic</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 md:ml-20 mt-4">
                {sections.map(section => (
                    <FooterSection key={section.title} {...section} />
                ))}
            </div>
            <div className="flex flex-col mt-8 md:px-20 md:mt-0 md:w-1/3">
                <h3 className="text-2xl font-bold text-antic-brown">We respect our planet</h3>
                <img src={footerImg} alt="Footer Image" className="w-full h-auto mb-2 self-center mt-4" />
                <p className="text-md text-secondary">We’re taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.</p>
                <p className="mt-5 text-sm font-bold text-logo font-karla tracking-wider flex">
                    Learn more <ChevronRight className="mt-0.5 h-4 w-4" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
