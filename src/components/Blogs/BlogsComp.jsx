import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Kenya",
    description:
      "A view of coastal region, the Diani beach. A place for great experience of nature. It is located North-east, around 300km from the capital Nairobi",
    author: "Kennedy",
    date: "May 15, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in Morocco",
    description:
      "High Atlas – Paradise For Trekkers, Being North Africa’s highest mountain range, High Atlas is popularly known as the mountain of mountains. This place is a paradise for trekkers, especially from spring to autumn. It runs diagonally across Morocco for approximately 1000 km, and its saw-toothed Jurassic peaks act as a weather barrier. If you are wondering what to see in Morocco in 5 days, then adding this destination is a must",
    author: "Hassan",
    date: "May 15, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in South Africa",
    description:
      "Kruger National Park and private reserves. The park and adjoining private reserves (Sabi Sand, Timbavati, Klaserie, Umbabat and Balule) that share its unfenced western border make up about 2,2 million hectares (22000km²) of varied bushveld with six ecosystem types, and are collectively referred to as the Greater Kruger National Park. Kruger’s vast size and variety of ecosystems results in a wide diversity of wildlife (including over 500 bird species) and some of the finest game-viewing in Africa.",
    author: "Ade",
    date: "May 15, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
