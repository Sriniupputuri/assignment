'use client';

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function HoverDropdown({ options, placeholder }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const dropdownRef = useRef(null)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            className="relative w-fit"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="w-fit p-2 bg-white flex justify-between px-6 items-center rounded-sm hover:bg-[#007882] transition-colors hover:text-white"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span>{selectedOption ? selectedOption.label : placeholder}</span>
                {/* <ChevronDown className="h-4 w-4 text-gray-500" /> */}
            </button>
            {isOpen && (
                <ul
                    className="absolute w-fit mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10"
                    role="menu"
                >
                    {options.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="p-2 hover:bg-gray-100 cursor-pointer transition-colors"
                            role="menuitem"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}