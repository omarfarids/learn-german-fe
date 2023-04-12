import React from "react";

const WhyGerman = () => {
  return (
    <section className="pragraph__why-german flex flex-col-reverse px-3 py-20 bg-perfWhite justify-evenly items-center xs:flex-row">
      <div className="md:w-2/5">
        <h1 className="text-xl pb-3">Why German ?</h1>
        <p className="font-bold">
          German is one of the ten most spoken languages in the world. Some 185
          million people worldwide speak German. You can still study in Germany
          even if you don’t know German, but some knowledge of the language
          makes everyday life a lot easier and help you immerse yourself in the
          country. Apart from that, foreign languages are also increasingly
          sought after by employers. There are many ways to learn German prior
          to your stay or while out there. Whether you learn the traditional way
          by joining a class, or whether you team up with a German language
          tandem partner or flatmate, learning German can be great fun and
          hugely beneficial.
        </p>
      </div>
      <img
        className="xs:w-2/5"
        src={require("assets/languages.jpg")}
        alt="learning-german"
      />
    </section>
  );
};

export default WhyGerman;
