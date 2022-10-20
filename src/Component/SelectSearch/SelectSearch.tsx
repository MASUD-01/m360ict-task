import React from 'react';
import { Select } from 'antd';


type SetPropsType = {
    setSearchSelect: React.Dispatch<React.SetStateAction<string>>
}
const SelectSearch: React.FC<SetPropsType> = ({ setSearchSelect }) => {
    const { Option } = Select;
    const handleChange = (value: string) => setSearchSelect(value);
    return (
        <div>
            <Select
                onChange={handleChange}
                showSearch
                style={{ width: 200, marginBottom: 30 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                        .toLowerCase()
                        .localeCompare((optionB!.children as unknown as string).toLowerCase())
                }
            >
                <Option value="lastweek">lastweek</Option>
                <Option value="lastmonth">lastmonth</Option>
                <Option value="lastyear">lastyear</Option>

            </Select>
        </div>
    );
};

export default SelectSearch;