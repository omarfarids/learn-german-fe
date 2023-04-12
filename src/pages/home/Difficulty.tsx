import React from "react";

type Props = {};

const Difficulty = (props: Props) => {
  return (
    <section className="pragraph__difficulty flex flex-col gap-5 xs:gap-0 px-3 py-20 bg-transparent justify-evenly items-center xs:flex-row">
      <video
        className="xs:w-2/5"
        controls
        poster={require("assets/deuschland.jpg")}
      >
        <source src={require("assets/learning-german.mp4")} type="video/mp4" />
      </video>
      <div className="xs:w-2/5">
        <h2 className="text-xl pb-3">Is learning to speak German hard?</h2>
        <p className="font-bold">
          Well, no, learning German being hard is just a myth. Learning any
          language takes time and commitment. It’s the same with the German
          language.
        </p>
        <p className="font-bold">
          Having enough motivation and working hard towards your goal, is all it
          takes. And if you feel confused about where to start, we’ve put
          together some tips in this article that will help you learn to speak
          German really fast. Let’s be real. Chinese people will find it harder
          than an English native speaker to learn German.
        </p>
      </div>
    </section>
  );
};

export default Difficulty;
