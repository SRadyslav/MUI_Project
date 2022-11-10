import React from 'react'
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography,
  List, ListItem, Divider, ListItemText, ListItemAvatar } from '@mui/material'

  const avatarImg = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmimiyPZHDYrAFYJfHvVTbNzf015tGj3nEjKdL-y4Gbg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYj1-e9RoebVZQw012E4a7R3iqr2N6IkYZvK10Xo-AA&s",
    "https://live.staticflickr.com/1910/43420152810_24eca2488e_b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCY7d7wCMw8IzAr50TypYLPzXzW3BNS-QlmA&usqp=CAU"
  ]
const itemData = [
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tE9gLC6p292KMSWasGh3ajeqDsCgqR-kzw&usqp=CAU", title: "Run" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXhpUOQP4LrVpl1jjT2EYRcYLKdHp2-3hiA&usqp=CAU", title: "Black" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UMA7UwvVFmMIE7fMY2_Z3sep5UBMpmnroQ&usqp=CAU", title: "Cow" },
]

export const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed" width={300}>

        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={avatarImg[0]} />
          <Avatar alt="Travis Howard" src={avatarImg[1]} />
          <Avatar alt="Cindy Baker" src={avatarImg[2]} />
          <Avatar alt="Agnes Walker" src={avatarImg[3]} />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2} >
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5} >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2} >
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={avatarImg[3]} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={avatarImg[0]} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={avatarImg[1]} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
