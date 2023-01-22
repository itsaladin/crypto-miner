import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { millify } from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();

    if (isFetching) return "Loading data ...";
    const globalStats = data?.data?.stats;

    console.log(data);

    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic
                        title="Total Cryptocurrencies"
                        value={globalStats.total}
                    />
                    <Statistic
                        title="Total Exchanges"
                        value={globalStats.totalExchanges}
                    />
                    <Statistic
                        title="Total Market Cap"
                        value={globalStats.totalMarketCap}
                    />
                    <Statistic
                        title="Total 24H Volume"
                        value={globalStats.total24hVolume}
                    />
                    <Statistic
                        title="Total Markets"
                        value={globalStats.totalMarkets}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Homepage;
