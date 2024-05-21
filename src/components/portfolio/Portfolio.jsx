import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    img: "/1.png",
    title: "Chirper",
    desc: "Share your thoughts on Chirper with your friends.",
    link: "https://chirper-client.onrender.com",
  },
  {
    id: 2,
    img: "/2.PNG",
    title: "UrbanNest",
    desc: "Want to find a state? Only in UrbanNest you can find what u want.",
    link: "https://urbannest-client.onrender.com",
  },
  {
    id: 3,
    img: "/3.png",
    title: "BlogWise",
    desc: "Follow us to see the the latest blogs.",
    link: "https://blogwise-eosin.vercel.app/",
  },
  {
    id: 4,
    img: "/4.PNG",
    title: "Liver",
    desc: "Want to be a freelancer? This is your place.",
    link: "https://liver-client.onrender.com",
  },
  {
    id: 5,
    img: "/5.PNG",
    title: "FeedSocial",
    desc: "Share your thoughts on FeedSocial with your friends.",
    link: "https://github.com/ahmedfayez070/feed-social",
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
