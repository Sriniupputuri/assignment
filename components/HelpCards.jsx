import React from 'react'
import Image from "next/image";
import { Button } from './ui/button';

const HelpCards = ({ heading, content, image, button }) => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden">
                <div className='flex justify-center' ><Image src={image} width={150} height={150} /></div>

                <div className="px-6 py-4">
                    <div className='flex justify-center'>
                        <div className="font-bold text-xl mb-2">{heading}</div>
                    </div>
                    <div className='flex justify-center text-center px-10'>
                        <p className="text-gray-700 text-base ">
                            {content}
                        </p>
                    </div>
                </div>
                <div className="px-6 pt-4 pb-2 text-center">
                    <Button variant={"custom"}>{button}</Button>
                </div>
            </div>
        </div>
    )
}

export default HelpCards