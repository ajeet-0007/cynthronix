import {React, useEffect} from 'react'
import ContactForm from '../Contact-Form/ContactForm'
import Footer from '../Footer/Footer'
import FooterSocialMedia from '../Footer-Social-Media/FooterSocialMedia'

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

  return (
    <div><ContactForm></ContactForm>
    <Footer></Footer>
    <FooterSocialMedia></FooterSocialMedia></div>
  )
}

export default ContactUs