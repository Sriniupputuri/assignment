import Link from 'next/link';

const FooterSection = ({ title, items, showMore }) => (
    <div className="flex flex-col">
        <h3 className="font-bold mb-2">{title}</h3>
        <ul className="space-y-1">
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.link} className="text-gray-900 text-xs hover:underline">
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
        {showMore && (
            <div>
                <button className="text-[#007882] text-xs hover:underline mt-2">More ▼</button>
            </div>
        )}
    </div>
);

export default function Footer() {
    const sections = [
        {
            title: "Real Estate Markets",
            items: [
                { text: "Alaska Real Estate", link: "#" },
                { text: "Alabama Real Estate", link: "#" },
                { text: "Arkansas Real Estate", link: "#" },
                { text: "Arizona Real Estate", link: "#" },
            ],
            showMore: true,
        },
        {
            title: "Popular Searches",
            items: [
                { text: "Pet Friendly Apartments Near Me", link: "#" },
                { text: "Land for Sale Near Me", link: "#" },
                { text: "Open Houses Near Me", link: "#" },
                { text: "Cheap Apartments for Rent Near Me", link: "#" },
            ],
            showMore: true,
        },
        {
            title: "Explore Trulia",
            items: [
                { text: "Facebook", link: "#" },
                { text: "Twitter", link: "#" },
                { text: "Instagram", link: "#" },
                { text: "Pinterest", link: "#" },
            ],
            showMore: true,
        },
        {
            title: "For Professionals",
            items: [
                { text: "Popular Counties", link: "#" },
                { text: "Rental Communities", link: "#" },
                { text: "Real Estate Leads", link: "#" },
            ],
            showMore: false,
        },
    ];

    return (
        <footer className="py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((section, index) => (
                        <FooterSection key={index} {...section} />
                    ))}
                </div>
            </div>
        </footer>
    );
}