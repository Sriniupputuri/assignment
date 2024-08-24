// components/HomeCards.jsx
import React from 'react';
import Image from 'next/image';
import some from '../app/some.webp'; // Update path if necessary

const HomeCards = () => {
    return (
        <div className="m-4">
            <div className="max-w-sm rounded overflow-hidden">
                <div className="relative group">
                    <Image
                        src={some}
                        alt="Picture of the author"
                        className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                        layout="responsive" // Adjust this based on your needs
                        width={600} // Adjust width
                        height={300} // Adjust height
                    />
                    <div className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
                </div>
                <div className="py-4">
                    <div className="font-bold text-xl mb-2">$2,800,000</div>
                    <p className="text-gray-700 text-base">
                        7 Beds

                        6 Baths

                        5,465 sqft (on 0.25 acres)

                        Atlanta

                        30306

                        1343 Northview Ave NE
                    </p>
                </div>
                <div className="pt-4 pb-2 text-xs">
                    COMPASS
                </div>
            </div>
        </div>
    );
};

export default HomeCards;


