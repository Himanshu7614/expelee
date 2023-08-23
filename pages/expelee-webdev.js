import React from 'react'
import Webdevbanner from '../components/expelee-webdev'
import Records from '../components/Records'
import Business from '../components/expelee-webdev/business'
import Webservices from '../components/expelee-webdev/webservices'
import Clientwebdev from '../components/expelee-webdev/clientwebdev'
import Webdevpricing from '../components/expelee-webdev/webdevpricing'
import Policywebdev from '../components/expelee-webdev/policywebdev'
import Contactwebdev from '../components/expelee-webdev/contactwebdev'
import Contact from './contact'

function expeleewebdev() {
  return (
    <div>
        <Webdevbanner />
        <Records />
        <Business />
        <Webservices />
        <Clientwebdev />
        <Webdevpricing />
        <Policywebdev />
        <Contactwebdev />
        {/* <Contact /> */}
    </div>
  )
}

export default expeleewebdev