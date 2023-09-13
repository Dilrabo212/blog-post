import React from 'react'
import sty from './style.module.scss'
export default function SaveBTN() {
    return (
        <div>
            <button className={sty.btn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V20L12 17.5L7 20V6Z" fill="#1B5BF7" />
                </svg>
            </button>
        </div>
    )
}
