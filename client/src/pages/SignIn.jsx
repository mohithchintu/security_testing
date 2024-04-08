import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handlesignin() {
        console.log(email);
    }
    return (
        <div className='grow flex items-center justify-center'>
            <div className='mb-32 border py-6 px-4 border-black rounded-2xl'>
                <h1 className='text-4xl text-center mb-6'>Sign In</h1>
                <form className='max-w-mb' onSubmit={handlesignin}>
                    <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}
                        className='w-full border border-gray-600 my-1 py-2 px-3 rounded-2xl'
                    />
                    <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                        className='w-full border border-gray-600 my-1 py-2 px-3 rounded-2xl'
                    />
                    <button className='w-full border bg-gray-500 my-1 py-2 px-3 rounded-2xl text-white'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
