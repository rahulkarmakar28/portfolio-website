import { FaGithub } from "react-icons/fa";
// import { CiGlobe } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../data/info"

export default function Projects() {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl ">Projects</motion.h2>
            <div className="flex flex-col gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 ">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-6 rounded object-cover bg-slate-700 p-1"
                                width={270}
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-3xl lg:w-3/4">
                            <div className="flex gap-20 ">
                                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                                <div className="flex items-center gap-5">
                                    <a href={project.github} target="_blank" className="h-8 w-10 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"><FaGithub className="w-full h-full text-2xl" /></a>
                                    <a href={project.demo} target="_blank" className="h-8 w-10 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"><FaGlobe className="w-full h-full text-2xl" /></a>

                                </div>
                            </div>
                            <p className="mb-4 text-stone-400">{project.description}</p>
                            <>
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300">{tech}</span>
                                ))}
                            </>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}