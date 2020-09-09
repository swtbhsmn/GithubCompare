import React, { createRef, useRef } from 'react';
import { Input, Card,Typography } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import '../App.css';
const { Search } = Input;
const {Text,Link} =Typography;

const HomePage = (props) => {

    const buttonRef = useRef(null);


    return (
        <div>

            <div className="search_box">
                <div className="tittle">
                    <h2>GithubCompare!</h2>
                </div>
                <div style={{ display: "flex", marginBottom: "100px", width: '320px' }}>

                    <Search ref={buttonRef} size="large" placeholder="input search text" onSearch={value => props.searchUsername(value)} enterButton />

                </div>

            </div>

            {props.search_github_user.github_user.map((data, key) => {
                return (
                    <div style={{width:"300px"}} key={key}>
                        <Card title={data.login} bordered={true} style={{ width: 300 }}>
                        <Text>Followers:{data.followers}</Text>
                            <Text>Public Repo{data.public_repos}</Text>

                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export default HomePage;