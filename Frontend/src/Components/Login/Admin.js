import React, { useState , useEffect} from 'react';
import { TextField, Button, Container, Typography, Box, Link, Alert } from '@mui/material';
import { Link as RouterLink ,useNavigate} from "react-router-dom";
import '../../Assests/Admin.css'; 

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); 
  const navigate = useNavigate();

  const users = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
    { id: 3, email: 'user3@example.com', password: 'password3' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(user => user.email === email && user.password === password);
    console.log('Entered Email:', email);
    console.log('Entered Password:', password);
    console.log('Matching User:', user);
    if (user) {
      setShowSuccess(true); 
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    if (showSuccess) {
      navigate('/Analytics');  // Navigate to Analytics page
    }
  }, [showSuccess, navigate]);

  return (
    <div className='lwholediv'>
    <div className="mainadminlogin">
      <div className='lleftadminlogin'>
      <img src="https://ksp.karnataka.gov.in/frontend/opt1/images/ksp_icons/ptckal.jpg" alt="Admin Image" />
      </div>
      <div className='lrightadminlogin'>
        <Container component="main"  className='image-container img'>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: '#093637' }}>
              Admin Login
            </Typography>
            {showSuccess && ( 
              <Alert severity="success">
                Login Successfully!!!
              </Alert>
            )}
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ backgroundColor: '#f3e5f5' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ backgroundColor: '#f3e5f5' }}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#093637',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#44A08D',
                  },
                  '&:focus': {
                    backgroundColor: '#44A08D',
                  },
                }}
                onClick={handleLogin}
              >
                 Login
              </Button>
              <Link href="#" variant="body2" sx={{ mt: 3, mb: 2, color: '#093637' }}>
                Forgot Password?<br></br>
              </Link>
              <Link
                component={RouterLink}
                to="/"
                variant="body2"
                sx={{ mt: 3, mb: 2, color: '#093637' }}
              >
                Login as User
              </Link>
              <br/><br/><br/><br/>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
    </div>
  );
};

export default Admin;
