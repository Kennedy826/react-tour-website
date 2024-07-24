import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Welcome to Kendline Adventures, your gateway to unforgettable adventures and seamless travel experiences. Established in May 2022, we have been dedicated to crafting personalized journeys that cater to the unique desires of each traveler. Our passion for exploration and commitment to excellence have positioned us as a trusted name in the travel industry.
          </p>
          <br />
          <p>
            We will tour the entire Africa with you as you enjoy our unique blend of adventure and adventure.{"  "} Karibu sana!!!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
