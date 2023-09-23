import { useState, lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const GetContents = lazy(() => import("./Pages/GetContents"));
const Contact = lazy(() => import("./Pages/Contact"));
const Register = lazy(() => import("./Pages/Register"));

import ScrollToTop from "./components/ScrollToTop";
import ScrollToAnchor from "./hooks/ScrollToView";

function App() {
  const [navOn, setNavOn] = useState(true);

  return (
    <>
      <Suspense
        fallback={
          <div className="laoderCont">
            <div className="loader"></div>
          </div>
        }
      >
        <Router>
          <ScrollToTop />
          <ScrollToAnchor />
          <NavBar navOn={navOn} />
          <Routes>
            <Route index element={<GetContents setNavon={setNavOn} />} />
            <Route path="/contact" element={<Contact setNavon={setNavOn} />} />
            <Route
              path="/register"
              element={<Register setNavon={setNavOn} />}
            />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
