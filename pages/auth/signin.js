import React from 'react'
import Header from '../../components/Header'
import {getProviders} from 'next-auth/react'

const signIn = ({providers}) => {
  return (
    <>
      <Header />
      <div className="">
    {Object.values(providers).map((provider,index) => {
        return (
            <div key={`${index}-${provider}`} className="">
              <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt ="goole"/>
              <p>This website is created for learning purposes</p>
              <button>Sign in with {provider.name}</button>
            </div>
        )
    })}
      </div>
    </>
  )
}

export default signIn


export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props : {providers}
    }
}
