import React from 'react'
import Link from 'next/link'

const ChatBanner = () => {
  return (
    <section className="chat-banner style-9">
      <div className="container">
        <div className="content text-center wow zoomIn">
          <div className="section-head text-center style-9">
            <h6 className="text-white"> sync by app </h6>
            <h2 className="text-white"> Your Favorite Hosting platform Estifix Is <br /> One Click Away </h2>
            <div className="btns mt-40">
              <Link href="/page-contact-app" className="butn bg-darkBlue2 border-darkBlue2 border-2 border  text-white rounded-3">
                <span> Get In Touch </span>
              </Link>
              <Link href="/page-contact-app" className="butn text-white border-2 border-white border rounded-3 ms-3">
                <span> Learn More </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/chat_back9_icons.png" alt="" className="img_back slide_up_down" />
    </section>
  )
}

export default ChatBanner