/*
* @Author: illuSioN4ng
* @Date:   2017-11-07 13:02:34
* @Last Modified by:   illuSioN4ng
* @Last Modified time: 2017-11-07 14:52:23
*/
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter