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
                <Link href={'/product'}>
                  <button 
                    className={styles.buttonBlue}
                    onClick={() => {
                      localStorage.setItem('Model', 'Lexmark XC8355')
                      localStorage.setItem('Image', 'XC8355.jpg')
                      localStorage.setItem('timeOut', '7')
                      localStorage.setItem('type', 'lexmark')
                      localStorage.setItem('PagesPerMinute', '35')
                      localStorage.setItem('modelNumber', 'XC8355')
                      localStorage.setItem('paperSize', '8.5 x 14')
                      localStorage.setItem('description', 'The Lexmark XC8355 is a reliable multifunction printer designed for small to medium-sized offices. It offers excellent print quality and efficient performance.')
                      localStorage.setItem('brand', 'lexmark')
                      localStorage.setItem('ScanSpeed', '35')
                    }}
                  >
                    See Details
                  </button>
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
                <Link href={'/product'}>
                  <button 
                    className={styles.buttonBlue}
                    onClick={() => {
                      localStorage.setItem('Model', 'Lexmark XC9655')
                      localStorage.setItem('Image', '9655.svg')
                      localStorage.setItem('timeOut', '6')
                      localStorage.setItem('type', 'lexmark')
                      localStorage.setItem('PagesPerMinute', '65')
                      localStorage.setItem('modelNumber', 'XC9655')
                      localStorage.setItem('paperSize', '11 x 17')
                      localStorage.setItem('description', 'The Lexmark XC9655 is a high-performance multifunction printer perfect for larger offices. It delivers fast printing speeds and handles large paper sizes with ease.')
                      localStorage.setItem('brand', 'lexmark')
                      localStorage.setItem('ScanSpeed', '65')
                    }}
                  >
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.productCategoryBox}>
            <div className={styles.productCardContent}>
              <div className={styles.productCardTitle}>Lexmark XM3142</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XM3142' src={'/XM3142.png'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/product'}>
                  <button 
                    className={styles.buttonBlue}
                    onClick={() => {
                      localStorage.setItem('Model', 'Lexmark XM3142')
                      localStorage.setItem('Image', 'XM3142.png')
                      localStorage.setItem('timeOut', '7')
                      localStorage.setItem('type', 'lexmark')
                      localStorage.setItem('PagesPerMinute', '42')
                      localStorage.setItem('modelNumber', 'XM3142')
                      localStorage.setItem('paperSize', '8.5 x 14')
                      localStorage.setItem('description', 'The Lexmark XM3142 is a versatile multifunction printer that combines reliability with advanced features. Ideal for busy office environments.')
                      localStorage.setItem('brand', 'lexmark')
                      localStorage.setItem('ScanSpeed', '42')
                    }}
                  >
                    See Details
                  </button>
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
                <Link href={'/product'}>
                  <button 
                    className={styles.buttonBlue}
                    onClick={() => {
                      localStorage.setItem('Model', 'Lexmark XC9525')
                      localStorage.setItem('Image', '9525.webp')
                      localStorage.setItem('timeOut', '6')
                      localStorage.setItem('type', 'lexmark')
                      localStorage.setItem('PagesPerMinute', '52')
                      localStorage.setItem('modelNumber', 'XC9525')
                      localStorage.setItem('paperSize', '11 x 17')
                      localStorage.setItem('description', 'The Lexmark XC9525 offers exceptional performance for medium to large offices. It provides fast printing and scanning capabilities with excellent reliability.')
                      localStorage.setItem('brand', 'lexmark')
                      localStorage.setItem('ScanSpeed', '52')
                    }}
                  >
                    See Details
                  </button>
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
              <div className={styles.productCardTitle}>Lexmark XC4352</div>
              <div className={styles.productCardImageWrapper}>
                <Image alt='Lexmark XC4352' src={'/XC4352.jpg'} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.productCardButtonContainer}>
                <Link href={'/product'}>
                  <button 
                    className={styles.buttonBlue}
                    onClick={() => {
                      localStorage.setItem('Model', 'Lexmark XC4352')
                      localStorage.setItem('Image', 'XC4352.jpg')
                      localStorage.setItem('timeOut', '7')
                      localStorage.setItem('type', 'lexmark')
                      localStorage.setItem('PagesPerMinute', '52')
                      localStorage.setItem('modelNumber', 'XC4352')
                      localStorage.setItem('paperSize', '8.5 x 14')
                      localStorage.setItem('description', 'The Lexmark XC4352 is a dependable multifunction printer designed for consistent performance. Perfect for offices that need reliable printing solutions.')
                      localStorage.setItem('brand', 'lexmark')
                      localStorage.setItem('ScanSpeed', '52')
                    }}
                  >
                    See Details
                  </button>
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
                <Link href={'/product'}>
                  <button 
                    className={styles.buttonBlue}
                    onClick={() => {
                      localStorage.setItem('Model', 'Lexmark XM1342')
                      localStorage.setItem('Image', 'XM1342.webp')
                      localStorage.setItem('timeOut', '7')
                      localStorage.setItem('type', 'lexmark')
                      localStorage.setItem('PagesPerMinute', '34')
                      localStorage.setItem('modelNumber', 'XM1342')
                      localStorage.setItem('paperSize', '8.5 x 14')
                      localStorage.setItem('description', 'The Lexmark XM1342 is a compact and efficient multifunction printer. It offers reliable performance in a space-saving design.')
                      localStorage.setItem('brand', 'lexmark')
                      localStorage.setItem('ScanSpeed', '34')
                    }}
                  >
                    See Details
                  </button>
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
                <Link href={'/product'}>
                  <button 
                    className={styles.buttonBlue}
                    onClick={() => {
                      localStorage.setItem('Model', 'Lexmark XM3350')
                      localStorage.setItem('Image', 'XM3350.png')
                      localStorage.setItem('timeOut', '7')
                      localStorage.setItem('type', 'lexmark')
                      localStorage.setItem('PagesPerMinute', '35')
                      localStorage.setItem('modelNumber', 'XM3350')
                      localStorage.setItem('paperSize', '8.5 x 14')
                      localStorage.setItem('description', 'The Lexmark XM3350 is a reliable desktop printer that delivers consistent performance. Ideal for small offices and workgroups.')
                      localStorage.setItem('brand', 'lexmark')
                      localStorage.setItem('ScanSpeed', '35')
                    }}
                  >
                    See Details
                  </button>
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
