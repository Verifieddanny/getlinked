import React, { useEffect, useState } from "react";
import Overview from "../components/Overview";
import Intro from "../components/Intro";
import Rules from "../components/Rules";
import Attribute from "../components/attribute";
import Faq from "../components/Faq";
import TimeLine from "../components/TimeLine";
import Reward from "../components/Reward";
import Partners from "../components/Partners";
import Policy from "../components/Policy";
import Footer from "../components/Footer";

function GetContents({ setNavon }) {
  useEffect(() => {
    setNavon(true);
  }, []);
  return (
    <>
      {/* <Loader /> */}
      <Overview />
      <Intro />
      <Rules />
      <Attribute />
      <Faq />
      <TimeLine />
      <Reward />
      <Partners />
      <Policy />
      <Footer />
    </>
  );
}

export default GetContents;

// const Loader = () => {
//   const [loaded, setLoaded] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setLoaded(false);
//     }, 5000);
//   }, []);
//   return (
//     <>
//       {loaded && (
//         <div className="laoderCont">
//           <div className="loader"></div>
//         </div>
//       )}
//     </>
//   );
// };
