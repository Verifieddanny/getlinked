import { useState, useEffect } from "react";
import star from "../assets/star.svg";
import grayStar from "../assets/grey_star.svg";

import coWorker from "../assets/co_worker.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.  ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true,
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis,",
      open: false,
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis,",
      open: false,
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis,",
      open: false,
    },
    {
      question: "What happens after the hackathon ends?",
      answer:
        "lorem Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis,",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <section className="attrib md:px-[4rem] pt-[5rem]" id="faq">
      <div className="md:w-[50%] w-full md:text-left text-center ">
        <h2
          className="introP md:text-[1.7rem] text-[0.7rem] "
          data-aos="fade-down"
        >
          Frequently Asked
          <br /> <span>Questions</span>
        </h2>
        <p
          className="md:text-[1rem] text-[0.7rem] leading-5"
          data-aos="fade-down"
        >
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div
          className="faqs md:text-[1rem] text-[0.7rem] leading-5"
          data-aos="fade-down"
        >
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] w-full md:h-full p-3 relative">
        <img src={coWorker} className="md:w-[80%]" data-aos="fade-left" />
      </div>
      <img
        src={grayStar}
        className="absolute top-[10rem]  left-[17rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
      <img
        src={star}
        className="absolute top-[15rem]  right-[10rem]  md:w-[1.625rem] md:h-[2rem] w-[0.625rem] h-[0.75rem] animate-pulse"
      />
    </section>
  );
}

export default Faq;

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};
