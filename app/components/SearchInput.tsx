"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <>
      <input
      type="text"
      id="search"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('search')?.toString()}
      className="w-full h-full border-e px-4 text-left bg-white"
      placeholder="What are we feeling today?" /> 
      <button className="w-24 h-full flex items-center gap-[4px] bg-primary hover:brightness-125 text-white text-sm font-[700] px-4">
        Search
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </button>   
    </>
  )
}
export default SearchInput;