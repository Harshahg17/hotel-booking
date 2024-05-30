import Link from "next/link";
const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-54">
      <div className="mx-10">
        <h2 className="text-4xl font-bold text-white text-center">
          over 157,000 hotels and homes across 35 countries
        </h2>
      </div>

      <div className="grid grid-cols-5 my-5 mx-20 ">
        <input type="text" placeholder="search...."  className="h-12 mt-5 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 "/>
        <input type="text" placeholder="search...."  className="h-12 mt-5 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"/>
        <input type="text" placeholder="search...."  className="h-12 mt-5 outline-none px-3 text-lg col-span-1"/>
        <button type="submit" className="h-12 text-xl px-2 my-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white mt-5">
        <Link href={`/hotels?city=mumbai`}> search </Link> </button>
      </div>  
  <div className="flex items-center ml-20   font-bold ">
  <button type="submit" className=" h-10  text-sm px-2 my-2 col-span-1  hover:cursor-pointer  text-white mt-1  ">
    continue your search
    </button>
  <button type="submit" className="h-10 text-sm px-2 my-2 col-span-1  hover:cursor-pointer  border-2 border-gray-100 text-white mt-1 hover:bg-gray-500 rounded-2xl"> home stay in india hotels</button>
  </div>
    </div>
  );
};
export default Header3;
