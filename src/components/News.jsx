import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Title, Text } = Typography;
const { Option } = Select;

const demoImg =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState();
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory,
        count: simplified ? 10 : 100,
    });
    const { data } = useGetCryptosQuery(100);

    if (!cryptoNews?.value) return <Loader />;

    return (
        <>
            {!simplified && (
                <Col span={24} className="search-crypto">
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) =>
                            option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase())
                        }
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins?.map((coin) => (
                            <Option key={coin.name} value={coin.name}>
                                {coin.name}
                            </Option>
                        ))}
                    </Select>
                </Col>
            )}
            <Row gutter={[24, 24]}>
                {cryptoNews?.value?.map((news, index) => (
                    <Col xs={24} sm={12} lg={8} key={index}>
                        <Card hoverable className="news-card">
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title level={4} className="news-title">
                                        {news.name}
                                    </Title>
                                    <img
                                        style={{
                                            maxWidth: "200px",
                                            maxHeight: "100px",
                                        }}
                                        src={
                                            news?.image?.thumbnail
                                                ?.contentUrl || demoImg
                                        }
                                        alt=""
                                    />
                                </div>
                                <p>
                                    {news.description > 100
                                        ? `${news.description.substring(
                                              0,
                                              100
                                          )}...`
                                        : news.description}
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar
                                            src={
                                                news?.provider[0]?.image
                                                    ?.thumbnail?.contentUrl
                                            }
                                            alt="news"
                                        />
                                        <Text className="provider-name">
                                            {news?.provider[0]?.name}
                                        </Text>
                                    </div>
                                    <Text>
                                        {moment(news.datePublished)
                                            .startOf("ss")
                                            .fromNow()}
                                    </Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default News;
