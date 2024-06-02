import Image from "next/image";

const SingleHotel = ({ hotel }) => {
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
      <button className="ml-28 w-52 h-10 rounded-lg bg-blue-400 text-lg ml-5 mt-5">
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
      <button className="ml-28 w-52 h-10 rounded-lg bg-red-400 text-lg ml-5 mt-5">
        Book Now
      </button>
    </div>
  );
};

export default SingleHotel;

export async function getServerSideProps(ctx) {
  console.log('Fetching hotel data for ID:', ctx.query.id);

  try {
    const res = await fetch(`http://localhost:3000/api/hotels/${ctx.query.id}`);
    
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
