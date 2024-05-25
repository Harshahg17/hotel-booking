
const Block=({title,para})=>{
   return (
      <div className="w-68 back h-full flex ml-5 items-center border-r border-r-gray-300  ">
           <img src="demo.svg" alt="demo" width={200} height={200} className="w-5 h-5 rounded-full" />
           <div className=" ml-1">
            <h3 className=" font-bold  "> {title}</h3>
            <p className=" text-gray-400 text-xs line-clamp-1">{para}</p>
        </div>
      </div>
   )
}  
export default Block 