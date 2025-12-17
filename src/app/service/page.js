import Head from "next/head";
import Data from './Data'

export const metadata = {
  title: 'Service Requests | Copiers Arizona',
  description: 'Submit a service request for your copier. Existing customers can log in, or new customers can contact us directly.',
}
export default function service() {
  return (
    <Data/>
  );
}

