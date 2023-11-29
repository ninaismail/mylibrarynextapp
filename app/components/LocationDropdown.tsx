"use client"
import useFetch from "../hooks/useFetch"
import { useState } from "react"; 

type BookData = {
    id: string;
    title: string;
    author: string;
    brief: string;
    description: string;
    cover_image: string;
    images: string[];
    deposit: number;
    is_available: Boolean;
    literature_origin: string;
    date_of_release: string;
  }
export default function LocationDropdown() {
    const { data, isLoading, error } = useFetch("books")
    let locations = data.map((item:BookData) => item.literature_origin)
    
    const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault()
    setIsOpen(!isOpen)
    }
  return (
    <div className="relative w-1/4">
      <button className="flex justify-between items-center gap-[4px] h-full px-4 border-e"
      onClick={handleClick}>
        <span>🗺️  Literature</span><span>⋮</span>
      </button>
      <ul className={`${isOpen ? "block absolute top-[36px] left-0 z-[1]" : "hidden"} transform ease duration-300 w-full bg-white shadow-md list-none text-left border-0 rounded divide-y-2`}>
        {isLoading && <>Loading...</>}
        {locations && <>
          {Array.isArray(locations) && locations.map((item, i) => (
            <li key={i} className="py-2 px-4 cursor-pointer hover:bg-gray-100">{item}</li>
          ))}
        </>}
        <p className="text-red-700">{error && error}</p>
      </ul>
    </div>
  )
}
