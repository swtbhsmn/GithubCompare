import React from 'react';
import { Input, Card, Typography} from 'antd';
import '../App.css';
import {
    SearchOutlined
  } from '@ant-design/icons';
const { Search } = Input;
const { Text } = Typography;

const HomePage = (props) => {



    return (
        <div>

            <div className="search_box">
                <div className="tittle">
                    <h2>GithubCompare!</h2>
                </div>
                <div  style={{ display: "flex", marginBottom: "100px", width: '320px' }}>

                 <Search size="large" placeholder="input search text" onSearch={value => props.searchUsername(value)} enterButton />
                 { /*  <Input size="large" type="text" placeholder="Gitub Username"/><button className="btn-color">compare</button>*/}
                </div>

            </div>
        <div className="flex-card">
        {props.search_github_user.github_user.map((data, key) => {
                return (
                    
                    <div key={key}>
                        <Card title={data.login} bordered={true} style={{ width: 300 }}>
                            <Text>Followers:{data.followers}</Text>
                            <Text>Public Repo{data.public_repos}</Text>

                        </Card>
                    </div>
                );
            })} 
        </div>
         
        </div>
    );
}

export default HomePage;