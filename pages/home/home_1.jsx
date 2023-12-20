import React from "react";
import {
  Hero,
  Bids,
  Top_collection,
  Tranding_category,
  NewseLatter,
} from "../../components/component";
import Meta from "../../components/Meta";

const Home = () => {
  return (
    <main>
      <Meta title="Home" />
      <Hero />
      <Bids />
      <Top_collection />
      <Tranding_category />
      <NewseLatter />
    </main>
  );
};

export default Home;
