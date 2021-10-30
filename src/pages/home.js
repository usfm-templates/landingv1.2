import Hero from "../components/hero/defaulthero";

export default function Home() {
  return (
    <div className="heropattern h-screen">
      <Hero />
      <h2 className="text-center pt-8 pb-2 text-2xl">
        Welcome To US Family Marketing
      </h2>
      <h3 className="text-center text-xl">Your Digital Marketing Ally</h3>
      <div className="text-center p-5">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Grow My Business
        </button>
      </div>
    </div>
  );
}
