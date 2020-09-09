import React from 'react';
import { Spin, Space } from 'antd';

const Loader = () => {
    return (
        <div className="loader">
        <Space  tip="Loading..." size="middle">
            <Spin size="large" />
         </Space>
        </div>
    );
}

export default Loader;