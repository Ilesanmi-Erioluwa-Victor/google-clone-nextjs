import React from 'react'
import Header from '../../components/Header'
import getProviders from "next-auth/react"

const signIn = ({providers}) => {
  return (
    <>
      <Header />
      <div className="">
    {Object.values(providers).map((provider,index) => {
        return (
            <div key={`${index}-${provider}`} className="">
              <img src="https://play.google.com/store/apps/dev?id=5700313618786177705&hl=en_US&gl=US" alt ="goole"/>
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
