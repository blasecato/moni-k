import React from 'react'
import LayoutUser from "../../components/layout/LayoutUser/LayoutUser";
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd';

class Store extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="store">
                <div className="users__layout">
                    <LayoutUser></LayoutUser>
                </div>
                <div className="store__content">
                    <PageHeader className="store__content__card"
                        title="Canela"
                        subTitle="X100 gr"
                        extra={[
                            <Button key="1" type="primary">
                                Primary
                             </Button>,
                        ]}
                    >
                        <Descriptions size="small" column={3}>
                            <div className="">
                                <Descriptions.Item className="store__content__card__desc">
                                    <img className="store__content__card__img" src="https://s2.best-wallpaper.net/wallpaper/2560x1600/1708/Some-cinnamon_2560x1600.jpg"></img>
                                </Descriptions.Item>
                                <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                                <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                            </div>
                            <div>
                                <Descriptions.Item label="Remarks">
                                    Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                                </Descriptions.Item>
                            </div>
                        </Descriptions>

                    </PageHeader>
                    <br />
                    <PageHeader
                        onBack={() => window.history.back()}
                        title="Title"
                        tags={<Tag color="blue">Running</Tag>}
                        subTitle="This is a subtitle"
                        extra={[
                            <Button key="3">Operation</Button>,
                            <Button key="2">Operation</Button>,
                            <Button key="1" type="primary">
                                Primary
                            </Button>,
                        ]}
                    >
                        <Row type="flex">
                            <Statistic title="Status" value="Pending" />
                            <Statistic
                                title="Price"
                                prefix="$"
                                value={568.08}
                                style={{
                                    margin: '0 32px',
                                }}
                            />
                            <Statistic title="Balance" prefix="$" value={3345.08} />
                        </Row>
                    </PageHeader>
                </div>
            </div>
        );
    }
}

export default Store;