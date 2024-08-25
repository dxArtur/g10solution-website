'use client'
import { useEffect, useRef, useState } from "react"
import nodemailer from "nodemailer"
import Link from "next/link"
import ServicePage from "./pages/servicePage"
import SuportPage from "./pages/suportPage"
import PricingPage from "./pages/pricingPage"
import ContactFormPage from "./pages/contactFormPage"
import HomePage from "./pages/homePage"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import ServicesPage from "./pages/servicePage"




export default function Home() {


  ///lógica para verificar se o elemento esta sendo observado na tela inicial e gerar a animação 


  
/*   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [hasSend, setHasSend] = useState(false)

  const handleSumit = async (e) => {

    const transporter = nodemailer.createTransport()
    const mailOptions = {
      from: email,
      to: "comercial@g10solution.com.br",
      name,
      subject,
      message,
    }

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log('error')
      } else {
        console.log('sucess')
      }
    })
  } */

  return (
    <main className="">

      <section className="bg-slate-200 min-h-screen flex flex flex-col justify-start items-center ">
        <Navbar/>
        <HomePage/>
        <PricingPage/>
        <ServicePage/>
        <SuportPage/> 
        <ContactFormPage/>
        <Footer/>
      </section>

      {/* <section id="services" className="bg-slate-200 text-zinc-950 min-h-screen flex flex-col justify-start items-center ">
        <PricingPage></PricingPage>
      </section>

      <section id="" className="bg-slate-200 text-zinc-950 min-h-screen flex flex-col justify-start items-center ">
        {/* <ServicesPage></ServicesPage> 
      </section>

      <section id="contact" className="bg-blue-950 text-zinc-950 min-h-screen flex flex-col justify-start items-center outline-none">
        <ContactFormPage></ContactFormPage>
      </section>
 */}

  
    </main>
  )
}
