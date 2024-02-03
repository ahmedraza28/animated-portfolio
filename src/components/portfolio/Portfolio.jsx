import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
      id: 1,
      title: "AquaPlot, Sea Routing App",
      img: "/Aquaplot.png",
      desc: "AquaPlot is your go-to Sea Routing App, offering a user-friendly solution for sailors and navigators. With real-time route optimization, weather forecasting, and dynamic mapping, it ensures a smooth and safe voyage on the open seas.",
    },
  {
    id: 2,
    title: "E-Commerce Website",
    img: "/mulmul.png",
    desc: "Seamlessly blending style and functionality, this platform offers a captivating online shopping experience. From intuitive navigation to secure transactions, every detail is meticulously designed to enhance the brand's digital presence.",
  },
  {
    id: 3,
    title: " MLM (Multi-Level Marketing) software",
    img: "/cycle.jpeg",
    desc: "An innovative MLM (Multi-Level Marketing) software tailored for the cycling community.The software facilitates seamless network marketing, empowering cycling enthusiasts to connect, collaborate, and thrive within a dynamic community.",
  },
  {
    id: 4,
    title: "POS Application",
    img:  "/POSZ.jpeg",
    desc: "This efficient and user-friendly solution simplifies transactions, inventory management, and sales tracking for businesses. Designed to streamline operations and enhance customer experiences, the POS application reflects my dedication to creating impactful and scalable software solutions for modern businesses.",
  },
  {
    id: 5,
    title: "PayPal Home Page Redesign",
    img:  "/PayPal.png",
    desc: "Introducing a fresh and captivating redesign of the PayPal homepage, where innovation meets user-centric design. With a focus on seamless navigation and an aesthetically pleasing interface, this project elevates the user experience to new heights. The revamped homepage effortlessly combines functionality and visual appeal, creating a welcoming gateway to the world of secure and convenient online transactions. ",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
