import { motion } from "framer-motion";
import { contact } from "../data/info";

export default function Contact() {
    return (
        <div className="border-t border-stone-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get In Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">{contact.address}</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }} className="my-4">{contact.phoneno}</motion.p>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulkarmakar28112002@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Send Email" className="border-b">{contact.email}</a>

            </div>
        </div>
    );
}