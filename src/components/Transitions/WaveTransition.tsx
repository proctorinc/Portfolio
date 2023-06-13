import { motion, MotionValue } from "framer-motion";

type WaveTransitionProps = {
  waveOneSpeed: MotionValue<string>;
  waveTwoSpeed: MotionValue<string>;
  waveThreeSpeed: MotionValue<string>;
  waveFourSpeed: MotionValue<string>;
  waveFiveSpeed: MotionValue<string>;
};

export const WaveTransition = (props: WaveTransitionProps) => {
  const {
    waveOneSpeed,
    waveTwoSpeed,
    waveThreeSpeed,
    waveFourSpeed,
    waveFiveSpeed,
  } = props;
  return (
    <div className="absolute top-full z-40 w-full">
      <svg
        id="visual"
        className="flex-no-shrink -mt-40 fill-current"
        viewBox="0 0 900 450"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <motion.path
          style={{ y: waveOneSpeed }}
          d="M0 310L25 310.2C50 310.3 100 310.7 150 303.7C200 296.7 250 282.3 300 278.3C350 274.3 400 280.7 450 284C500 287.3 550 287.7 600 286.5C650 285.3 700 282.7 750 283.2C800 283.7 850 287.3 875 289.2L900 291L900 451L875 451C850 451 800 451 750 451C700 451 650 451 600 451C550 451 500 451 450 451C400 451 350 451 300 451C250 451 200 451 150 451C100 451 50 451 25 451L0 451Z"
          fill="#16427b"
        ></motion.path>
        <motion.path
          style={{ y: waveTwoSpeed }}
          d="M0 326L25 326C50 326 100 326 150 327.7C200 329.3 250 332.7 300 327.7C350 322.7 400 309.3 450 306.5C500 303.7 550 311.3 600 318.2C650 325 700 331 750 329.2C800 327.3 850 317.7 875 312.8L900 308L900 451L875 451C850 451 800 451 750 451C700 451 650 451 600 451C550 451 500 451 450 451C400 451 350 451 300 451C250 451 200 451 150 451C100 451 50 451 25 451L0 451Z"
          fill="#17396a"
        ></motion.path>
        <motion.path
          style={{ y: waveThreeSpeed }}
          d="M0 313L25 318.2C50 323.3 100 333.7 150 341.2C200 348.7 250 353.3 300 351.7C350 350 400 342 450 337.7C500 333.3 550 332.7 600 334C650 335.3 700 338.7 750 337.5C800 336.3 850 330.7 875 327.8L900 325L900 451L875 451C850 451 800 451 750 451C700 451 650 451 600 451C550 451 500 451 450 451C400 451 350 451 300 451C250 451 200 451 150 451C100 451 50 451 25 451L0 451Z"
          fill="#173059"
        ></motion.path>
        <motion.path
          style={{ y: waveFourSpeed }}
          d="M0 357L25 359.5C50 362 100 367 150 368.2C200 369.3 250 366.7 300 366.3C350 366 400 368 450 369.8C500 371.7 550 373.3 600 375.5C650 377.7 700 380.3 750 376.7C800 373 850 363 875 358L900 353L900 451L875 451C850 451 800 451 750 451C700 451 650 451 600 451C550 451 500 451 450 451C400 451 350 451 300 451C250 451 200 451 150 451C100 451 50 451 25 451L0 451Z"
          fill="#152849"
        ></motion.path>
        <motion.path
          style={{ y: waveFiveSpeed }}
          d="M0 372L25 374.5C50 377 100 382 150 383C200 384 250 381 300 378.8C350 376.7 400 375.3 450 377.2C500 379 550 384 600 390C650 396 700 403 750 402.5C800 402 850 394 875 390L900 386L900 451L875 451C850 451 800 451 750 451C700 451 650 451 600 451C550 451 500 451 450 451C400 451 350 451 300 451C250 451 200 451 150 451C100 451 50 451 25 451L0 451Z"
          fill="#121f39"
        ></motion.path>
        <path
          d="M0 427L25 425C50 423 100 419 150 415.3C200 411.7 250 408.3 300 407.5C350 406.7 400 408.3 450 410.5C500 412.7 550 415.3 600 414C650 412.7 700 407.3 750 409.7C800 412 850 422 875 427L900 432L900 451L875 451C850 451 800 451 750 451C700 451 650 451 600 451C550 451 500 451 450 451C400 451 350 451 300 451C250 451 200 451 150 451C100 451 50 451 25 451L0 451Z"
          fill="#0f172a"
        ></path>
      </svg>
    </div>
  );
};
