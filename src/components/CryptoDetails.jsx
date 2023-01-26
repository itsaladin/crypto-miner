import React from "react";
import { millify } from "millify";
import { Link, useParams } from "react-router-dom";
import { Card, Row, Col, Input, Typography, Select } from "antd";
import { HTMLReactParser } from "html-react-parser";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import {
    CheckCircleOutlined,
    DollarCircleOutlined,
    ExclamationCircleOutlined,
    FundOutlined,
    MoneyCollectOutlined,
    NumberOutlined,
    StopOutlined,
    ThunderboltOutlined,
    TrophyOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery();
    const cryptoDetails = data?.data.coin;

    console.log("data", data);

    const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
    const stats = [
        {
            title: "Price to USD",
            value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
            icon: <DollarCircleOutlined />,
        },
        { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        {
            title: "24h Volume",
            value: `$ ${
                cryptoDetails?.volume && millify(cryptoDetails?.volume)
            }`,
            icon: <ThunderboltOutlined />,
        },
        {
            title: "Market Cap",
            value: `$ ${
                cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
            }`,
            icon: <DollarCircleOutlined />,
        },
        {
            title: "All-time-high(daily avg.)",
            value: `$ ${
                cryptoDetails?.allTimeHigh?.price &&
                millify(cryptoDetails?.allTimeHigh?.price)
            }`,
            icon: <TrophyOutlined />,
        },
    ];
    const genericStats = [
        {
            title: "Number Of Markets",
            value: cryptoDetails?.numberOfMarkets,
            icon: <FundOutlined />,
        },
        {
            title: "Number Of Exchanges",
            value: cryptoDetails?.numberOfExchanges,
            icon: <MoneyCollectOutlined />,
        },
        {
            title: "Aprroved Supply",
            value: cryptoDetails?.supply?.confirmed ? (
                <CheckCircleOutlined />
            ) : (
                <StopOutlined />
            ),
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Total Supply",
            value: `$ ${
                cryptoDetails?.supply?.total &&
                millify(cryptoDetails?.supply?.total)
            }`,
            icon: <ExclamationCircleOutlined />,
        },
        {
            title: "Circulating Supply",
            value: `$ ${
                cryptoDetails?.supply?.circulating &&
                millify(cryptoDetails?.supply?.circulating)
            }`,
            icon: <ExclamationCircleOutlined />,
        },
    ];

    return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
