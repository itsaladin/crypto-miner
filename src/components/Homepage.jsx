import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { millify } from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { News, Cryptocurrencies } from "./index";

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    if (isFetching) return "Loading data ...";

    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic
                        title="Total Cryptocurrencies"
                        value={millify(globalStats.total)}
                    />
                    <Statistic
                        title="Total Exchanges"
                        value={millify(globalStats.totalExchanges)}
                    />
                    <Statistic
                        title="Total Market Cap"
                        value={millify(globalStats.totalMarketCap)}
                    />
                    <Statistic
                        title="Total 24H Volume"
                        value={millify(globalStats.total24hVolume)}
                    />
                    <Statistic
                        title="Total Markets"
                        value={millify(globalStats.totalMarkets)}
                    />
                </Col>
            </Row>
            <div className="home-leading-container">
                <Title level={2} className="home-title">
                    Top 20 Cryptocurrencies in the world
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies />
            <div className="home-leading-container">
                <Title level={2} className="home-title">
                    Latest Crypto News
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/news">Show More</Link>
                </Title>
            </div>
            <News />
        </>
    );
};

export default Homepage;
