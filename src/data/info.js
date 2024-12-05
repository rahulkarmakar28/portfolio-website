const heroContent = "I am a passionate Full Stack Developer with a strong foundation in web development. I am proficient in both front-end and back-end technologies. I have experience in building web applications using React, Node.js, Express, and MongoDB. I am always eager to learn new technologies and improve my skills. I am looking for opportunities to work on challenging projects and grow as a developer.";

const projects =[
    {
        image : "/jwt-auth-utility.png",
        title : "jwt-auth-utility",
        description : "A lightweight Node.js package simplifying JWT handling for secure authentication. Easily configure token generation, validation, expiration, and refresh tokens—perfect for enhancing security in any authentication flow.",
        tech : ["Node.js", "jsonwebtoken"],
        github : "https://github.com/rahulkarmakar28/jwt-auth-utility",
        demo : "https://www.npmjs.com/package/jwt-auth-utility",

    },{
        image : "/neochat.png",
        title : "NeoChat",
        description : "NeoChat is a real-time chat application using the MERN stack and Socket.io. It features JWT-based user authentication, online/offline status, encrypted messaging, group chats, channels, and file sharing. Hosted on Vercel and Render, it provides a seamless communication experience with real-time updates and efficient search functionality.",
        tech : ["ReactJs","Redux", "Express", "MongoDB", "Node.js", "Web Socket", "JWT", "Cloudinary", "Tailwind CSS"],
        github : "https://github.com/rahulkarmakar28/ChatApp",
        demo : "https://neochat.rahulkarmakar.me",

    },{
        image : "/studynotion.png",
        title : "StudyNotion",
        description : "StudyNotion is a full-stack EdTech platform for instructors to create courses and students to purchase and review them. It offers dashboards for Students, Instructors, and Admins, secure payments via Razorpay, user authentication, and automated emails. Responsive design, hosted on Vercel and Render, with media storage on Cloudinary.",
        tech : ["ReactJs","Redux", "Express", "MongoDB", "Node.js", "Razorpay", "JWT", "Cloudinary", "Tailwind CSS"],
        github : "https://github.com/rahulkarmakar28/StudyNotion",
        demo : "https://studynotion.rahulkarmakar.me",

    },{
        image : "/dev detective.png",
        title : "Dev Detective",
        description : "DevDetective is a web page using HTML, CSS, and JavaScript to search and display GitHub profiles. It includes light and dark modes for a customizable user experience, allowing users to find profiles and view detailed information about repositories and contributions easily.",
        tech : ["HTML", "CSS", "JavaScript"],
        github : "https://github.com/rahulkarmakar28/DevDetective",
        demo : "https://rahulkarmakar28.github.io/DevDetective/",

    },{
        image : "/tic tac toe.png",
        title : "Tic Tac Toe",
        description : "Tic-Tac-Toe is a web-based game implemented with HTML, CSS, and JavaScript. It features a classic 3x3 grid where players can take turns marking Xs and Os. The game includes win detection, a reset option, and a responsive design for an engaging and interactive user experience.",
        tech : ["HTML", "CSS", "JavaScript"],
        github : "https://github.com/rahulkarmakar28/Tic_Tac_Toe",
        demo : "https://rahulkarmakar28.github.io/Tic_Tac_Toe/",
    },{
        image : "/password.png",
        title : "Password Generator",
        description : "Password Generator is a web app built with HTML, CSS, and JavaScript that creates secure passwords. Users can set password length using a slider and choose character types with checkboxes. The app displays password strength and allows users to copy the generated password to the clipboard.",
        tech : ["HTML", "CSS", "JavaScript"],
        github : "https://github.com/rahulkarmakar28/Password_Generator",
        demo : "https://rahulkarmakar28.github.io/Password_Generator/",
    },{
        image : "/weather.png",
        title : "Weather App",
        description : "WeatherApp is a web page built with HTML, CSS, and JavaScript that provides real-time weather information. It prompts users to enable location services for automatic weather updates of their current area, and also allows users to search for weather details by location name. The app features a responsive, user-friendly design.",
        tech : ["HTML", "CSS", "JavaScript"],
        github : "https://github.com/rahulkarmakar28/WeatherApp",
        demo : "https://rahulkarmakar28.github.io/WeatherApp/",
    }
]

const contact = {
    address : "Kolkata, India",
    // phoneno : "+91 8101555867",
    email : "rahulkarmakar28112002@gmail.com",
}

const tech = [
    {
        icon: "DiJavascript1",
        customClass: "text-yellow-400",
        duration: 2.5,
    },{
        icon: "RiReactjsLine",
        customClass: "text-cyan-400",
        duration: 2.5,
    },{
        icon: "SiMongodb",
        customClass: "text-green-400",
        duration: 3,
    },{
        icon: "SiExpress",
        customClass: "text-gray-500",
        duration: 5,
    },{
        icon: "FaNodeJs",
        customClass: "text-green-500",
        duration: 2,
    },{
        icon: "SiMysql",
        customClass: "text-blue-500",
        duration: 4,
    },{
        icon: "DiPython",
        customClass: "text-blue-500",
        duration: 2.7,
    },{
        icon: "DiJava",
        customClass: "text-red-500",
        duration: 3.2,
    },{
        icon: "SiTailwindcss",
        customClass: "text-cyan-500",
        duration: 3.5,
    },{
        icon: "DiHtml5",
        customClass: "text-red-500",
        duration: 3.2,
    },{
        icon: "DiCss3",
        customClass: "text-blue-500",
        duration: 3.7,
    },
]
export { heroContent, projects, contact, tech };