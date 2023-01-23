import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbFilled,
    FundOutlined,
    MenuOutlined,
    BulbOutlined,
} from "@ant-design/icons";
import icon from "../images/crypto.png";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <div className="logo-title">
                    <Avatar size={"large"} src={icon} />
                    <Typography.Title level={2} className="logo">
                        <Link to="/">Crypto Miner</Link>
                    </Typography.Title>
                </div>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;
