import React from 'react';
import {Button, Card} from "antd";
import Meta from "antd/es/card/Meta.js";
import {EyeOutlined} from "@ant-design/icons";
import testImg from "../../assets/i.webp"
import portfolioImg1 from "../../assets/portfolio-1.png"
import portfolioImg2 from "../../assets/portfolio-2.png"
import portfolioImg3 from "../../assets/portfolio-3.png"
import portfolioImg4 from "../../assets/portfolio-4.png"
import portfolioImg5 from "../../assets/portfolio-5.png"
import portfolioImg6 from "../../assets/portfolio-6.png"
import portfolioImg7 from "../../assets/portfolio-7.png"
import portfolioImg8 from "../../assets/portfolio-8.png"
import portfolioImg9 from "../../assets/portfolio-9.png"

function Index(props) {
    return (
        <div className={"text-white"}>
            <div className="row my-5">
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg1} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"Your Favourite Food Delivered Hot "}
                              description={"Healthy switcher chefs do all the prep work."} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://b2-restaurant-landin-page-github.vercel.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg2} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"IBS School admin panel"} description={"Admin panel for IBS school's website" +
                            ""} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://practice-course-project.vercel.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg3} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"Future of Skin Design"} description={"Use the power of the Al to generate the skins of your dreams."} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://upwork-clivi-home.vercel.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg4} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"Skyper Pool Partment"} description={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://houzing-figma-43ub-g4smvnj6v-shohruh2005.vercel.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg5} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"IBS School Landing Page"} description={"IBS - Angrendagi ilk zamonaviy kurslar maktabi"} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://ibs-project-admin.vercel.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg6} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"Unique Porcelain & Stone Collection"} description={"Unique & modern pottery made by our master in porcelain & stones"} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://obidinov-shohruh-pompeo-website.netlify.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg7} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"ULet's Create Your Dream Interior"} description={"The world needs innovators and problem solvers who turn"} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://obiddinov-shohruh-figma-1.netlify.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg8} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"Simple IBS School Landing Page"} description={"Created by html, css and javascript"} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://obiddinov-shohruh-ibs-school-com.netlify.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                        hoverable
                        style={{
                            width: "100%"
                        }}
                        cover={<img src={portfolioImg9} alt=""/>}
                        className={"my-3"}
                    >
                        <Meta title={"Clean juice landing page"} description={"Your healthy life starts with us"} />
                        <Button icon={<EyeOutlined />} className={"bg-dark text-white mt-3"}>
                            <a href="https://clean-juice-landing-page.vercel.app/" className={"text-decoration-none"} target={"_blank"}>view full portfolio</a>
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Index;



