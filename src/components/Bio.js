import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        This blog will be a series of posts on Web3 by
        <br />
        <a href="https://twitter.com/0xSaiK">0xSaiK</a>.
       x
      </p>
    </div>
  )
}

export default Bio
