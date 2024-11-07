import { motion } from "framer-motion";
import "./hero.scss";

const sliderTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-57%",
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text-container">
          <motion.div
            className="wrapper"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>Ahmed Fayez</motion.h2>
            <motion.h1 variants={textVariants}>Data Analyst</motion.h1>
            <motion.div className="btns" variants={textVariants}>
              <motion.a href="#Portfolio" variants={textVariants}>
                <motion.button variants={textVariants}>
                  See the latest works
                </motion.button>
              </motion.a>
              <motion.a href="#Contact" variants={textVariants}>
                <motion.button variants={textVariants}>
                  Contact Me
                </motion.button>
              </motion.a>
            </motion.div>
            <motion.img
              src="/scroll.png"
              alt=""
              variants={textVariants}
              animate="scrollButton"
            />
          </motion.div>
        </div>
        <div className="img-container">
          <img src="/hero.png" alt="hero" />
          {/* <img
            src="https://readyplayer.me/gallery/66287382dea687386fca3c7e-tiVI5Ppng"
            alt="hero"
          /> */}
        </div>
        <motion.div
          className="slider-text"
          variants={sliderTextVariants}
          initial="initial"
          animate="animate"
        >
          Data Analyst
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
