import Link from 'next/link';
import React from 'react';

const EmptyCard = () => {
    return (
        <div className="my-10">
          <div className=" flex flex-col items-center py-25 border border-gray-800 space-y-5 rounded-2xl">
            <h4 className="text-4xl font-extrabold font-oswald">NOTHING HERE YET</h4>
            <p className="text-gray-600 text-center">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href={"/"}>
              <button className=" bg-[#ccff00] text-black px-5 py-1 rounded-2xl cursor-pointer">
                Go to workouts
              </button>
            </Link>
          </div>
        </div>
    );
};

export default EmptyCard;