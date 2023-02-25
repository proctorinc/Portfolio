import { motion, MotionValue, useTransform } from "framer-motion"
import { Blob } from "./Blob"

type BlobAnimationProps = {
  scrollModifier: MotionValue<number>
}

export const BlobAnimation = (props: BlobAnimationProps) => {
  const { scrollModifier } = props
  const scrollProgress = useTransform(
    scrollModifier,
    [0, 0.6, 1],
    ["200%", "75%", "200%"]
  );
  const negativeScrollProgress = useTransform(
    scrollModifier,
    [0, 0.4, 1],
    ["-200%", "-75%", "-200%"]
  );
  const rotateClockwise = useTransform(scrollModifier, [0, 1], [0, 360]);
  const rotateCouterClockwise = useTransform(
    scrollModifier,
    [0, 1],
    [0, -360]
  );

  return (
    <>
      <motion.div
        className="absolute top-0"
        style={{
          x: negativeScrollProgress,
          rotate: rotateClockwise,
        }}
      >
        <Blob />
      </motion.div>
      <motion.div
        className="absolute bottom-0"
        style={{ x: scrollProgress, rotate: rotateCouterClockwise, scale: 2.1 }}
      >
        <Blob style="large" />
      </motion.div>
    </>
  )
}
