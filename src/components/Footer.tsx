import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="relative bg-perfOrange text-perfWhite py-14 px-3">
      <div className="flex flex-col gap-5 justify-evenly md:flex-row">
        <div className="md:w-96">
          <h1 className="text-3xl">LearnGerman</h1>
          <p>
            Find the right instructor for you. Choose from many topics, skill
            levels, and languages. Join millions of learners from around the
            world already learning on LearnGerman. Expert Instructors. Lifetime
            Access.
          </p>
        </div>
        <div className="justify-evenly flex flex-col">
          {[
            "LearnGerman Business",
            "Teach on LearnGerman",
            "Get the app",
            "About us",
            "Contact us",
          ].map((link, index) => {
            return (
              <a
                className="hover:text-perfCrimson hover:underline"
                key={index}
                href="/"
              >
                {link}
              </a>
            );
          })}
        </div>
        <div className="justify-evenly flex flex-col">
          {[
            "Careers",
            "Blog",
            "Help and Support",
            "Affiliate",
            "Investors",
          ].map((link, index) => {
            return (
              <a
                className="hover:text-perfCrimson hover:underline"
                key={index}
                href="/"
              >
                {link}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <AiFillFacebook className="cursor-pointer" />
          <AiOutlineTwitter className="cursor-pointer" />
          <AiFillYoutube className="cursor-pointer" />
        </div>
      </div>
      <p className="copy-rights absolute bottom-0 text-sm ">
        <span className="text-sm">&copy; copyrights 2021 </span> This page is
        made by{" "}
        <a
          className="text-sm hover:text-perfCrimson"
          href="https://omarfarids.github.io/profile-page/"
        >
          Omar Farid
        </a>
      </p>
    </footer>
  );
};

export default Footer;
