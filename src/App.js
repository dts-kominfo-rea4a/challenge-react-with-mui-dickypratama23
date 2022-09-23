import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Contact from './components/Contact'

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import {useState} from "react";
import {List} from "@mui/material";

const App = () => {
    // Masukkan Header dan lakukan map untuk Contact ke dalam div App
    // untuk membuat daftar kontak bisa menggunakan MUI list
    // https://mui.com/material-ui/react-list/#folder-list

    // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
    // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
    const [contacts, setContacts] = useState(contactsJSON)
    const onAddContactHandler = (data) => {
        setContacts(state => [...state, data])
    }

    return (
        <div className="App">
            <Header/>
            <div className="contact-container">
                <ContactForm AddContact={onAddContactHandler}/>
                <div>
                    <List dense={true} sx={{minWidth: 500, bgcolor: 'background.paper', height: 'fit-content'}}>
                        {
                            contacts.map((contact, index) => (
                                <Contact key={index} data={contact}/>
                            ))
                        }
                    </List>
                </div>
            </div>
        </div>
    );
};

export default App;
