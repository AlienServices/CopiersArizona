"use client";
import React, { useRef, useEffect } from "react";
import Header from "./components/Header";
import Head from "next/head";
import Link from "next/link";
// import Footer from "./footer/page";
import Image from "next/image";
import { PatternFormat } from "react-number-format";
import styles from "./page.module.css";
// import { useRouter } from "next/router";
import Footer from './components/Footer'
import ReCAPTCHA from "react-google-recaptcha";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useState } from "react";
import { devIndicators } from "../../next.config";
const Home = () => {
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const tawkMessengerRef = useRef();
  const [gray, setGray] = useState(true);
  const [grayBottom, setGrayBottom] = useState(true);
  // const [copiers, setCopiers] = useState([
  //   { name: "XM9145", style: "11x17", size: "standing" }, { name: "XM7355", style: "Letter and Legal", size: "standing" }, {}, {}
  // ]);
  const [copierChoice, setCopierChoice] = useState()
  const [desktopNumber, setDesktopNumber] = useState(false);
  const [desktopBlack, setDesktopBlack] = useState(false);
  const [desktopColor, setDesktopColor] = useState(false);
  const [desktopEleven, setDesktopEleven] = useState(false);
  const [desktopLegal, setDesktopLegal] = useState(false);
  const [standingNumber, setStandingNumber] = useState(false);
  const [standingBlack, setStandingBlack] = useState(false);
  const [standingColor, setStandingColor] = useState(false);
  const [standingEleven, setStandingEleven] = useState(false);
  const [standingLegal, setStandingLegal] = useState(false);
  const [brandDescription, setBrandDescription] = useState();
  const [quote, setQuote] = useState(false);
  const [model, setModel] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [type, setType] = useState();
  const [timeOut, setTimeOut] = useState();
  const [printSpeed, setPrintSpeed] = useState();
  const [paperSize, setpaperSize] = useState();
  const [modelNumber, setModelNumber] = useState();
  const [lastBullet, setLastBullet] = useState();
  const [almostLastBullet, setAlmostLastBullet] = useState();
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("copierChoice")), "this is parsed info")
    setCopierChoice(JSON.parse(localStorage.getItem("copierChoice")))
  }, [])
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };
  const captchaRef = useRef(null);
  useEffect(() => {
    const storedModel = localStorage.getItem("Model");
    const photo = localStorage.getItem("Image");
    const time = localStorage.getItem("timeOut");
    const back = localStorage.getItem("type");
    const speed = localStorage.getItem("PagesPerMinute");
    const modelNumber = localStorage.getItem("modelNumber");
    const paperSize = localStorage.getItem("paperSize");
    const desc = localStorage.getItem("description");
    setModel(storedModel);
    setImage(photo);
    setType(back);
    setPrintSpeed(speed);
    setModelNumber(modelNumber);
    setpaperSize(paperSize);
    setTimeOut(time);
    setDescription(desc);

    if (localStorage.getItem("brand") === "lexmark") {
      setBrandDescription(
        "Lexmark, formerly an IBM company, had produced hands down the most reliable machines ever built. Their modular construction ensures the most efficient paper path in the industry. Independent BLI testing proved their top copier models performing with only 1 jam after 1,000,000 copies tested. Their dominant 85% of the market share in pharmacuetical and medical establishments is a testament to their unrivaled reliability"
      );
      setLastBullet(
        " Known for their fast print speeds and efficient performance."
      );
      setAlmostLastBullet(
        "Durability and reliability: Lexmark copiers are built to withstand heavy use and are known for their reliability, reducing downtime and ensuring consistent performance."
      );
    } else if (localStorage.getItem("brand") !== "lexmark") {
      setLastBullet(
        "High-quality output: Konica Minolta copiers are known for delivering exceptional print quality with sharp text and vibrant images."
      );
      setBrandDescription(
        "Konica Minolta offers the top color quality output in the industry. These machines are built to last with minimal disruption. With up to 12x18 paper sizes standard, there is nothing your office cannot do with these copiers."
      );
      setAlmostLastBullet(
        "Energy efficiency: Konica Minolta copiers are designed with energy-saving features, helping businesses reduce their environmental footprint and save on energy costs."
      );
    }
  }, []);

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
      <div className={styles.line}></div>
      <div className={styles.flexSomething}>
      <div className={styles.heroRow}>
      <div className={styles.mobileNone} >
          <Image alt={"lexmark 4143"} src={`/manCartoon.png`} width={450} height={300} style={{ marginTop: "32px", marginBottom: "32px" }} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.callUsBox}>Call Us</div>
          <div className={styles.phoneNumberBox}>(801) 261-0510</div>
          </div>
        </div>
        <div className={styles.homeBox}>
          <div className={styles.titleBox}>
            Select your Copier
          </div>
        </div>
        <div className={styles.buttonHome}>
          <button className={styles.buttonBlue}>Copier Selector Guide</button>
        </div>
      </div>
      <div className={styles.reviewSection}>
        <div className={styles.customerTitle}>
          Trusted by Hundreds of{" "}
          <div className={styles.blueSmall}>Happy customers</div>
        </div>
        <div className={styles.rowSpaced}>
          <div className={styles.boxReview}>
            <div className={styles.starRow}>
            <div className={styles.flexCenter}>
                <div>5</div>
                <Image
                  src="star.webp"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.titleSmall2}>
                Jennifer R.
              </div>
              <div className={styles.titleSmall2}>
                Phoenix, AZ
              </div>
            </div>
            <div className={styles.paragraphReview}>
            “Great company! Friendly staff got our office a perfect, new
            Lexmark copier installed in just 2 days."
            </div>
          </div>
          <div className={`${styles.boxReview} ${styles.hideBox}`}>
            <div className={styles.starRow}>
            <div className={styles.flexCenter}>
                <div>5</div>
                <Image
                  src="star.webp"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.titleSmall2}>Mike T.</div>
              <div className={styles.titleSmall2}>Tucson, AZ</div>
            </div>
            <div className={styles.paragraphReview}>
            "Super fast service! Copiers Arizona had a tech here same-day and fixed
            our printer in under an hour."
            </div>
          </div>
          <div className={styles.boxReview}>
            <div className={styles.starRow}>
            <div className={styles.flexCenter}>
                <div>5</div>
                <Image
                  src="star.webp"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.titleSmall2}>Sarah K.</div>
              <div className={styles.titleSmall2}>Mesa, AZ</div>
            </div>
            <div className={styles.paragraphReview}>
            "Love working with Copiers Arizona. Fair prices, reliable machines, and they
            always answer the phone."
            </div>
          </div>
          <div className={styles.boxReview}>
            <div className={styles.starRow}>
            <div className={styles.flexCenter}>
                <div>5</div>
                <Image
                  src="star.webp"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.titleSmall2}>Amanda L.</div>
              <div className={styles.titleSmall2}>Tempe, AZ</div>
            </div>
            <div className={styles.paragraphReview}>
            "Honest, local, and fast. They saved us from a bad contract and set us up with a 
            great copier in just a few days."
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonCenter}>
          <Link
            href={
              "https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9091041,17z/data=!4m8!3m7!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!16s%2Fg%2F1hc90lr04?entry=ttu"
            }
            target={"_blank"}
          >
            <button className={styles.buttonBlue2}>
              See All Google Reviews
            </button>
          </Link>
      </div>
      
      {/* <div className={styles.sectionNormal}>
        <div className={styles.copierContainer}>
          <h1 className={styles.bigTitle}>Lexmark XC 6153</h1>

          <Image alt={"lexmark 4143"} src={`/6153.webp`} width={300} height={250} />
        </div>
        <div className={styles.centerMain}>
          <div className={styles.title}>
            Our Most Reliable Multifunction Copier
            
          </div>
          <div className={styles.bulletPoint}>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>Print speeds at 52 per minute</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>largest Print size is 8.5 in x 14.0 in</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>First page out time is 7 Seconds</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>exceptional print quality with sharp text and vibrant images.</div>
            </div>
          </div>
          <div className={styles.fifty}>
            <Link href={'/6153'}>
              <button className={styles.button}>Lease Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.lineSmall}></div>
      </div>
      <div className={styles.sectionNormal}>
        <div className={styles.copierContainer}>
          <h1 className={styles.bigTitle}>Lexmark XC 8163</h1>

          <Image alt={"lexmark 4143"} src={`/8163.webp`} width={300} height={250} />
        </div>
        <div className={styles.centerMain}>
          <div className={styles.title}>
            Our Most Reliable Multifunction Copier
          </div>
          <div className={styles.bulletPoint}>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>Print speeds at 60 pages per minute</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>largest Print size is  8.5 in x 14.0 in</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>First page out time is 6.5 seconds</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>exceptional print quality with sharp text and vibrant images.</div>
            </div>
          </div>
          <div className={styles.fifty}>
            <Link href={'/8163'}>
              <button className={styles.button}>Lease Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.lineSmall}></div>
      </div>
      <div className={styles.sectionNormal}>
        <div className={styles.copierContainer}>
          <h1 className={styles.bigTitle}>Lexmark XC 9335</h1>

          <Image alt={"lexmark 4143"} src={`/9225.webp`} width={300} height={250} />
        </div>
        <div className={styles.centerMain}>
          <div className={styles.title}>
            Our Most Reliable Multifunction Copier
          </div>
          <div className={styles.bulletPoint}>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>Print speeds at 25 pages per minute</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>largest Print size is 12.6 x 18 in</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>First page out time is 7 seconds</div>
            </div>
            <div className={styles.flexCenter}>
              <Image alt={"lexmark 4143"} src={`/seen.webp`} width={25} height={25} />
              <div>exceptional print quality with sharp text and vibrant images.</div>
            </div>
          </div>
          <div className={styles.fifty}>
            <Link href={'/9335'}>
              <button className={styles.button}>Lease Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.lineSmall}></div>
        </div>
      </div>
      <div className={styles.sectionColumn}>
        <div style={{ padding: "8px" }} className={styles.sentence}>
          Take Our Quiz And See Our Reccomended Copiers For You
        </div>
        <div> Check which options you wanna see!</div>
        <div className={styles.rowButton}>
          <div className={styles.rowNormal}>
            <div className={styles.flexLarge}>
              <div className={styles.twenty}>
                <div className={styles.column}>
                  <div className={styles.smallTitle}>Floor Standing Copiers</div>
                  <input className={styles.inputSingle}
                    onClick={() => {
                      setStandingNumber(!standingNumber)
                    }}
                    type="checkbox"
                  />

                </div>
              </div>

              <div className={styles.centerHor}>
                <div className={styles.smallColumn}>
                  <div>
                    <div className={styles.titleSmal}>Black & white </div>
                    <div className={styles.row}>
                      <input onClick={() => {
                        setStandingBlack(!standingBlack)
                      }}
                        type="checkbox"></input>
                    </div>
                  </div>

                  <div className={styles.line}></div>

                  <div>
                    <div className={styles.titleSmal}>11 x 17  </div>
                    <div className={styles.row}>
                      <input onChange={() => {
                        setStandingEleven(!standingEleven)
                      }} type='checkbox'></input>

                    </div>
                  </div>
                </div>
                <div className={styles.smallColumn}>
                  <div>
                    <div className={styles.titleSmal}>Color </div>
                    <div className={styles.row}>
                      <input onClick={() => {
                        setStandingColor(!standingColor)
                      }} type="checkbox"></input>
                    </div>
                  </div>
                  <div>
                    <div className={styles.titleSmal}>Letter and Legal </div>
                    <div className={styles.row}>
                      <input onClick={() => {
                        setStandingLegal(!standingLegal)
                      }} type="checkbox"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flexLarge}>
              <div className={styles.twenty}>
                <div className={styles.column}>
                  <div className={styles.smallTitle}>Desktop Copiers</div>
                  <input className={styles.inputSingle}
                    onChange={() => {
                      setDesktopNumber(!desktopNumber)
                    }}
                    placeholder="How Many?"
                    type="checkbox"
                  />

                </div>
              </div>
              <div className={styles.centerHor}>
                <div className={styles.smallColumn}>
                  <div>
                    <div className={styles.titleSmal}>Black & white </div>
                    <div className={styles.row}>
                      <input onClick={() => {
                        setDesktopBlack(!desktopBlack)
                      }} type="checkbox"></input>
                    </div>
                  </div>
                  <div>
                    <div className={styles.titleSmal}>Color </div>
                    <div className={styles.row}>
                      <input onClick={() => {
                        setDesktopColor(!desktopColor)
                      }} type="checkbox"></input>
                    </div>
                  </div>
                </div>

                <div className={styles.smallColumn}>
                  <div>
                    <div className={styles.titleSmal}>11 x 17  </div>
                    <div className={styles.row}>
                      <input onClick={() => {
                        setDesktopEleven(!desktopEleven)
                      }} type='checkbox'></input>
                    </div>
                  </div>
                  <div>
                    <div className={styles.titleSmal}>Letter and legal </div>
                    <div className={styles.row}>
                      <input onClick={() => {
                        setDesktopLegal(!desktopLegal)
                      }} type='checkbox'></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.buttonBlueSmall} onClick={() => {
            let result = []

            if (standingNumber === true && standingBlack === true & standingEleven === true) {
              result.push({ Type: "XM9145", Image: "9145.webp", size: "Standing", paper: "11 x 17", color: "Black & White", route: "9145" })
            }
            if (standingNumber === true && standingBlack === true & standingLegal === true) {
              result.push({ Type: "XM7335", Image: "/7355.webp", size: "Standing", paper: "Letter and Legal", color: "Black & White", route: '7335' })
            }
            if (standingNumber === true && standingColor === true & standingLegal === true) {
              result.push({ Type: "XC9335", Image: "9335.webp", size: "Standing", paper: "Letter and Legal", color: "Color", route: '9335' })
            }
            if (standingNumber === true && standingColor === true & standingEleven === true) {
              result.push({ Type: "XC8163", Image: "/8163.webp", size: "Standing", paper: "11 x 17", color: "Color", route: '8163' })
            }
            if (desktopNumber === true && desktopColor === true & desktopLegal === true) {
              result.push({ Type: "XM4140", Image: "/4140.webp", size: "Desktop", paper: "Letter and Legal", color: "Color", route: '4140' })
            }
            if (desktopNumber === true && desktopBlack === true & desktopLegal === true) {
              result.push({ Type: "XC5365", Image: "5365.webp", size: "Desktop", paper: "Letter and Legal", color: "Black & White", route: '5365' })
            }

            setCopierChoice(result)
            console.log(JSON.stringify(result), "this is important info")
            JSON.stringify(localStorage.setItem("copierChoice", JSON.stringify(result)))
          }}>Get Result</button>
        </div>


        {copierChoice ?
          <div className={styles.gridLarge}>
            {copierChoice.map((item) => {
              return (
                <div key={index} className={styles.boxContainerRow}>
                  <div className={styles.boxRow}>
                    <div className={styles.titleMed}>

                    </div>
                    <div>
                      <Image alt={"lexmark xc62152"} src={`${item.Image}`} height={120} width={120} />
                    </div>
                    <div className={styles.titleSmall}>Lexmark {item.Type}</div>
                    <div className={styles.buttonContainer1}>
                      <Link className={styles.aFlex} href={item.route}>
                        <button className={styles.buttonBlue}>See Details</button>
                      </Link>
                    </div>
                    <div className={styles.rowSmall}>
                      <div>* {item.size}</div>
                      <div>* {item.paper}</div>
                    </div>
                    <div>
                      <div>* {item.color}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div> : null}

      </div>
      <div className={styles.centerBox}>
        <div style={{ paddingBottom: "10px" }} className={styles.title}>Our Select Reliable Choices</div>
        <div className={styles.titleSmall}>(Our favorite options)</div>
        <div className={styles.grid}>
          <div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Favorite Black And White option
                </div>
                <div>
                  <Image alt={"lexmark xc62152"} src={"/8163.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC8163</div>
                <div className={styles.buttonContainer1}>
                  <Link className={styles.aFlex} href={"/6152"}>
                    <button className={styles.buttonBlue}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Favorite Desktop Printer
                </div>
                <div>
                  <Image alt={"lexmark xc8160"} src={'/9225.webp'} height={200} width={350} />
                </div>
                <div className={styles.titleSmall}>Lexmark X9335</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/9325"}>
                    <button className={styles.buttonBlue}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite  And White Option
                </div>
                <div>
                  <Image alt={"lexmark xc6152"} src={"/xc6152.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.buttonBlue}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <div className={styles.titleMed}>
                  Our Favorite  And White Option
                </div>
                <div>
                  <Image alt={"lexmark xc6152"} src={"/xc6152.webp"} height={250} width={250} />
                </div>
                <div className={styles.titleSmall}>Lexmark XC6152</div>
                <div className={styles.buttonContainer1}>
                  <Link href={"/6152"}>
                    <button className={styles.buttonBlue}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.centerBoxRow}>
        <div className={styles.container}>
          <h2 className={styles.black}>Get Your free Quote!</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "80%",
              alignItems: "center",
            }}
          >
            <div className={styles.space}>

              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%", margin: "5px" }}

                className={styles.inputSingle}
                placeholder="Full name"
                type="text"
                name=""
                id=""
                required={true}
              onChange={() => {
                setName(event.target.value);
              }}
              />
              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%", margin: "5px" }}
                className={styles.inputSingle}
                placeholder="Email"
                type="text"
                name=""
                id=""
                required={true}
              onChange={() => {
                setEmail(event.target.value);
              }}
              />
            </div>
            <div className={styles.space}>

              <PatternFormat
                format="+1 (###) ### ####"
                allowEmptyFormatting
                mask="_"
                className={styles.phoneNumber}
                onChange={(event) => {
                  setNumber(event.target.value);
                }}
              />
            </div>

            <div className={styles.space}>

              <input
                style={{ outline: "none", backgroundColor: "transparent", border: "1px solid rgb(210,210,210)", borderRadius: "5px", padding: "15px", width: "90%" }}
                onChange={() => {
                  setMessage(event.target.value);
                }}
                className={styles.inputSingle}
                placeholder="Comments"
                type="text"
              />
            </div>
          </div>
          <div
            style={{ height: "25%", display: "flex" }}
            className={styles.padding}
          >
            <ReCAPTCHA
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
              className="recaptcha"
              sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
              ref={captchaRef}
              onChange={verifyCallback}
            />
          </div>
          <button
            onClick={(e) => {
              setQuoteToggle(!quoteToggle);
              sendEmail(e);
            }}
            className={styles.buttonBlue}
          disabled={!toggle}
          >
            Get My Quote
          </button>
        </div>
        <div className={styles.mobileNone}>
          <Image alt={"handshake"} src={'/handshake.webp'} height={600} width={500} />
        </div>
      </div> */}
      {/* <div className={styles.centerBoxColumn}>
        <div style={{ padding: "20px" }} className={styles.title}>About Copiers Arizona</div>
        <Image alt={"copiers arizona team"} style={{ borderRadius: "5px" }} src={'/team.webp'} height={450} width={350} />
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            At Copiers Arizona, we are dedicated to providing businesses in Arizona with reliable copiers that deliver exceptional performance. That's why we have partnered exclusively with Lexmark, a trusted industry leader known for their dependable office equipment. With our strong focus on reliability, you can trust that our selection of Lexmark copiers will meet and exceed your expectations.</div>
        </div>
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            With Lexmark's renowned dependability, our copiers ensure smooth and uninterrupted operations for your business. Whether you need a compact desktop printer or a powerful multifunction device, our range of reliable Lexmark models is designed to handle your printing and copying needs with ease. You can count on our copiers to consistently deliver high-quality results, minimizing downtime and maximizing productivity in your office.</div>
        </div>
        <div className={styles.paragraphContainerMed}>
          <div className={styles.paragraphNo}>

            Choose Copiers Arizona and Lexmark for unrivaled reliability in your office. Contact us today to explore our range of reliable copiers and discover the difference they can make in your business operations.</div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
