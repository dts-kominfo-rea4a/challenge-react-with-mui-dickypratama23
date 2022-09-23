// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    TextField
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";

const ContactForm = ({AddContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        photo: ""
    })

    const onNameChangeHandler = (event) => {
        setNewContact((state) => ({
            ...state,
            name: event.target.value
        }));
    };

    const onPhoneChangeHandler = (event) => {
        setNewContact((state) => ({
            ...state,
            phone: event.target.value
        }));
    }

    const onEmailChangeHandler = (event) => {
        setNewContact((state) => ({
            ...state,
            email: event.target.value
        }));
    }

    const onPhotoChangeHandler = (event) => {
        setNewContact((state) => ({
            ...state,
            photo: event.target.value
        }));
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        AddContact(newContact);
        event.target.reset();
    }

    return (
        <Card
            sx={{minWidth: 500, height: 'fit-content'}}
            component={"form"}
            onSubmit={onSubmitHandler}
        >
            <CardContent>
                <Box sx={{display: 'grid', rowGap: 2}}>
                    <TextField
                        required
                        sx={{width: '100%'}}
                        size="small"
                        label="Name"
                        variant="filled"
                        onChange={onNameChangeHandler}
                    />
                    <TextField
                        required
                        sx={{width: '100%'}}
                        size="small"
                        label="Phone"
                        variant="filled"
                        onChange={onPhoneChangeHandler}
                    />
                    <TextField
                        required
                        sx={{width: '100%'}}
                        size="small"
                        label="Email"
                        variant="filled"
                        onChange={onEmailChangeHandler}
                    />
                    <TextField
                        required
                        sx={{width: '100%'}}
                        size="small"
                        label="Photo URL"
                        variant="filled"
                        onChange={onPhotoChangeHandler}
                    />
                </Box>
            </CardContent>
            <CardActions sx={{
                // marginLeft: 1,
                marginBottom: 1
            }}>
                <Button variant="contained" startIcon={<AddIcon/>} type={"submit"} fullWidth>
                    Add New Contact
                </Button>
            </CardActions>
        </Card>
    );
}

export default ContactForm;