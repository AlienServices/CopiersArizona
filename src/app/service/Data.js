"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../service.module.css'

const Service = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { username, password })
  }

  const handleTextRequest = () => {
    // Handle text request logic here
    const phone = '(801) 261-0510'
    window.location.href = `sms:${phone.replace(/\D/g, '')}`
  }

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.title}>Service Requests</div>
        
        <div className={styles.contentWrapper}>
          {/* Existing Customers Section */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Existing Customers</div>
            
            <div className={styles.stickerNote}>
              See the Sticker on your copier
            </div>
            
            <div className={styles.loginSection}>
              <div className={styles.loginTitle}>Log in</div>
              <form onSubmit={handleLogin} className={styles.loginForm}>
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={styles.loginButton}>
                  Log In
                </button>
              </form>
            </div>
            
            <div className={styles.callNote}>
              If you don't have your log in you can call us directly.
            </div>
          </div>

          {/* New Customers Section */}
          <div className={styles.section}>
            <div className={styles.sectionTitle}>New Customers</div>
            <div className={styles.description}>
              For Businesses that do not have a copier on contract with us.
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className={styles.contactOptions}>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>text a Request</div>
            <button onClick={handleTextRequest} className={styles.contactButton}>
              Text Us
            </button>
          </div>
          
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>call Us</div>
            <div className={styles.phoneDisplay}>(801) 261-0510</div>
            <a href="tel:8012610510" className={styles.callLink}>
              Call Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Service

