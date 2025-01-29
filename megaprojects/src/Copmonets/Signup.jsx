import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ margin: 'auto', width: '100%', maxWidth: '600px', backgroundColor: '#f3f4f6', borderRadius: '0.75rem', padding: '2.5rem', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                <span style={{ display: 'inline-block', width: '100%', maxWidth: '100px' }}>
                    <Logo width="100%" />
                </span>
            </div>
            <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', lineHeight: '2rem' }}>Sign up to create account</h2>
            <p style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.6)' }}>
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    style={{ fontWeight: '500', color: '#3b82f6', transition: 'all 0.2s', textDecoration: 'underline' }}
                >
                    Sign In
                </Link>
            </p>
            {error && <p style={{ color: '#dc2626', marginTop: '2rem', textAlign: 'center' }}>{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div style={{ marginTop: '1.25rem' }}>
                    <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
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
                    <Button type="submit" style={{ width: '100%' }}>
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Signup