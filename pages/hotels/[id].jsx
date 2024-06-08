"use-client";
import Image from "next/image";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Link from "next/link";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuth(Cookies.get('user'));
      
    }
  }, []);

  return (
    <div>
      <div className="w-full">
        <Image
          src={hotel?.banner || "https://via.placeholder.com/2000"}
          alt="hotel"
          width={2000}
          height={2000}
          className="w-9/12 mx-28 h-72 my-5"
        />
      </div>
      <div className="w-9/12 mx-28">
        <h3 className="text-3xl font-bold text-justify">{hotel?.name || "Hotel Name"}</h3>
        <p className="text-xl text-justify">{hotel?.description || "No description available."}</p>
      </div>
      <button className="ml-28 w-52 h-10 rounded-lg bg-blue-400 text-lg mt-5">
        Price: {hotel?.price || "N/A"}
      </button>
      <div className="ml-28">
        <p className="w-9/12 text-3xl font-bold">Facilities</p>
        <ul className="flex">
          {hotel?.facilities?.length
            ? hotel.facilities.map((ele) => (
                <li key={ele.name} className="mr-10 mb-3 flex items-center">
                  <span>
                    <Image
                      src={ele.img || "https://via.placeholder.com/200"}
                      alt={ele.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                    />
                  </span>
                  <span className="ml-5">{ele.name}</span>
                </li>
              ))
            : "No facilities available."}
        </ul>
      </div>
     <div className="my-10">
     {auth ? (
       <Link href={`/payment/${hotel?._id}`}>
        <button className="ml-28 w-52 h-10 rounded-lg bg-red-400 text-lg mt-5">
          Book Now
        </button></Link>
      ) : (
        <span className="ml-28  text-2xl">
          Please <Link href="/Login" className="text-green-600">Login</Link> to get new offers
        </span>
      )}
     </div>
    </div>
  );
};

export default SingleHotel;


export async function getServerSideProps(ctx) {
  console.log('Fetching hotel data for ID:', ctx.query.id);

  try {
    const res = await fetch(`${process.env.BASE_URL }/api/hotels/${ctx.query.id}`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    return {
      props: {
        hotel: data.hotels || null,
      },
    };
  } catch (error) {
    console.error('Error fetching hotel data:', error);

    return {
      props: {
        hotel: null,
      },
    };
  }
}
