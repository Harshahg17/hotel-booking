import Hotel from "@/components/Hotel";
import Header1 from "@/components/Header1";

const HotelPage = ({ hotels }) => (
  <div>
    <Header1 />
    {hotels && hotels.map((e) => (
      <div className="m-5" key={e._id}>
        <Hotel e={e} />
      </div>
    ))}
  </div>
);

export default HotelPage;


export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(`http://localhost:3000/api/hotels?city=${ctx.query.city}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();

    console.log(ctx.query);
    return {
      props: {
       hotels: data.hotels||data.allhotel,// Ensure hotels is not undefined
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        hotels: [], // Return an empty array in case of an error
      },
    };
  }
}
