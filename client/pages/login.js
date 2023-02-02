
import React ,{useState} from 'react';
import Script from 'next/script';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {Container, Flex, Box, Heading, Text, Input,Button, Center,FormControl, FormLabel, Select, Textarea, useToast} from '@chakra-ui/react'
import axios from 'axios';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const login = () => {
	const router = useRouter()
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

 	const handleLogin = async (event) => {
        event.preventDefault();
        axios.post(
            `http://localhost:8000/api/users/login`,
            {
            email: email,
            password: password,
            },
            {
            withCredentials: true,
            }
        )
        .then((res) => {
          if(res.data.errors) {
            console.log(res.data.errors)
        }
        else {
            console.log(res.data)
            router.push('/dashboard')
        }
        })
        .catch((err) => {
            console.log(err);
            setErrorMessage(err);
        });
    }


  return (
	<>
	
	
	<Flex h="100vh" align="center" justify="center">
	    <Box p={20} border="2px solid black" align="center" justify="center">                         
                <Heading fontSize="2xl">Sign In</Heading>           
                    <form onSubmit={handleLogin}>
                        <Input mt={10}
                            type="text"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />      
                        <Input mt={10}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button mt={10} type="submit">Login</Button>  
						<Button mt={10} type="submit"><Link href="/signup">Signup</Link></Button>  
						<FacebookLoginButton onClick={() => alert("Hello")} />
						<GoogleLoginButton onClick={() => alert("Hello")} />
                    </form>
				</Box>	

					
	</Flex>
	</>
  )
}

export default login
