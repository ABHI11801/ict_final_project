import React from 'react'
import Navbar from './Navbar'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
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
    const deleteData = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this data?")
        if (!confirmDelete) return
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const updateData = (id) => {
        axios.get(`http://localhost:3001/getById/${id}`)
            .then((res) => {
                navigate('/add', { state: { data: res.data } });
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div style={{ padding: "5vw 5vw" }}>
            <Grid container spacing={2}>
                {data.map((dat, id) => (
                    <Grid item key={id} md={4} sx={{ marginBottom: "2vw" }}>
                        <Card sx={{ padding: "1vw", height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardMedia component="img" height="300" image={dat.img_url} sx={{ objectFit: "cover" }} />
                            <CardContent>
                                <Typography variant='h4'>{dat.title}</Typography>
                                <Typography variant='body3'>{dat.content}</Typography>
                            </CardContent>
                            <div style={{ marginTop: "auto" }}>
                                <Button variant='contained' sx={{ backgroundColor: "rgb(117, 8, 195)" }} onClick={() => { deleteData(dat._id) }}>DELETE</Button>
                                <Button variant='contained' sx={{ backgroundColor: "rgb(117, 8, 195)", marginLeft: "1vw" }} onClick={() => { updateData(dat._id) }}>UPDATE</Button>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Home