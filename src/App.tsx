import React, { useState } from 'react';
import './App.css';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useGetLauncheAllPostQuery } from './Component/Launches'
import { useGetIdQuery } from './Component/Launches'
import InputSearch from './Component/InputSearch/InputSearch';
import { setInterval } from 'timers/promises';
import SelectSearch from './Component/SelectSearch/SelectSearch';

export type DataType = {

}
function App() {
  const [searchName, setSearchName] = useState<string>('' as string)
  const [searchSelect, setSearchSelect] = useState<string>('' as string)
  const { data, error, isLoading } = useGetLauncheAllPostQuery(1);
  const { data: d } = useGetIdQuery(1);


  const searchdata = data?.filter((item: any) => {
    if (searchName) {
      return item.rocket.rocket_name.toLowerCase() === searchName.toLowerCase()
    } else if (searchSelect) {
      if (searchSelect === 'lastweek') {
        const now = new Date();
        const lastWeekdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        return item.launch_date_local.includes(lastWeekdate)
      } else if (searchSelect === 'lastmonth') {
        const now = new Date();
        const lastMonthdate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        return item.launch_date_local.includes(lastMonthdate)
      } else {
        const now = new Date();
        const lastYeardate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        return item.launch_date_local.includes(lastYeardate)
      }

    }
    else {
      return item
    }

  })


  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      <InputSearch setSearchName={setSearchName}></InputSearch>
      <SelectSearch setSearchSelect={setSearchSelect}></SelectSearch>
      <Row gutter={[16, 16]}>

        {
          searchdata?.slice(0, 20).map((item: any) => {
            return (

              <Col span={6}><Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.links.mission_patch} />}
              >
                <Meta title={item.details} description={item.rocket.rocket_name} />
              </Card></Col>
            )
          })
        }
      </Row>
      {searchdata?.length === 0 && <h1>No matching data.</h1>}

    </div>
  );
}

export default App;


//state folder er vitor action-creators->index.js
// export const depostiMoney = () => {
//   return (dispatch) => {
//     dispatch({
//       type: 'deposit',
//       payload: amonut
//     })
//   }
// }
// export const withdrawMoney = () => {
//   return (dispatch) => {
//     dispatch({
//       type: 'withdraw',
//       payload: amonut
//     })
//   }
// }

// //state folder er vitor reducer->amountReducer.js
// const reducer=(state=0,action)=>{
//   if(action.type==='deposit'){
//     return state +action.payload
//   }else if(action.type==='withdraw'){
//     return state -action.payload
//   }else{
//     return state
//   }
// }

// export default reducer;
// // //state folder er vitor reducer->index.js
// //combine kortase,,amount reducer import kortase
// import {combineReducers} from 'redux';
// import amountReducer from './amountReducer';
// import { Provider } from 'react-redux';

// const reducers=combineReducers({
//   amount:amountReducer
// })

// export default reducers
// //state>index.js
// export *as actionCreator from "./action-creators/index"

// //store


// //root file e 
// <Provider store={store}></Provider>

// //useSelector--eta #77 class no