import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useGetLauncheAllPostQuery } from '../../Component/Launches'

import InputSearch from '../InputSearch/InputSearch';
import SelectSearch from '../SelectSearch/SelectSearch';
import LaunchStatus from '../LaunchStatus/LaunchStatus';
import { Link } from 'react-router-dom';
const ShowAllLaunch = () => {
    const [searchName, setSearchName] = useState<string>('' as string)
    const [searchSelect, setSearchSelect] = useState<string>('' as string)
    const [searchByStatus, setSearchByStatus] = useState<string>('' as string)
    const { data, isLoading } = useGetLauncheAllPostQuery(1);
    const searchdata = data?.filter((item: any) => {
        if (searchName && !searchSelect) {
            return item.rocket.rocket_name.toLowerCase() === searchName.toLowerCase()
        }
        else if (searchSelect === 'lastweek') {
            const now = new Date();
            const lastWeekdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            return item.launch_date_local.includes(lastWeekdate)
        } else if (searchSelect === 'lastmonth') {
            const now = new Date();
            const lastMonthdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            return item.launch_date_local.includes(lastMonthdate)
        } else if (searchSelect === 'lastyear') {
            const now = new Date();
            const lastYeardate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            return item.launch_date_local.includes(lastYeardate)
        }
        else if (searchByStatus === 'true') {
            return item.launch_success === true
        }
        else if (searchByStatus === 'upcoming') {
            return item.upcoming === true
        }
        else if (searchByStatus === 'false') {
            return item.launch_success === false
        }
        else {
            return item
        }

    })
    return (
        <div className='App'>
            {isLoading && <h1>Loading...</h1>}
            <InputSearch setSearchName={setSearchName}></InputSearch>
            <SelectSearch setSearchSelect={setSearchSelect}></SelectSearch>
            <LaunchStatus setSearchByStatus={setSearchByStatus}></LaunchStatus>
            <Row gutter={[16, 16]}>

                {
                    searchdata?.slice(0, 20).map((item: any) => {
                        return (
                            <Link to={'/launch/' + item?.flight_number} key={item.flight_number}>
                                <Col span={6} ><Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={item.links.mission_patch} />}
                                >
                                    <Meta title={item.details} description={item.rocket.rocket_name} />
                                </Card></Col>
                            </Link>
                        )
                    })
                }
            </Row>
            {searchdata?.length === 0 && <h1>No matching data.</h1>}
        </div>
    );
};

export default ShowAllLaunch;