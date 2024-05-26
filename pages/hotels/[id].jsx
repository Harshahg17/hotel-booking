import Image from "next/image";
const singlehotel=()=>{
  return(
  <div>
    <div className="w-full">
      <Image 
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" 
          alt="hotel" 
          width={200} 
          height={200} 
          className=" w-9/12 mx-28 h-72 my-5 "
        /> 
    </div>
    <div className="w-9/12 mx-28 ">
      <h3 className="text-3xl font-bold text-justify">Loremm ipsum dolor sit amet consectetur adipisicing elit. As</h3>
      <p className="text-xl text-justify ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, non commodi ex esse aliquid mollitia incidunt expedita perspiciatis delectus, possimus debitis ipsa, totam consequatur quae numquam atque dignissimos officia odit repudiandae et. Expedita!</p>
    </div>
    
    <button className='ml-28 w-52 h-10 rounded-lg bg-blue-400 text-lg ml-5 mt-5'>price:500</button>
  <div className="ml-28">
  <p className=" w-9/12 text-3xl font-bold">Facilities</p>
  <ul className="flex text-xl justify-between w-7/12">
    <li>swimming pool</li>
    <li>Dogs</li>
    <li>Garden </li>
    <li>Loundry</li>  
    <li>cricket</li>
    </ul>
  </div> 
  <button className='ml-28 w-52 h-10 rounded-lg bg-red-400 text-lg ml-5 mt-5'>Book Now</button>
  </div>
  )
} 
export default singlehotel;