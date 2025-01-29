import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"





const Login = () => {

     const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
  
     const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    
    <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%' 
}}>
    <div style={{ 
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        maxWidth: '32rem',
        backgroundColor: '#f3f4f6',
        borderRadius: '1rem',
        padding: '2.5rem',
        border: '1px solid rgba(0, 0, 0, 0.1)'
    }}>
        <div style={{ 
            marginBottom: '0.5rem', 
            display: 'flex', 
            justifyContent: 'center' 
        }}>
            <span style={{ 
                display: 'inline-block', 
                width: '100%', 
                maxWidth: '100px' 
            }}>
                <Logo width="100%" />
            </span>
        </div>
        
        <h2 style={{ 
            textAlign: 'center', 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            lineHeight: '1.25' 
        }}>
            Sign in to your account
        </h2>
        
        <p style={{ 
            marginTop: '0.5rem',
            textAlign: 'center',
            fontSize: '1rem',
            color: 'rgba(0, 0, 0, 0.6)'
        }}>
            Don't have any account?&nbsp;
            <Link
                to="/signup"
                style={{ 
                    fontWeight: '500',
                    color: '#3B82F6', // Assuming primary color is blue-500
                    transition: 'all 0.2s',
                    textDecoration: 'underline' 
                }}
            >
                Sign Up
            </Link>
        </p>
        
        {error && <p style={{ 
            color: '#dc2626',
            marginTop: '2rem',
            textAlign: 'center' 
        }}>
            {error}
        </p>}

        <form onSubmit={handleSubmit(login)} style={{ marginTop: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => 
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        }
                    })}
                />
                <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                />
                <Button
                    type="submit"
                    style={{ width: '100%' }}
                >
                    Sign in
                </Button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login