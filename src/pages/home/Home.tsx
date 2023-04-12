import React from "react";
import Difficulty from "./Difficulty";
import HowTo from "./HowTo";
import WhyGerman from "./WhyGerman";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="xs:w-5/6 mx-auto">
      <img
        className="header"
        src={require("assets/learng.jpg")}
        title="Wie geht's?"
        alt="Wie geht's?"
      />
      <WhyGerman />
      <Difficulty />
      <HowTo />
    </div>
  );
};

export default Home;
