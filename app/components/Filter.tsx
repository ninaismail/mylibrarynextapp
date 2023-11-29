import LocationDropdown from "./LocationDropdown";

export default function Filter() {
  return (
    <form className="flex items-center justify-between w-10/12 h-[34px] mt-[20px] mx-auto font-zillaslab bg-white text-gray-500 border-0 rounded">
        <LocationDropdown/>
      <input
        type="text"
        id="search"
        className="w-full h-full border-e px-4"
        placeholder="What are we feeling today?" />
        <button className="h-full flex items-center gap-[4px] bg-primary hover:brightness-125 text-white text-sm font-[700] px-4">
        Search
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </button>
    </form>
  )
}
