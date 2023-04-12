import { Loader } from "@mantine/core";
import { AppContext } from "context/context";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

const Listen = () => {
  const { lessons } = useContext<any>(AppContext);
  const location = useLocation();
  const id = location.state?.id;

  if (!lessons.length) {
    return <Loader className="loader" size="xl" variant="bars" />;
  }
  return (
    <div className="xs:w-5/6 mx-auto">
      <div className="lesson mt-14 flex flex-col gap-1">
        <h1 className="lesson-header border-l-8 border-perfCrimson py-5 px-2 text-3xl">
          Lesson {lessons[id]?.id + 1}
        </h1>
        <div className="lesson-content gap-5 flex flex-col sm:flex-row">
          <iframe
            className="w-full h-44 xs:h-60 xs:w-96"
            src={lessons[id].video.link}
            title="Nicos weq episode 1"
          ></iframe>
          <div className="xs:w-96 sm:mt-5">
            <p>{lessons[id].video.description}</p>
            <ul className="mt-3 list-disc list-inside">
              <span className="underline font-bold">Here you will learn:</span>
              {lessons[id].video.learnPoints.map(
                (point: string, index: number) => {
                  return <li key={index}>{point}</li>;
                }
              )}
            </ul>
          </div>
        </div>
        <hr className="my-5 sm:w-4/6 mx-auto" />
        <div className="lesson-vocab w-4/6">
          <h2 className="font-bold text-xl mb-3">Vocabulary</h2>
          <ul className="grid grid-cols-2">
            {lessons[id].vocabs.map((word: string, index: number) => {
              return <li key={index}>{word}</li>;
            })}
          </ul>
        </div>
        <hr className="my-5 sm:w-4/6 mx-auto" />
        {lessons[id].additional.img && (
          <img src={lessons[id].additional.img} alt="descriptional img" />
        )}
      </div>
    </div>
  );
};

export default Listen;
