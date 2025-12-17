import styles from "../Header.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState, useContext } from "react";
import Image from "next/image";
export default function Header() {
  const router = useRouter();

  return (
    <>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <div className={styles.logoContainer}>
            <Link href={'/'}>
              <Image
                alt={"copiers arizona"}
                src={`/logo.webp`}

                fill={true}
              />
            </Link>
          </div>
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.rowHead}>
              <Link href={'/products'}>
                <div className={styles.titleSmallHeader}>Products</div>
              </Link>
              <Link href={'/service'}>
                <div className={styles.titleSmallHeader}>Service</div>
              </Link>
              <div className={styles.titleSmallHeader}>Toner Reorder</div>
              <div className={styles.titleSmallHeader}>Financing</div>
              <div className={styles.titleSmallHeader}>About Us</div>
            </div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersarizona.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}
