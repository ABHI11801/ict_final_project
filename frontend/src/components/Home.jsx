import React from 'react'
import Navbar from './Navbar'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div style={{ padding: "5vw 5vw" }}>
            <Grid container spacing={2}>
                {data.map((dat, id) => (
                    <Grid item key={id} md={4}>
                        <Card sx={{padding:"1vw",height:"100%",display:"flex",flexDirection:"column"}}>
                            <CardMedia component="img" height="300" image={dat.img_url} sx={{objectFit: "cover"}} />
                            <CardContent>
                                <Typography variant='h4'>{dat.title}</Typography>
                                <Typography variant='body3'>{dat.content}</Typography>
                            </CardContent>
                            <div style={{marginTop:"auto"}}>
                                <Button variant='contained' sx={{backgroundColor:"rgb(117, 8, 195)"}}>DELETE</Button>
                                <Button variant='contained' sx={{backgroundColor:"rgb(117, 8, 195)",marginLeft:"1vw"}}>UPDATE</Button>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Home