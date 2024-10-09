import React from 'react'
import GoogleSignInButton from './google-signin'
import GithubSignInButton from './github-signin'

export default function LoginForm() {
    return (
        <div className='space-y-4'>
            <GoogleSignInButton />
            <GithubSignInButton />
        </div>
    )
}
