import Card from "./card/servicecard";

import servicedata from "../../data/nav.json";

export default function ServiceGallery() {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-3 text-center">
        {servicedata.pages.map((data, index)=>{
            return(
                <Card 
                title={data.name}
                link={data.link}
                desc={data.metadesc}
                image={data.image}

                />

            )
        })}
    </div>
  );
}
