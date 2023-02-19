import { ForwardRefExoticComponent } from "react"
import { motion } from "framer-motion"
import { GithubLogo, IconProps, LinkedinLogo } from "phosphor-react"

type SocialMediaIconProps = {
  Icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>,
  url: string,
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { Icon, url } = props;

  return (
    <motion.i
      whileHover={{
        scale: 1.5,
        transition: {
          duration: 0.25
        }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.location.href = url}
    >
      <Icon weight="fill" size={25} />
    </motion.i>
  )
}

export const SocialMediaCluster = () => {
  const GITHUB_URL = "https://github.com/proctorinc"
  const LINKEDIN_URL = "https://linkedin.com/in/matthew-proctor"

  const icons = [
    { icon: GithubLogo, url: GITHUB_URL},
    { icon: LinkedinLogo, url: LINKEDIN_URL}
  ]
  
  return (
    <motion.div className="flex gap-1 text-slate-500 py-2"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 1,
          ease: "easeIn"
        }
      }}
    >
      {icons.map((item) => <SocialMediaIcon Icon={item.icon} url={item.url} />)}
    </motion.div>
  )
}
