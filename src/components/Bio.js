import React from 'react'
import styles from './Bio.module.css'

function Bio(props) {
  let photoURL = '/assets/BTC.png'

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        This blog will be a series of posts on Web3 by
        <br />
        <a href="https://twitter.com/0xSaiK">0xSaiK</a>
      </p>
    </div>
  )
}

export default Bio
