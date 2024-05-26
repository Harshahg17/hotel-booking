import Head from 'next/head';
import Banner1 from "@/components/Banner1";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "@/components/Header3";
import Header4 from '@/components/Header4';
import Footer from '@/components/Footer';
import Image from "next/image";

const Home = () => {
  return (
    <div>
      
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20 my-20">
        <Banner1 />
        <div className="mb-14">
          <Image
            src="/banner2.avif"
            alt="banner1"
            width={200}
            height={200}
            className="h-40 w-full"
          />
        </div>
      </div>
      <Header4 /> 
      <> <Footer/></>
    </div>
  );
};

export default Home;
