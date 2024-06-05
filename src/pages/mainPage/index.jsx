import React, {useState, useEffect} from 'react';
import './index.scss';
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import {FaTelegramPlane, FaLinkedin, FaGithub, FaInstagram, FaYoutube} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {Content} from "antd/es/layout/layout.js";

function Index(props) {
    const [text, setText] = useState('');
    const message = " I'm Frontend Developer";
    const typingSpeed = 150; // Speed in milliseconds per letter

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < message.length - 1) {
                setText(prevText => prevText + message[currentIndex]);
                currentIndex++;
            } else {
                setText(''); // Clear the text and start over
                currentIndex = 0;
            }
        }, typingSpeed);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div>
            <div className={"container text-white"}>
                {/* MAIN PAGE */}
                <h1 className={"main"}>{text}</h1>

                {/* MY SOCIAL MEDIA */}
                <div className="row social-media">
                    <div className={"col-10"}></div>
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
                </div>
            </div>
        </div>
    );
}

export default Index;

