import React from 'react'
import ContactFooterStyles from "./ContactFooter.module.css"

const ContactFooter = () => {
  return (
    <>
    <section className={ContactFooterStyles.ContactFooter}>
        <h3 className={ContactFooterStyles.Connect}>Connect with me</h3>
        <div className={ContactFooterStyles.Socialicons}>
          <a href="https://github.com/HARIP9080" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/harip-a-311183228" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/Cse032?t=SVN_LWRDtZBYba4N6B-Lxw&s=09" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="mailto:aarif2001as@gmail.com">
          <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className={ContactFooterStyles.contacts}>
          <div className={ContactFooterStyles.mobile}>
            <a href="tel:+919080295168">
              <i className="fa-solid fa-phone"></i>
              <span>+91 9080295168</span>
            </a>
          </div>
          <div className={ContactFooterStyles.email}>
            <a href="mailto: ram.sanjay.techie@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              <span>aarif2001as@gmail.com</span>
            </a>
          </div>
        </div>
    </section>
        <div className={ContactFooterStyles.copyrights}>
          <p>@Harip</p>
        </div>
        </>
  )
}

export default ContactFooter