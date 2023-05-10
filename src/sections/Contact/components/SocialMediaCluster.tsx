import { ForwardRefExoticComponent } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeOpen,
  GithubLogo,
  IconProps,
  LinkedinLogo,
} from "phosphor-react";

type SocialMediaIconProps = {
  Icon: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  url: string;
};

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { Icon, url } = props;

  return (
    <motion.i
      className="z-30 flex w-fit items-center gap-1 rounded-full p-1 text-xs text-slate-400 hover:text-slate-200"
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.3,
        transition: {
          duration: 0.25,
        },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => (window.location.href = url)}
    >
      <Icon weight="fill" size={30} />
    </motion.i>
  );
};

export const SocialMediaCluster = () => {
  const GITHUB_URL = "https://github.com/proctorinc";
  const LINKEDIN_URL = "https://linkedin.com/in/matthew-proctor";
  const EMAIL_URL =
    "mailto:matthewalanproctor@gmail.com?subject=Hi%20Matt%21%20Let%27s%20connect";

  const icons = [
    { icon: GithubLogo, url: GITHUB_URL },
    { icon: LinkedinLogo, url: LINKEDIN_URL },
    { icon: EnvelopeOpen, url: EMAIL_URL },
  ];

  return (
    <motion.div className="flex w-full justify-center gap-3 text-slate-500">
      {icons.map((item) => (
        <SocialMediaIcon key={item.url} Icon={item.icon} url={item.url} />
      ))}
    </motion.div>
  );
};
