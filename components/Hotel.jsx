import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Hotel = ({ e }) => {
  return (
    <div>
      <Head>
        <title>Hotel</title>
      </Head>
      <div className="flex border-2 border-red-500 rounded-lg w-full mb-5 p-5 mr-5">
        <Image
          src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
          alt="hotel"
          width={200}
          height={200}
          className="w-86 h-60 rounded-lg"
        />
        <div className="grid grid-rows-4 gap-2 ml-5">
          <Image
            src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            alt="hotel"
            width={200}
            height={200}
            className="w-14 h-14 rounded-lg"
          />
          <Image
            src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            alt="hotel"
            width={200}
            height={200}
            className="w-14 h-14 rounded-lg"
          />
          <Image
            src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            alt="hotel"
            width={200}
            height={200}
            className="w-14 h-14 rounded-lg"
          />
          <Image
            src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            alt="hotel"
            width={200}
            height={200}
            className="w-14 h-14 rounded-lg"
          />
        </div>
        <div className='mx-5 flex flex-col justify-between'>
          <div>
            <h2 className="text-xl font-bold ml-5">{e?.name}</h2>
            <p className='ml-5 text-justify text-sm w-96'>{e?.description}</p>
            <span className='font-bold text-lg ml-5'>Facilities:</span>
            <ul className="flex flex-wrap mt-2 ml-5">
              {e
                ? e.facilities?.map((ele) => (
                    <li key={ele.name} className="mr-5 mb-3 flex items-center">
                      <span>
                        <Image
                          src={ele.img}
                          alt={ele.name}
                          width={200}
                          height={200}
                          className="w-8 h-8 rounded-full"
                        />
                      </span>
                      <span className="ml-2">{ele.name}</span>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
          <div className='flex items-center mt-5 ml-5'>
            <button className='w-52 h-10 rounded-lg bg-blue-400 text-lg text-white mr-5'>Price: ₹{e?.price}</button>
            <Link href={`/hotels/${e?._id}`} className='text-lg font-bold text-red-600'>See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
