import Image from 'next/image';

const Banner1 = () => {
  return (
    <div className="mb-14">
      <Image
        src="/banner.avif"
        alt="banner1"
        width={200}
        height={200}
        className="h-40 w-full"
      />
    </div>
  );
};

export default Banner1;
