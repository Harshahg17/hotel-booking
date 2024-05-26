import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Hotel = () => {
  return ( 
    <div>
      <Head>
        <title>hotel</title>
      </Head>
      <div className=" flex border-2 border-red-500 rounded-lg h-60 w-full mb-5 p-5 mr-5">   
        <Image 
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" 
          alt="hotel" 
          width={200} 
          height={200} 
          className="w-96 h-full"
        /> 
         <div className="grid grid-rows-3 ">
      <Image 
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" 
          alt="hotel" 
          width={200} 
          height={200} 
          className=" w-24  mx-5"
        /> 
         <Image 
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" 
          alt="hotel" 
          width={200} 
          height={200} 
          className=" w-24  mx-5 my-2"
        /> 
         <Image 
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" 
          alt="hotel" 
          width={200} 
          height={200} 
          className=" w-24 mx-5 my-4"
        /> 
         <Image 
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" 
          alt="hotel" 
          width={200} 
          height={200} 
          className=" w-24 mx-5 mt-6"
        /> 




      </div>

      <div className='mx-5'>
      <div className="text-xl font-bold ml-5">
        <p> Lorecumque aperitque neque doloribus.</p>

      </div>
      <p className=' ml-5 text-justify  text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi delectus dicta adipisci asperiores libero esse doloribus molestias necessitatibus repellendus, eligendi, impedit dolore ut modi cum assumenda, corrupti porro facere. Neque.</p>
      
        <span className=' font-bold text-lg ml-5'> Facilities: </span>
        <span>free wifi , pet care , swimming pool ,Beaches , Resort</span>
    <div className=' flex-end'>
    <button className=' w-52 h-10 rounded-lg bg-blue-400 text-lg ml-5 mt-5'>price:500</button>
    <Link href={"/hotels/2"} className='text-lG font-bold text-red-600 ml-10' > See Details</Link>
    </div>

      </div>  
     
      </div>  
     
    </div>
  );
}

export default Hotel;
