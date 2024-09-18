import React from 'react'
import Home from './Home'
import Footer from './Footer'
import Card from './Compo/Card'
const App = () => {
  return (
    <>
      <Home />
      <div className=' w-full flex flex-col items-center  lg:grid lg:justify-items-center h-auto gap-10  py-16 md:gap-[40px] lg:py-[160px]'>
        <Card img={"c1.png"} side="true" head={"Grow Together"} content={"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "}/>
        <Card img={"c2.png"} head={"Flowing Conversations"} content={"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."}/>
        <Card img={"c3.png"} side="true" head={"Your Users"} content={"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."} />

      </div>

      <Footer />
    </>
  )
}

export default App