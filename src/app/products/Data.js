"use client"
import React, { useRef, useState } from 'react'
// import Header from '../components/Header'
import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import styles from '../products.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const Products = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const router = useRouter()

  const tawkMessengerRef = useRef()

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  const sendEmail = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message,
      number,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    })
  }

  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.line}></div>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      
      {/* Phone Number - Top Right */}
      <div className={styles.phoneTopRight}>
        <div className={styles.phoneLabel}>Phone #</div>
        <div className={styles.phoneNumberDisplay}>(801) 261-0510</div>
      </div>

      {/* Main Products Container */}
      <div className={styles.productsMainContainer}>
        {/* Page Title */}
        <div className={styles.productsTitle}>Products</div>

        {/* Product Categories Grid with Help Section in Center */}
        <div className={styles.productCategoriesGrid}>
          {/* Top Row */}
          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark XC8355</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XC8355' src={'/XC8355.jpg'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/8355'}>
                  <button className={styles.buttonBlue}>See Details</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark XC9655</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XC9655' src={'/9655.svg'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/9655'}>
                  <button className={styles.buttonBlue}>See Details</button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark MX953se</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark MX953se' src={'/MX953se.jpg'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/953se'}>
                  <button className={styles.buttonBlue}>See Details</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Middle-Left */}
          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark XC9525</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XC9525' src={'/9525.webp'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/9525'}>
                  <button className={styles.buttonBlue}>See Details</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Center Help Section */}
          <div className={styles.helpSection}>
            <div className={styles.helpQuestionBox}>
              <div className={styles.helpQuestion}>Which one is right for you?</div>
            </div>
            <div className={styles.helpText}>Let Us Help</div>
            <Link href={'/'}>
              <button className={styles.productSelectorButton}>Product Selector Guide</button>
            </Link>
          </div>

          {/* Bottom-Left */}
          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark XC2335</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XC2335' src={'/XC2335.png'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/2335'}>
                  <button className={styles.buttonBlue}>See Details</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom-Right */}
          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark XM1342</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XM1342' src={'/XM1342.webp'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/1342'}>
                  <button className={styles.buttonBlue}>See Details</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Middle-Right */}
          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark XM3350</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XM3350' src={'/XM3350.png'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/3350'}>
                  <button className={styles.buttonBlue}>See Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Products
