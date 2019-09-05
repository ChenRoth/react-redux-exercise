import React from 'react';
import './App.css';
import { NameChanger } from './NameChanger';
import { NameDisplay } from './NameDisplay';
import { ColorChanger } from './ColorChanger';

export interface IState {
  name: string;
  hairColor: string;
}

export class App extends React.Component<any, IState> {
  state = {
    name: 'chen',
    hairColor: 'brown',
  };
  render() {
    const { name, hairColor } = this.state;
    return (      
        <div className="App">
          <h5>The Amazing User App</h5>
          <NameChanger
            name={name}
            onChange={name => this.setState({
              name,
            })} />
          <NameDisplay name={name} />
          <ColorChanger color={hairColor} onChange={hairColor => this.setState({
            hairColor,
          })}
          />
          <div>hair color: {hairColor}</div>
        </div>
    );
  }
}

export default App;
