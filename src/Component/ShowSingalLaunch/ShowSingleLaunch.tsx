import { Card } from 'antd';
import React from 'react';
import Meta from 'antd/lib/card/Meta';
import { useParams } from "react-router-dom"
import { useGetIdQuery } from '../../Component/Launches'

const ShowSingleLaunch = () => {
    let { userId } = useParams()
    const { data, isLoading } = useGetIdQuery(userId);
    console.log(data)
    // const { details, links, rocket } = data
    return (
        <div style={{ margin: 20 }}>
            {isLoading && <h1>Loading...</h1>}
            <h1>Launch Details</h1>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={data?.links.mission_patch} />}
            >
                <Meta title={data?.details} description={data?.rocket.rocket_name} />
                <span>mission_name: {data?.mission_name}</span> <br />
                <span>lauch_year: {data?.launch_year}</span>
            </Card>

        </div>
    );
};

export default ShowSingleLaunch;