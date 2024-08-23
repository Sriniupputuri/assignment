// Card.jsx
import React from 'react';

const CardComp = ({ imageUrl, title, description }) => {
  return (
    <div className="grid grid-rows-12 grid-flow-col gap-1">
      <div
        className="row-span-12 col-span-12 border-2 flex items-center justify-center text-xl p-4 w-48 h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/2294125351/display_1500/stock-photo-digital-nomad-in-bali-a-man-on-a-business-trip-or-vacation-takes-a-coffee-break-in-a-busy-cafe-2294125351.jpg')" }}
      >
        {/* Content inside the card, if any */}
      </div>
      <div
        className="row-span-6 col-span-6 border-2 flex items-center justify-center text-xl p-4 w-48 bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/723926227/display_1500/stock-photo-close-up-businessmen-working-at-a-coffee-shop-with-a-document-with-a-smartphone-and-a-laptop-723926227.jpg')" }}
      >
        {/* Content inside the card, if any */}
      </div>
      <div
        className="row-span-6 col-span-6 border-2 flex items-center justify-center text-xl p-4 w-48 bg-cover bg-center"
        style={{ backgroundImage: "url('your-image-url')" }}
      >
        {/* Content inside the card, if any */}
      </div>
      <div
        className="row-span-6 col-span-6 border-2 flex items-center justify-center text-xl p-4 w-48 bg-cover bg-center"
        style={{ backgroundImage: "url('your-image-url')" }}
      >
        {/* Content inside the card, if any */}
      </div>
      <div
        className="row-span-6 col-span-6 border-2 flex items-center justify-center text-xl p-4 w-48 bg-cover bg-center"
        style={{ backgroundImage: "url('your-image-url')" }}
      >
        {/* Content inside the card, if any */}
      </div>
    </div>


  );
};

export default CardComp;
