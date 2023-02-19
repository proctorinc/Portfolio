import { PatternLines } from "@visx/pattern"
import { Bar } from "@visx/shape"
import { motion, MotionValue } from "framer-motion"

type BackgroundProps = {
  scrollModifier: MotionValue<string>
}

export const Background = (props: BackgroundProps) => {
  const { scrollModifier } = props;

  return (
    <motion.div
      className="absolute gradient-background w-full h-full bg-cover bg-no-repeat #bg-[url('/images/space-background.jpeg')] -z-20"
      style={{ y: scrollModifier }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 1.75,
          ease: "easeIn",
        }
      }}
    >
      <svg className="w-full h-full">
        <PatternLines
          id="lines"
          stroke="rgb(255, 255, 255, 0.03)"
          strokeWidth={2}
          strokeDasharray={6}
          width={60}
          height={60}
          orientation={["vertical", "horizontal"]}
        />
        <Bar
          fill={`url(#lines)`}
          width="100%"
          height="100%"
        />
      </svg>
    </motion.div>
  )
}
