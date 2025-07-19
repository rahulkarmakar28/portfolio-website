import { motion } from "framer-motion";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiPrisma,
  SiDrizzle,
} from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiPython,
  DiRedis,
} from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

const iconVariants = (delay = 0, amplitude = 20) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -amplitude, 0, amplitude, 0],
    transition: {
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
});

export default function TechSection() {
  return (
    <div className="pb-24 flex flex-col items-center ml-0 -mr-0 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl sm:text-4xl mb-12 z-10"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 ml-24 -mr-28"
      >
        <motion.div initial="initial" animate="animate" variants={iconVariants(0, 12)}>
          <DiHtml5 className="text-5xl sm:text-7xl text-red-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(0.2, 18)}>
          <DiCss3 className="text-5xl sm:text-7xl text-blue-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(0.4, 14)}>
          <SiTailwindcss className="text-5xl sm:text-7xl text-cyan-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(0.6, 20)}>
          <DiJavascript1 className="text-5xl sm:text-7xl text-yellow-400" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(0.8, 16)}>
          <SiTypescript className="text-5xl sm:text-5xl text-blue-400" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(1, 22)}>
          <RiReactjsLine className="text-5xl sm:text-7xl text-cyan-400" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(1.2, 15)}>
          <SiMongodb className="text-5xl sm:text-7xl text-green-400" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(1.4, 10)}>
          <SiExpress className="text-5xl sm:text-7xl text-gray-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(1.6, 19)}>
          <FaNodeJs className="text-5xl sm:text-7xl text-green-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(1.8, 13)}>
          <SiMysql className="text-5xl sm:text-7xl text-blue-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2, 17)}>
          <DiPython className="text-5xl sm:text-7xl text-blue-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2.2, 11)}>
          <DiJava className="text-5xl sm:text-7xl text-red-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2.4, 23)}>
          <FaAws className="text-5xl sm:text-7xl text-yellow-400" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2.6, 18)}>
          <DiRedis className="text-5xl sm:text-7xl text-red-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(2.8, 14)}>
          <SiDocker className="text-5xl sm:text-7xl text-blue-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(3.0, 16)}>
          <SiPrisma className="text-5xl sm:text-7xl text-indigo-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(3.2, 19)}>
          <SiDrizzle className="text-5xl sm:text-7xl text-purple-500" />
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={iconVariants(3.4, 15)}>
          <BiLogoPostgresql className="text-5xl sm:text-7xl text-blue-700" />
        </motion.div>
      </motion.div>
    </div>
  );
}
