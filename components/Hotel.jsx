import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Hotel = ({e}) => {
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
      <h2 className="text-xl font-bold ml-5">
        {e?.name}

      </h2>
      <p className=' ml-5 text-justify  text-sm'>{e?.description}</p>
      
        <span className=' font-bold text-lg ml-5'> Facilities: </span>
        <ul className=" flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mr-10 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
       
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
