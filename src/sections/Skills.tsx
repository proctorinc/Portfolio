import { RefObject } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

type MainSectionProps = {
  innerRef: RefObject<HTMLDivElement>;
};

const Skills = (props: MainSectionProps) => {
  const { innerRef } = props;

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressFromCenter } = useScroll({
    target: innerRef,
    offset: ["center center", "end start"],
  });
  const scrollProgress = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["200%", "75%", "200%"]
  );
  const negativeScrollProgress = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["-200%", "-75%", "-200%"]
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "100%", "100%"]
  );

  const rotateClockwise = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateCouterClockwise = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -360]
  );

  const skills = {
    Python: ["General"],
    JavaScript: ["General"],
  };

  return (
    <section
      ref={innerRef}
      className="relative my-64 flex h-screen w-full flex-col items-center justify-center overflow-x-clip"
    >
      <motion.div
        className="absolute top-0"
        style={{
          x: negativeScrollProgress,
          rotate: rotateClockwise,
        }}
      >
        <svg
          className="h-80 w-80"
          id="blob-one"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(451.3065931695059 309.812351812355)">
            <motion.path
              style={{ scale: 1.7 }}
              d="M146.3 -147.6C189.8 -102.8 225.4 -51.4 217.4 -8C209.4 35.4 157.7 70.7 114.2 115.7C70.7 160.7 35.4 215.4 -7.1 222.4C-49.5 229.5 -99 189 -138.2 144C-177.3 99 -206.2 49.5 -216.8 -10.6C-227.4 -70.7 -219.8 -141.4 -180.6 -186.3C-141.4 -231.1 -70.7 -250 -9.7 -240.4C51.4 -230.7 102.8 -192.4 146.3 -147.6"
              fill="#121f39"
            ></motion.path>
            <motion.path
              style={{ scale: 1.5 }}
              d="M146.3 -147.6C189.8 -102.8 225.4 -51.4 217.4 -8C209.4 35.4 157.7 70.7 114.2 115.7C70.7 160.7 35.4 215.4 -7.1 222.4C-49.5 229.5 -99 189 -138.2 144C-177.3 99 -206.2 49.5 -216.8 -10.6C-227.4 -70.7 -219.8 -141.4 -180.6 -186.3C-141.4 -231.1 -70.7 -250 -9.7 -240.4C51.4 -230.7 102.8 -192.4 146.3 -147.6"
              fill="#173059"
            ></motion.path>
          </g>
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-0"
        style={{ x: scrollProgress, rotate: rotateCouterClockwise, scale: 2.1 }}
      >
        <svg
          className="h-full w-full"
          id="blob-two"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(418.35309368734863 298.6980314267966)">
            <motion.path
              style={{ scale: 1.3 }}
              d="M185.8 -166.9C230.1 -141.4 248 -70.7 237.4 -10.6C226.8 49.5 187.7 99 143.3 128.2C99 157.3 49.5 166.2 -8.5 174.6C-66.5 183.1 -132.9 191.3 -157.9 162.1C-182.9 132.9 -166.5 66.5 -168.1 -1.6C-169.8 -69.8 -189.5 -139.5 -164.5 -165C-139.5 -190.5 -69.8 -171.8 0.5 -172.2C70.7 -172.7 141.4 -192.4 185.8 -166.9"
              fill="#121f39"
            ></motion.path>
            <motion.path
              className="bg-gradient-to-r from-[#16427b] to-[#0f172a]"
              style={{ scale: 1.1 }}
              d="M185.8 -166.9C230.1 -141.4 248 -70.7 237.4 -10.6C226.8 49.5 187.7 99 143.3 128.2C99 157.3 49.5 166.2 -8.5 174.6C-66.5 183.1 -132.9 191.3 -157.9 162.1C-182.9 132.9 -166.5 66.5 -168.1 -1.6C-169.8 -69.8 -189.5 -139.5 -164.5 -165C-139.5 -190.5 -69.8 -171.8 0.5 -172.2C70.7 -172.7 141.4 -192.4 185.8 -166.9"
              fill="#16427b"
            ></motion.path>
          </g>
        </svg>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        style={{ scale: contentScale }}
      >
        <h1 className="text-6xl font-extrabold">Skills</h1>
        <div className="grid grid-cols-4 p-10">
          <div>
            <h2 className="text-3xl">General</h2>
            <ul>
              <li>Python</li>
              <li>Javascript</li>
              <li>Java</li>
              <li>C++</li>
              <li>C</li>
              <li>Groovy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Web</h2>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Backend</h2>
            <ul>
              <li>Django</li>
              <li>Node JS</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Database</h2>
            <ul>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Firestore</li>
              <li>MongoDB</li>
              <li>SQLite</li>
            </ul>
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        className="h-20 bg-blue-500"
        style={{ width: scrollProgress }}
      ></motion.div> */}
    </section>
  );
};

export default Skills;
