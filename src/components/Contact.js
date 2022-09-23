// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography
} from '@mui/material'
import {
    Image as ImageIcon,
} from '@mui/icons-material'

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({data}) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={data.name} src={data.photo} sx={{width: 50, height: 50}}/>
            </ListItemAvatar>
            <ListItemText
                sx={{ml: 2}}
            >
                <Typography variant='body'>{data.name}</Typography>
                <Typography variant='body' component="div">{data.phone}</Typography>
                <Typography variant='body' component="div"
                            color="text.secondary">{data.email}</Typography>
            </ListItemText>
        </ListItem>
    );
};

export default Contact;
