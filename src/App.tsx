import React from 'react';
import './App.css';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

function App() {
  return (
    <div className="App">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
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