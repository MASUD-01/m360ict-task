import React from 'react';
import { Input } from 'antd';


type SetPropsType = {
    setSearchName: React.Dispatch<React.SetStateAction<string>>
}
const InputSearch: React.FC<SetPropsType> = ({ setSearchName }) => {
    // const { setSearchName } = props
    const { Search } = Input;
    const onSearch = (value: string) => setSearchName(value);
    return (
        <div>
            <Search style={{ width: 400, marginBottom: 30 }}
                placeholder="search by rocket name"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </div>
    );
};

export default InputSearch;