import { CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
export default function MuiCard({ data }) {
    console.log(data);
    return (
        <div className={styles.wrap}>
            {
                data?.map((el) => {
                    return (
                        <Link to={`${el.id}`}>
                            <div className={styles.card} key={el.id}>
                                <div className={styles.cardBody}>
                                    <CardMedia
                                        className={styles.img}
                                        component="img"
                                        image={el.image}
                                        alt='post'
                                    />
                                    <CardContent className={styles.section}>
                                        <Typography className={styles.viewed}>
                                            {el.created_at} {el.views}
                                        </Typography>
                                        <Typography className={styles.title}>
                                            <div dangerouslySetInnerHTML={{ __html: el.body }} />
                                        </Typography>
                                    </CardContent>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }</div>
    )
}
