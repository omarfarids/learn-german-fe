import React from "react";

type Props = {};

const HowTo = (props: Props) => {
  return (
    <section className="pragraph__how-topx-3 px-3 py-20 xs:px-10 bg-perfWhite">
      <h2 className="text-xl pb-3">How To Learn the German Language?</h2>
      <ol className="font-bold">
        <li>Find a strong reason that will keep you motivated.</li>
        <li>Learn all the fundamentals of the German language.</li>
        <li>
          Keep things interesting by learning slang, funny words, and idioms.
        </li>
        <li>Practice daily. If possible, talk with native German speakers.</li>
      </ol>
    </section>
  );
};

export default HowTo;
