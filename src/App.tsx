import React from 'react';
import './App.css';
import { NameChanger } from './NameChanger';
import { NameDisplay } from './NameDisplay';
import { ColorChanger } from './ColorChanger';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

export interface IState {
  name: string;
  hairColor: string;
}

const initialState: IState = {
  name: 'moshe',
  hairColor: 'brown'

};

export interface IAction {
  type: string;
  payload?: any;
}

const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      return {
        ...state,
        name: action.payload.name,
      }
    }
    case 'CHANGE_COLOR': {
      return {
        ...state,
        hairColor: action.payload.color,
      }
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h5>The Amazing User App</h5>
          <NameChanger/>
          <NameDisplay/>
          <ColorChanger />          
        </div>
      </Provider>
    );
  }
}

export default App;
