import React from 'react'
import sty from './style.module.scss'

export default function FollowBtn({ children }) {
  return (
    <div>
      <button className={sty.btn}>Follow</button>
      {/* <button className={sty.btn}>{children}</button> */}
    </div>
  )
}
