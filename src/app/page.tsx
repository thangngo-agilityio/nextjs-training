import Image from 'next/image';

const Homepage = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-lg font-semibold">This is homepage</h1>
      <img src="/images/Chair.jpg" alt="Chair" />
      <Image
        src="/images/Chair.jpg"
        alt="Chair"
        width={1000}
        height={760}
        className="hidden md:block"
      />
    </main>
  );
};

export default Homepage;
