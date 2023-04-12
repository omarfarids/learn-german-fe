import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import { HOME, LISTEN } from "routes/CONSTANTS";
import Listen from "pages/listen/Listen";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />
        <Route path={LISTEN} element={<Listen />} />

        <Route path="/" element={<div>protected</div>}>
          {/* Protected routes should be placed in here */}
        </Route>

        {/* 404 page */}
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
