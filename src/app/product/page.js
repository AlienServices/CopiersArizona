import Head from "next/head";
import Data from './Data'

export const metadata = {
  title: 'Product Details | Copiers Arizona',
  description: 'Copiers Arizona: Quality copiers for sale/rent. Pick from various reliable office machines with advanced features & affordable prices. Contact us now! ',
}
export default function product() {
  return (
    <Data/>
  );
}

