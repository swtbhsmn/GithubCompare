import React from 'react';
import { Spin, Space } from 'antd';
import '../App.css';
const Loader = (props) => {


    return (


<div className="overly">

        <div className="spinnerx">
            <Space tip="Loading..." size="middle">
                <Spin size="large" />
            </Space>
        </div>

</div>
    );
}

export default Loader;