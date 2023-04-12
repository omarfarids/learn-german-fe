import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group } from "@mantine/core";
import Signup from "./Signup";
import { useContext, useEffect } from "react";
import { AppContext } from "context/context";
import Login from "./Login";
import { Lesson } from "data/dataTypes";

const Nav = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { isLoginForm, setIsLoginForm, lessons, user, setUser } =
    useContext<any>(AppContext);

  const capitalize = (str: string | null) => {
    if (str) {
      let strArr = str.split("");
      strArr[0].toUpperCase();
      str = strArr.join("");
      return str;
    }
  };

  useEffect(() => {
    if (!opened) setIsLoginForm(false);
  });
  return (
    <div className="nav xs:w-5/6 mx-auto">
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {isLoginForm ? <Login close={close} /> : <Signup close={close} />}
      </Modal>
      <div className="flex flex-row justify-between items-center">
        <h1 className="logo text-perfOrange">
          <span className="text-perfCrimson">LG</span>LearnGerman
        </h1>
        {user.firstName && (
          <h1 className="nav-items__item hover:bg-lightCrimson text-perfCrimson px-5">
            Hi, {capitalize(user.firstName)}
          </h1>
        )}
      </div>
      <nav className="nav-items flex flex-row bg-perfCrimson justify-between items-center">
        <div className="flex flex-row">
          <Link to="/">
            <NavItems label="Home" />
          </Link>
          <div className="scroll">
            <NavItems label="Lessons" />
            <ul className="nav-items__lessons bg-perfGray h-40 md:h-fit md overflow-y-auto">
              {lessons.map((lesson: Lesson) => {
                return (
                  <Link
                    key={lesson.id}
                    to={`/listen/${lesson.id + 1}`}
                    state={{ id: lesson.id }}
                  >
                    <li className="lesson text-perfCrimson text-lg flex justify-center items-center cursor-pointer hover:text-perfWhite hover:bg-perfCrimson">
                      Lesson {lesson.id + 1}
                    </li>
                  </Link>
                );
              })}
              {!lessons && <p>Loading ...</p>}
            </ul>
          </div>
          {!user.firstName ? (
            <Group position="center">
              <button onClick={open}>
                <NavItems label="Signup" />
              </button>
            </Group>
          ) : (
            <button
              onClick={() => {
                localStorage.clear();
                setUser({
                  firstName: localStorage.getItem("firstName"),
                  lastName: localStorage.getItem("lastName"),
                });
              }}
            >
              <NavItems label="Logout" />
            </button>
          )}
        </div>
        <form className="nav-search">
          <input
            className="nav-search__field"
            type="search"
            placeholder="Search"
          />
        </form>
      </nav>
    </div>
  );
};

export default Nav;

const NavItems = ({ label }: any) => {
  return (
    <div className="nav-items__item hover:bg-lightCrimson cursor-pointer text-perfWhite">
      {label}
    </div>
  );
};
