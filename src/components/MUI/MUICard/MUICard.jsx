import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styles from './style.module.scss'
import LinesEllipsis from 'react-lines-ellipsis'
export default function MuiCard({ el }) {

    return (
        <Card
            className={styles.card}
        >
            <CardActionArea className={styles.cardBody}>
                <CardMedia
                    className={styles.img}
                    component="img"
                    image={el.img}
                    alt={el.name}
                />
                <CardContent className={styles.section}>
                    <Typography className={styles.viewed}>
                        {el.date} {el.viewed}
                    </Typography>
                    <Typography className={styles.title}>
                        <LinesEllipsis
                            text={el.title}
                            maxLine='4'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
