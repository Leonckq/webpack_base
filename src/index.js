'use strict'
import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import styles from './index.module.less'
import img from './images/2.gif'
// import './tapable/index'
// import './算法/promise'
// import './算法/index'
// import './dom_diff'
import './源码/test'
// export default class Jsx extends PureComponent {
//   // state = {
//   //   index: 0
//   // }

//   constructor(props) {
//     super(props)
//     this.state = {
//       index: 0
//     }
//   }

//   onClick = () => {
//     this.setState({
//       index: this.state.index + 1
//     })
//     this.setState({
//       index: this.state.index + 1
//     })
//     this.setState({
//       index: this.state.index + 1
//     })
//   }

//   render() {
//     const { index } = this.state 
//     console.log('render~', index)
//     return (
//       <div className={styles['text']} onClick={this.onClick}>
//         {/* <h1 className="textH1">哈哈1ew23</h1> */}
//         {/* <img height="40" src={img} /> */}
//         {index}
//       </div>
//     )
//   }
// }


function Jsx () {
  return <>
    <div>123</div>
  </>
}
ReactDom.render(
  <Jsx />,
  document.getElementById('root')
)