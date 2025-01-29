import React from 'react'

const Container = ({children}) => {
return (
    <div style={{ width: '100%', maxWidth: '112rem', margin: '0 auto', padding: '0 1rem' }}>
        {children}
    </div>
)
}

export default Container