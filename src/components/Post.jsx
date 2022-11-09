import React from 'react'
import { Card, CardHeader, IconButton, CardMedia, CardContent, Avatar, Typography, CardActions, Checkbox } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export const Post = () => {
    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        J
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Jack"
                subheader="November 9, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://media-cdn.greatbritishchefs.com/media/ifkkiv0g/img64614.jpg?mode=crop&width=1426&height=713&center=0.54269972451790633608815427,0.5343371281674623576937201616"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
