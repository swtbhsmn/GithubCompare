import React,{useState} from 'react';
import { Input, Card, Statistic, Row, Col } from 'antd';
import '../App.css';
import Loading from './loader';
import { UserOutlined } from '@ant-design/icons';
const { Search } = Input;

const RenderCard = ({ user, isLoading, errMess }) => {

    if (isLoading) {
        console.log('loading');
        return (<Loading />);
    }
    else if (errMess) {
        return (
            <div className="flex-card">
                <p>{errMess}</p>
            </div>



        );
    }
    else {
        console.log("loading end");
        return (<div className="flex-card">

            {user.sort((a, b) => a.followers < b.followers ? 1 : -1).map((data, key) => {
                return (

                    <div key={key} style={{ paddingBottom: "20px" }}>
                        <Card title={data.login} extra={<b>{data.name}</b>} bordered={true} style={{ width: 300 }}>
                                  

                            <Row gutter={16}>

                            <Col span={12}>
                                    <Statistic title="Public Repos" value={data.public_repos} prefix={<UserOutlined />} />
                                </Col>
                                 <Col span={12}>
                                    <Statistic title="Public gists" value={data.public_gists} prefix={<UserOutlined />} />
                                </Col>
                                <Col span={12}>
                                    <Statistic title="Followers" value={data.followers} prefix={<UserOutlined />} />

                                </Col>
                                <Col span={12}>
                                    <Statistic title="Following" value={data.following} prefix={<UserOutlined />} />
                                </Col>
                            </Row>
                               
                        </Card>
                    </div>
                );
            })}
        </div>);
    }
}



const HomePage = (props) => {

    

    const checkUser = (value) => {

        let user = props.search_github_user.github_user.find(x => x.login.toLowerCase() === value.toLowerCase());

        if (user) {
            alert("user already there!");
        }
        else {
            props.searchUsername(value);
        }

    }


    return (

        <div>

            <div className="search_box">
                <div className="tittle">
                    <h2>GithubCompare!</h2>
                </div>
                <div style={{ display: "flex", marginBottom: "100px", width: '320px' }}>

                    <Search size="large" placeholder="input search text" onSearch={value => checkUser(value)} enterButton />

                </div>

            </div>
            <div className="result-box" >

                <RenderCard user={props.search_github_user.github_user}
                    isLoading={props.search_github_user.isLoading}
                    errMess={props.search_github_user.errMess}
                />
            </div>

        </div>
    );



}

export default HomePage;