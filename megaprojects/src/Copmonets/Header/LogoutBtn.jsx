import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authslice'

const LogoutBtn = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }

return (
    <button
        style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            transitionDuration: '200ms',
            backgroundColor: 'transparent',
            borderRadius: '9999px',
            cursor: 'pointer'
        }}
        onClick={handleLogout}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ebf8ff'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
        Logout
    </button>
)
}

export default LogoutBtn