import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const globalState = {
  navOpen: false,
  listMahasiswa: [],
  mahasiswaSudahLoad: false
}


//Reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === 'NAV_OPEN'){
      return{
          ...state,
          navOpen: !state.navOpen
      }
  }
  if(action.type === 'LOADING_MAHASISWA'){
      return{
          ...state,
          mahasiswaSudahLoad: true
      }
  }
  return state;
}


//store
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
