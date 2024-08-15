import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Container maxWidth="lg">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mi Sitio Web
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/blog">Blog</Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
