import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    img: "/1.png",
    title: "Sales Performance",
    desc: "This project outlines the specifications for building two dashboards using tableau to help stakeholders, including sales managers and executives to analyze sales performance and customers.",
    link: "https://ahmed-fayez-abdalla.github.io/sales_performance.githup.io/",
  },
  {
    id: 2,
    img: "/2.PNG",
    title: "Bike Shop",
    desc: "This project outlines the specifications for building a dashboard using Power BI to help the bike shop show the sales performance through 2021 and 2022.",
    link: "https://ahmed-fayez-abdalla.github.io/bike_shop.githup.io/",
  },
  {
    id: 3,
    img: "/3.jpg",
    title: "Top UK Youtubers 2024",
    desc: "The Head of Marketing wants to find out who the top YouTubers are in 2024 to decide on which YouTubers would be best to run marketing campaigns throughout the rest of the year.",
    link: "https://ahmed-fayez-abdalla.github.io/top_uk_youtubers_2024.githup.io/",
  },
  {
    id: 4,
    img: "/4.PNG",
    title: "Layoff Dataset Cleanup",
    desc: "In recent years, layoffs have become a significant topic of concern in the business world, impacting employees and employers alike. The purpose of this document is to show how to clean and prepare a layoff dataset using SQL, ensuring that the analysis is based on accurate and reliable data.",
    link: "https://ahmed-fayez-abdalla.github.io/layoffs.githup.io/",
  },
  {
    id: 5,
    img: "/5.PNG",
    title: "IMDB Movies",
    desc: "This analysis will explore how movie ratings impact revenue, identify trends in movie production over time, and classify films based on their ratings. Ultimately, this project seeks to provide a comprehensive overview of the dataset, offering a deeper understanding of the cinematic landscape.",
    link: "https://ahmed-fayez-abdalla.github.io/IMDB_movies.githup.io/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section className="section">
      <motion.div className="container" ref={ref}>
        <div className="img-container">
          <img src={item.img} alt={item.title} />
        </div>
        <motion.div className="text-container" style={{ y }}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <a href={item.link} target="_blank" rel="noreferrer">
            <button>See the app</button>
          </a>
        </motion.div>
      </motion.div>
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
    <motion.div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  );
};

export default Portfolio;
