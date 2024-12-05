import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import logo from "../../public/Logo.webp"

export default function Navbar() {
    return (
        <div className="flex items-center justify-between py-6">

            <div className="flex flex-shrink-0 items-center ">
                <a href="/" aria-label="home">
                    <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/rahul-karmakar-605509257" target="_blank" rel="noopener nopreferrer" aria-label="Linkedin">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/rahulkarmakar28" target="_blank" rel="noopener nopreferrer" aria-label="Linkedin">
                    <FaGithub />
                </a>
                <a href="mailto:rahulkarmakar28112002@gmail.com" rel="noopener nopreferrer" aria-label="Linkedin">
                    <MdEmail />
                </a>
            </div>

        </div>
    )
}