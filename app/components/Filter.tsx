import LocationDropdown from "./LocationDropdown";
import SearchInput from "./SearchInput";

export default function Filter() {

  return (
    <div className="flex items-center justify-between w-11/12 h-[34px] mt-[20px] mx-auto font-zillaslab text-gray-500 border-0 rounded">
      <SearchInput/>
      <LocationDropdown />
    </div>
  )
}
