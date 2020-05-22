import React from "react";
import { AnimatedSection } from '../components/index'
import { right, tweenTransition } from '../animations'
import { Icon, InlineIcon } from '@iconify/react';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import twitterCircleFilled from '@iconify/icons-ant-design/twitter-circle-filled';
import phoneOutlined from '@iconify/icons-ant-design/phone-outlined';
import mailOutlined from '@iconify/icons-ant-design/mail-outlined';




const Contact = () => <>

  <AnimatedSection variants={right} transition={tweenTransition} width={100} height={100}>
    <div className="qa">

      <div className="card2">
        <div className="title">
          <h1>Get in Touch</h1>
        </div>
        <div className="ww">
          <div className="info">
            {/* <div>
              <Icon icon={phoneOutlined} width={30} />
              <p>669498927</p>
            </div> */}
            {/* <div>

            <Icon icon={mailOutlined} width={30} />
            <p>carlosmatilla22@hotmail.es</p>
            </div> */}
          </div>
          <div className="redes">
            {/* <Icon icon={instagramOutlined} width={60} />
            <Icon icon={facebookFilled} width={60} />
            <Icon icon={twitterCircleFilled} width={60} />
            <Icon icon={linkedinFilled} width={60} />
            <Icon icon={githubFilled} width={60} /> */}
          </div>
        </div>


      </div>
      <div className="card">
        <form>
          <label>Name &#38; surname <input placeholder="Who are you?"></input></label>
          <label>Your email <input placeholder="Your email here"></input></label>
          <label>Your number <input placeholder="Your number here"></input></label>
          <label>Your message <textarea placeholder="Message here"></textarea></label>



        </form>
      </div>
    </div>
  </AnimatedSection>

</>

export default Contact