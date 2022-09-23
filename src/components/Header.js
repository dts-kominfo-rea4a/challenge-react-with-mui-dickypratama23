// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import './Header.css'
// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
    return (
        <>
            <h2>Call a Friend</h2>
            <h4>Your friendly contact app</h4>
        </>
    );
};

export default Header;
