
import React from 'react';
import "./index.scss";
import { NavLink, Outlet } from "react-router-dom";
import { Select } from "antd";
import { Content } from "antd/es/layout/layout.js";
import resume_en from "../../assets/Resume_EN.pdf"
import resume_ru from "../../assets/Resume_RU.pdf"
import resume_uz from "../../assets/Resume_UZ.pdf"
import {DownloadOutlined} from "@ant-design/icons";

const { Option } = Select;

function Index(props) {
    const handleDownload = (value) => {
        let fileUrl;
        switch (value) {
            case 'en':
                fileUrl = {resume_en};
                break;
            case 'ru':
                fileUrl = {resume_ru};
                break;
            case 'uz':
                fileUrl = {resume_uz};
                break;
            default:
                fileUrl = {resume_en};
        }
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', `Resume_${value.toUpperCase()}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={"container-fluid for-bg"}>
            <div className={"container"}>
                {/* NAVBAR */}
                <div className={"row d-flex align-items-center py-2"}>
                    <div className={"col-3"}>
                        <h2>
                            <NavLink to={"/"} className={"text-white text-decoration-none"}>Logo</NavLink>
                        </h2>
                    </div>
                    <div className={"col-6 d-flex justify-content-center gap-5"}>
                        <NavLink to={"/about"} className={"text-white text-decoration-none"}>About</NavLink>
                        <NavLink to={"/portfolios"} className={"text-white text-decoration-none"}>Portfolios</NavLink>
                    </div>
                    <div className="col-3 text-end">
                        <Select
                            defaultValue="default"
                            style={{ width: 180 }}
                            onChange={handleDownload}
                            className={"bg-dark text-white"}
                            suffixIcon={<DownloadOutlined/>}
                        >
                            <Option value="default" disabled>Download resume</Option>
                            <Option value="en">English</Option>
                            <Option value="ru">Russian</Option>
                            <Option value="uz">Uzbek</Option>
                        </Select>
                    </div>
                </div>
                {/* CONTENT */}
                <div className={"row for-content"}>
                    <Content>
                        <Outlet/>
                    </Content>
                </div>
            </div>
        </div>
    );
}

export default Index;
