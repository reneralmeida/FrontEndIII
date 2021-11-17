
import {Component} from 'react';
import Increment from './Components/Increment';
import Toggler from './Components/Toggler';
import RemoveItemFromList from './Components/RemoveItemFromList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
      <Increment />
      <Toggler />
      <RemoveItemFromList />
      </>
    )
  }
}
