import { motion } from "framer-motion"

type BlobProps = {
  style?: string
}

export const Blob = (props: BlobProps) => {
  const { style } = props

  return (
    <svg
      className="h-80 w-80"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <g transform="translate(418.35309368734863 298.6980314267966)">
        {style == "large" ? (
          <>
            <motion.path
              style={{ scale: 1.6 }}
              d="M146.3 -147.6C189.8 -102.8 225.4 -51.4 217.4 -8C209.4 35.4 157.7 70.7 114.2 115.7C70.7 160.7 35.4 215.4 -7.1 222.4C-49.5 229.5 -99 189 -138.2 144C-177.3 99 -206.2 49.5 -216.8 -10.6C-227.4 -70.7 -219.8 -141.4 -180.6 -186.3C-141.4 -231.1 -70.7 -250 -9.7 -240.4C51.4 -230.7 102.8 -192.4 146.3 -147.6"
              fill="#121f39"
            ></motion.path>
            <motion.path
              style={{ scale: 1.4 }}
              d="M146.3 -147.6C189.8 -102.8 225.4 -51.4 217.4 -8C209.4 35.4 157.7 70.7 114.2 115.7C70.7 160.7 35.4 215.4 -7.1 222.4C-49.5 229.5 -99 189 -138.2 144C-177.3 99 -206.2 49.5 -216.8 -10.6C-227.4 -70.7 -219.8 -141.4 -180.6 -186.3C-141.4 -231.1 -70.7 -250 -9.7 -240.4C51.4 -230.7 102.8 -192.4 146.3 -147.6"
              fill="#16427b"
            ></motion.path>
          </>
        ) : (
          <>
            <motion.path
              style={{ scale: 1.4 }}
              d="M185.8 -166.9C230.1 -141.4 248 -70.7 237.4 -10.6C226.8 49.5 187.7 99 143.3 128.2C99 157.3 49.5 166.2 -8.5 174.6C-66.5 183.1 -132.9 191.3 -157.9 162.1C-182.9 132.9 -166.5 66.5 -168.1 -1.6C-169.8 -69.8 -189.5 -139.5 -164.5 -165C-139.5 -190.5 -69.8 -171.8 0.5 -172.2C70.7 -172.7 141.4 -192.4 185.8 -166.9"
              fill="#121f39"
            ></motion.path>
            <motion.path
              className="bg-gradient-to-r from-[#16427b] to-[#0f172a]"
              style={{ scale: 1.2 }}
              d="M185.8 -166.9C230.1 -141.4 248 -70.7 237.4 -10.6C226.8 49.5 187.7 99 143.3 128.2C99 157.3 49.5 166.2 -8.5 174.6C-66.5 183.1 -132.9 191.3 -157.9 162.1C-182.9 132.9 -166.5 66.5 -168.1 -1.6C-169.8 -69.8 -189.5 -139.5 -164.5 -165C-139.5 -190.5 -69.8 -171.8 0.5 -172.2C70.7 -172.7 141.4 -192.4 185.8 -166.9"
              fill="#173059"
            ></motion.path>
          </>
        )}
        
      </g>
    </svg>
  )
}
