import { MotionValue, motion, useTransform } from "framer-motion"

type ScaleAnimationProps = {
  children: string | JSX.Element | JSX.Element[],
  scrollModifier: MotionValue<number>
}

export const ScaleAnimation = (props: ScaleAnimationProps) => {
  const { children, scrollModifier } = props

  const contentScale = useTransform(
    scrollModifier,
    [0, 0.4, 1],
    ["0%", "100%", "100%"]
  );

  return (
    <motion.div
      className="flex flex-col items-center"
      style={{ scale: contentScale }}
    >
      {children}
    </motion.div>
  )
}
