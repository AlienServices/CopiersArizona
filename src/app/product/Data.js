"use client"
import React, { useRef, useEffect } from 'react'
import Header from '../components/Header'
import Link from "next/link";
import { Metadata } from 'next'
import Footer from '../components/Footer'
import BreadCrumbs from "../components/Breadcrumbs";
import Image from 'next/image'
import { PatternFormat } from 'react-number-format'
import styles from '../product.module.css'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useState } from 'react'

const Product = () => {
  const router = useRouter()
  const [recaptchaResponse, setRecaptchaResponse] = useState(false)
  const tawkMessengerRef = useRef()
  const [gray, setGray] = useState(true)
  const [grayBottom, setGrayBottom] = useState(true)
  const [brandDescription, setBrandDescription] = useState()
  const [quote, setQuote] = useState(false)
  const [model, setModel] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()
  const [type, setType] = useState()
  const [timeOut, setTimeOut] = useState()
  const [printSpeed, setPrintSpeed] = useState()
  const [paperSize, setpaperSize] = useState()
  const [scanSpeed, setScanSpeed] = useState()
  const [modelNumber, setModelNumber] = useState()
  const [lastBullet, setLastBullet] = useState()
  const [defaultType, setDefaultType] = useState("products")
  const [defaultImage, setDefaultImage] = useState("")
  const [almostLastBullet, setAlmostLastBullet] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  var verifyCallback = function (response) {
    setRecaptchaResponse(response)
    console.log(response)
  }
  const captchaRef = useRef(null)
  
  useEffect(() => {
    const storedModel = localStorage.getItem('Model')
    const photo = localStorage.getItem('Image')
    const time = localStorage.getItem('timeOut')
    const back = localStorage.getItem('type')
    const speed = localStorage.getItem('PagesPerMinute')
    const scan = localStorage.getItem('ScanSpeed')
    const modelNum = localStorage.getItem('modelNumber')
    const paper = localStorage.getItem('paperSize')
    const desc = localStorage.getItem('description')
    
    setModel(storedModel)
    setDefaultImage(photo || '')
    setDefaultType(back || 'products')
    setPrintSpeed(speed)
    setScanSpeed(scan)
    setModelNumber(modelNum)
    setpaperSize(paper)
    setTimeOut(time)
    setDescription(desc)

    // Only Lexmark information
    setBrandDescription(
      'Lexmark, formerly an IBM company, had produced hands down the most reliable machines ever built. Their modular construction ensures the most efficient paper path in the industry. Independent BLI testing proved their top copier models performing with only 1 jam after 1,000,000 copies tested. Their dominant 85% of the market share in pharmaceutical and medical establishments is a testament to their unrivaled reliability'
    )
    setLastBullet(
      'Known for their fast print speeds and efficient performance.'
    )
    setAlmostLastBullet("Durability and reliability: Lexmark copiers are built to withstand heavy use and are known for their reliability, reducing downtime and ensuring consistent performance.")
  }, [])

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" }
  ]
  
  return (
    <div className={styles.main}>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <Header />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className={styles.productContainer}>
        <div className={styles.productMainSection}>
          <div className={styles.productImageSection}>
            <div className={styles.imageWrapper}>
              {defaultImage && <Image src={`/${defaultImage}`} width={400} height={300} alt={model || 'a copier'} className={styles.productImage} />}
            </div>
            <div className={styles.modelText}>
              Model: {modelNumber}
            </div>
          </div>

          <div className={styles.productInfoSection}>
            <div className={styles.productTitle}>{model}</div>
            <div className={styles.aboutSection}>
              <h2 className={styles.aboutHeading}>About</h2>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span className={styles.featureText}>
                    Print speeds at {printSpeed} pages per minute!
                  </span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span className={styles.featureText}>
                    Largest print size is {paperSize} inches
                  </span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span className={styles.featureText}>
                    First page out time is {timeOut} seconds
                  </span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span className={styles.featureText}>
                    Scans are {scanSpeed} sides per minute on the Duplex scanner
                  </span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span className={styles.featureText}>
                    {lastBullet}
                  </span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  <span className={styles.featureText}>
                    {almostLastBullet}
                  </span>
                </div>
              </div>
              <Link href={'/buy'}>
                <button className={styles.quoteButton}>Get A Quote</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.productDescriptionSection}>
          <div className={styles.descriptionParagraph}>{brandDescription}</div>
          <div className={styles.descriptionParagraph}>{description}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product

