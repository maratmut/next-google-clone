import Header from '@/components/Header'
import React from 'react'
import {getProviders, signIn} from 'next-auth/react'

export default function signin({providers}) {
  return (
    <>
        <Header />
        <div className='mt-40'>
            {Object.values(providers).map(provider => (
                <div key={provider.name} className='flex flex-col items-center'>
                    <img className='w-52 object-cover' src="https://free-png.ru/wp-content/uploads/2020/11/21-215328_-google-png-animated-logos-f94db687.png" width={400} alt="google" />
                    <p className='text-sm italic my-10 text-center'>This website is created for learning purposes</p>
                    <button className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500' onClick={() => signIn(provider.id, {callbackUrl: '/'})}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
       props: {providers}, 
    }
}
