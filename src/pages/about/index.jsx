import React from 'react';
import "./index.scss"
import {FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane, FaYoutube} from "react-icons/fa";

function Index(props) {
    return (
        <div className={"text-white my-3 p-3"}>
            <div className={"row for-text"}>
                <h1 className={"my-3"}>About me</h1>
                <p>Hello there! I'm Shohruh, a passionate frontend developer with a keen eye for design and a knack
                    for creating engaging user experiences. I thrive on turning ideas into beautifully crafted websites
                    and applications that not only look great but also function flawlessly.</p>
                <h1 className={"my-3"}>Expertise</h1>
                <p>I specialize in frontend technologies such as HTML5, CSS3, CSS Libraries and JavaScript, React,
                    Redux,
                    Web design, and I'm proficient in
                    popular frameworks like React and Vue.js. Whether it's building responsive layouts, optimizing
                    performance, or implementing complex interactions, I'm always up for the challenge.</p>
                <h1 className={"my-3"}>What Drives Me</h1>
                <p>What drives me is the opportunity to make a meaningful impact through my work. I believe that great
                    design and functionality can enhance people's lives and transform businesses. That's why I'm
                    committed to delivering solutions that not only meet but exceed expectations.</p>
                <h1 className={"my-3"}>Let's Connect</h1>
                <p>I'm currently seeking new opportunities to contribute my skills and expertise to exciting projects.
                    Whether you're looking to revamp your website, build a new application, or simply chat about the
                    latest trends in frontend development, I'd love to connect!</p>
            </div>
            {/* MY SOCIAL MEDIA */}
            <div className="row">
                <div className={"col-2 d-flex gap-4"}>
                    <a target={"_blank"} href="https://t.me/shohruh_obiddinov"
                       className={"text-white"}><FaTelegramPlane className={"icon"}/></a>
                    <a target={"_blank"} href="https://www.linkedin.com/in/shohruh-obidinov-a6116023b/"
                       className={"text-white"}><FaLinkedin className={"icon"}/></a>
                    <a target={"_blank"} href="https://github.com/shohruhobiddinov"
                       className={"text-white"}><FaGithub className={"icon"}/></a>
                    <a target={"_blank"} href="https://www.instagram.com/thesimonblog/"
                       className={"text-white"}><FaInstagram className={"icon"}/></a>
                    <a target={"_blank"} href="https://www.youtube.com/channel/UCvKetHibksYHo2ESNl9vjfg"
                       className={"text-white"}><FaYoutube className={"icon"}/></a>
                </div>
                <div className={"col-10"}></div>
            </div>
        </div>
    );
}

export default Index;