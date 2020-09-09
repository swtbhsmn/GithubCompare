import React from 'react';
import { Input, Card } from 'antd';
import '../App.css';
import Loading from './loader';
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

            {user.sort((a, b) => a.id > b.id ? 1 : -1).map((data, key) => {
                return (

                    <div key={key} style={{ paddingBottom: "20px" }}>
                        <Card title={data.login} bordered={true} style={{ width: 300 }}>
                            <p>Name: {data.name}</p>
                            <p>Followers: {data.followers}</p>
                            <p>Following: {data.following}</p>
                            <p>Public Gists: {data.public_gists}</p>
                            <p>Public Repo: {data.public_repos}</p>


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
            <div >

                <RenderCard user={props.search_github_user.github_user}
                    isLoading={props.search_github_user.isLoading}
                    errMess={props.search_github_user.errMess}
                />
            </div>

        </div>
    );



}

export default HomePage;