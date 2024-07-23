import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/diani.jpg";
import Img2 from "../../assets/kruger.jpg";
import Img3 from "../../assets/mara.jpg";
import Img4 from "../../assets/atlas.jpg";
import Img5 from "../../assets/kigali.jpg";
import Img6 from "../../assets/pyramids.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Diani beach",
    location: "Kenya",
    description: "The beach is located in Kilifi county.",
    price: 300,
    type: "Beach experience",
  },
  {
    img: Img2,
    title: "Kruger Natonal Park",
    location: "South Africa ",
    description:
      "The natonal park is located in the Western Cape.",
    price: 250,
    type: "Wild life exerience",
  },
  {
    img: Img3,
    title: "Maasai Mara National Park",
    location: "Kenya",
    description:
      "The park is located in Kajiado county,about 100km from the capital city Nairobi.",
    price: 200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "High Atlas-Paradise for Trekkers",
    location: "Morocco",
    description: "This eautiful scenery is located in High Atlas.",
    price: 450,
    type: "Mountain climbing",
  },
  {
    img: Img5,
    title: "Kigali",
    location: "Rwanda",
    description:
      "The captal city of Rwanda with great ambience.",
    price: 350,
    type: "City life",
  },
  {
    img: Img6,
    title: "Pyramids of Giza",
    location: "Egypt",
    description:
      "The pyramids are located in Giza.",
    price: 200,
    type: "Cultural experiene",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
