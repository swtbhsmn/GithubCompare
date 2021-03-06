import React, { useState } from 'react';
import { Input, Card, Statistic, Row, Col, Select } from 'antd';
import '../App.css';
import Loading from './loader';
const { Search } = Input;
const { Option } = Select;


const RenderLoading = ({ isLoading, errMess }) => {

    if (isLoading) {
        return (<Loading />);
    }
    else if (errMess) {
        return (
            <div className="flex-card">
                {errMess}

            </div>

        );
    }
    else {
        return <div style={{ display: "none" }}></div>;
    }

}

const RenderCard = ({ user, state }) => {


    return (<div className="flex-card">
        <div style={{ top: 0, right: 0, position: "absolute", padding: 20 }}>



            <Statistic value={user.length} />



        </div>
        {user.sort((a, b) => a[state] < b[state] ? 1 : -1).map((data, key) => {
            return (

                <div key={key} className="inside-map-render" >
                    <a target="_blank" href={`https://github.com/${data.login}`} rel="noopener noreferrer" >
                        <Card title={data.login} extra={<b>{data.name}</b>} bordered={true} style={{ width: 300 }}>


                            <Row gutter={16}>

                                <Col span={12}>
                                    <Statistic title="Public Repos" value={data.public_repos} />
                                </Col>
                                <Col span={12}>
                                    <Statistic title="Public gists" value={data.public_gists} />
                                </Col>
                                <Col span={12}>
                                    <Statistic title="Followers" value={data.followers} />

                                </Col>
                                <Col span={12}>
                                    <Statistic title="Following" value={data.following} />
                                </Col>
                            </Row>

                        </Card>
                    </a>
                </div>
            );
        })}
    </div>);

}



const HomePage = (props) => {



    const [state, setState] = useState(window.sessionStorage.getItem("selectValue"));


    const checkUser = (value) => {

        let user = props.search_github_user.github_user.find(x => x.login.toLowerCase() === value.toLowerCase());

        if (user) {
            alert("user already there!");
        }
        else {
            props.searchUsername(value);
        }

    }

    const selectValue = (value) => {
        window.sessionStorage.setItem("selectValue", value);
        setState(value);
    }


    return (

        <div className="body-container">

            <div className="search_box">
                <div className="tittle">
                    <h2>GithubCompare!</h2>
                </div>
                <div style={{ display: "flex", marginBottom: "20px", width: '320px' }}>

                    <Search size="large" placeholder="Enter Github Username" onSearch={value => !value ? false : checkUser(value)} enterButton />

                </div>
                <div>
                    <Select defaultValue={state} placeholder="Select for ranked" style={{ width: '320px' }} onChange={selectValue} >

                        <Option value="followers">Followers</Option>
                        <Option value="following">Following</Option>
                        <Option value="public_gists" >Public gists</Option>
                        <Option value="public_repos">Public repos</Option>

                    </Select>
                </div>
                <div style={{ marginTop: "20px" }}>

                    <RenderLoading
                        isLoading={props.search_github_user.isLoading}
                        errMess={props.search_github_user.errMess}
                    />
                </div>

            </div>




            <div className="box-container">

                <RenderCard user={props.search_github_user.github_user}
                    state={state}

                />


            </div>

        </div>
    );



}

export default HomePage;