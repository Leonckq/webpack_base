'use strict'
import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import styles from './index.module.less'
import img from './images/2.gif'
// import './tapable/index'
// import './算法/promise'
import './算法/index'
// import './dom_diff'
export default class Jsx extends PureComponent {
  render() {
    return (
      <div className={styles['text']}>
        {/* <h1 className="textH1">哈哈1ew23</h1> */}
        <img height="40" src={img} />
      </div>
    )
  }
}

ReactDom.render(
  <Jsx />,
  document.getElementById('root')
)