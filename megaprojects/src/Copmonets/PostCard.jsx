import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div style={{ width: '100%', backgroundColor: '#f3f4f6', borderRadius: '0.75rem', padding: '1rem' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                style={{ borderRadius: '0.75rem' }} />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
