import Hero from "../components/hero/defaulthero";
import ServiceGallery from "../components/services/gallery";

export default function Home() {
  return (
    <div className="h-full max-w-screen-2xl mx-auto">
      <Hero />
      <h2 className="text-center pt-8 pb-2 text-2xl">
        Welcome To US Family Marketing
      </h2>
      <h3 className="text-center text-xl">Your Digital Marketing Ally</h3>
      <div className="text-center p-5">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Grow My Business
        </button>
      </div>

<ServiceGallery/>

<div className="grid grid-cols-2 bg-blue-100 border-t-8 border-indigo-200 filter drop-shadow-lg shadow-2xl">
    
    
    <div>

<img src="https://cdn.pixabay.com/photo/2017/05/08/19/35/cyber-security-2296269_960_720.jpg"/>

    </div>
    <div class="m-auto container p-12">

    <h2 className="text-2xl ">Connect to the world. Securely.</h2>
    <h3>Protect your intellectual property by hiring the experts in web developement security.
</h3>

    </div>
    
    </div>


    </div>
  );
}
