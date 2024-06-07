import Hotel from "@/components/Hotel";
import Header1 from "@/components/Header1";
import Filters from "@/components/Filters";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HotelPage = ({ hotels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hotels) {
      setList(data.hotels);
      console.log("clicked")
    }
  };
  

  return (
    <div>
      <Header1 />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <Filters
           price={price}
            setPrice={setPrice} 
            handlePrice={handlePrice}
             
            checkedList={checkedList}
            setCheckedList={setCheckedList} />
        </div>
        <div className="col-span-12 md:col-span-9">
        {list.length > 0
            ? list.map((e) => {
              console.log("harsha")
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default HotelPage;

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    console.log(ctx.query);
    return {
      props: {
        hotels: data.hotels || data.allhotel, 
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
