import React from 'react'
import { Link } from "react-router-dom";

 const Header = () =>{
    return (
       <header style={headerStyle}>
        <h1 style={{textDecoration: 'underline'}}>Todo List</h1>
        <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
        )}

       const headerStyle={
            background: '#333',
            color: '#fff',
            padding: '10px',
            textAlign: 'center'
        }

       const linkStyle = {
           color: '#fff',
           textDecoration: 'none'
       }

export default Header;