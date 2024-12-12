"use client"

import { josefin } from '@/fonts/josefin';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface CustomSelectProps {
  options: string[];
  defaultValue?: string;
  onChange?: (selected: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue || options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div className="relative w-[95px]" ref={dropdownRef}>
      {/* Select Trigger */}
      <button
        className={`${josefin.className} w-full px-3 py-2 text-[16px] flex items-center justify-between
         hover:border-gray-400 focus:outline-none focus:border-gray-500`}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{selectedOption}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full mt-1 bg-violet-500 border rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className={`${josefin.className} px-3 py-2 text-[16px] cursor-pointer
               hover:bg-violet-600 first:rounded-t-md last:rounded-b-md`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// English
export const SelectLanguage: React.FC = () => {
  const languages: string[] = ['English', 'Spanish', 'French', 'German'];

  return (
    <CustomSelect 
      options={languages}
      defaultValue="English"
      onChange={(selected: string) => console.log('Selected:', selected)}
    />
  );
};

export default CustomSelect;
