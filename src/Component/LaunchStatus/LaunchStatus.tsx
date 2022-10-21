import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';


type SetPropsType = {
    setSearchByStatus: React.Dispatch<React.SetStateAction<string>>
}
const LaunchStatus: React.FC<SetPropsType> = ({ setSearchByStatus }) => {
    const onChange = (e: RadioChangeEvent) => {
        setSearchByStatus(e.target.value);
    };
    return (
        <div>
            <h3>Launch By Status</h3>
            <Radio.Group onChange={onChange} value={''} style={{ width: 200, marginBottom: 30 }}>
                <Radio value={"false"}>Failure</Radio>
                <Radio value={'true'}>Success</Radio>
                <Radio value={'upcoming'}>UpComing</Radio>
            </Radio.Group>
        </div>
    );
};

export default LaunchStatus;