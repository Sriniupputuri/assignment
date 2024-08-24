import React from 'react';
import { Button } from './ui/button';

const CardComp = ({ cards }) => {
  return (
    <div className="grid grid-rows-12 grid-flow-col gap-3 mx-2">
      {cards.map((card, index) => {
        const spanClass = (index + 1) % 5 === 1 ? 'row-span-12 col-span-12' : 'row-span-6 col-span-6 bg-violet-800';

        return (
          <div
            key={index}
            className={`${spanClass} relative border-2 flex items-center justify-center text-xl p-4 w-56 h-full overflow-hidden`}
          >
            {card.imageUrl ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                  }}
                ></div>
                <Button
                  variant="outline"
                  className="absolute bottom-4 left-4 z-20"
                >
                  View Homes
                </Button>
              </>
            ) : (
              <p className="text-center text-black">{card.description || 'No description available'}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardComp;
