'use strict'
import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import styles from './index.module.less'
import img from './images/2.gif'
import './tapable/index'
export default class Jsx extends PureComponent {
  render() {
    return (
      <div className={styles['text']}>
        <h1 className="textH1">哈哈123</h1>
        <img src={img} />
      </div>
    )
  }
}

ReactDom.render(
  <Jsx />,
  document.getElementById('root')
)