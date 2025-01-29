import React from 'react'
import { Container, Logo, LogoutBtn  } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Header = () => {

    const authStatus = useSelector((state) => state.auth.state)
   
    const navigate = useNavigate()

    const navItems = [
    //     {
    //   name: 'Home',
    //   slug: '/',
    //   active: true
    //     } , {}
     {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
    ]

return (
    <header style={{ padding: '1rem 0', boxShadow: '0 4px 2px -2px gray', backgroundColor: '#6b7280' }}>
        <Container>
            <nav style={{ display: 'flex' }}>
                <div style={{ marginRight: '1rem' }}>
                    <Link to='/'>
                        <Logo width='70px' />
                    </Link>
                </div>
                <ul style={{ display: 'flex', marginLeft: 'auto' }}>
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1.5rem',
                                        transition: 'background-color 0.2s',
                                        borderRadius: '9999px',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer'
                                    }}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = '#bfdbfe')}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
    </header>
)
}

export default Header