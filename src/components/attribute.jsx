import React, { useEffect } from "react";
import bigIdea from "../assets/graph_people.png";
import star from "../assets/star.svg";
import grayStar from "../assets/grey_star.svg";
import purple from "../assets/purple_star.svg";
import Button from "./Button";
import Featther from "./Featther";
import AOS from "aos";
import "aos/dist/aos.css";
function Attribute() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <section className="attrib md:px-[4rem] ">
      <div className="md:w-[50%] w-full p-3 relative">
        <img src={bigIdea} className="md:w-[80%]" data-aos="fade-right" />
      </div>
      <div className="md:w-[50%] w-full md:text-left text-center flex flex-col md:items-start items-center">
        <h2
          className="introP md:text-[1.7rem] text-[0.7rem] "
          data-aos="fade-down"
        >
          Judging Criteria <br /> <span>Key attributes</span>
        </h2>
        <ul className="md:text-[1rem] text-[0.7rem] mx-[1rem] md:mx-0">
          <li className="mb-[1rem]" data-aos="fade-down">
            <span className="text-secondary">
              <b>Innovation and Creativity: </b>
            </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </li>
          <li className="mb-[1rem]" data-aos="fade-down">
            <span className="text-secondary">
              <b>Functionality: </b>
            </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </li>
          <li className="mb-[1rem]" data-aos="fade-down">
            <span className="text-secondary">
              <b>Impact and Relevance: </b>
            </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </li>
          <li className="mb-[1rem]" data-aos="fade-down">
            <span className="text-secondary">
              <b>Technical Complexity </b>
            </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </li>
          <li className="mb-[1rem]" data-aos="fade-down">
            <span className="text-secondary">
              <b>Adherence to Hackathon Rules: </b>
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </li>
        </ul>
        <Button>Read More</Button>
      </div>
      <img
        src={star}
        className="absolute top-[90vh]  left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={grayStar}
        className="absolute top-[17rem]  left-[7rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={purple}
        className="absolute top-[4rem] left-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <Featther type={"five"} />
      <Featther type={"six"} />
    </section>
  );
}

export default Attribute;
