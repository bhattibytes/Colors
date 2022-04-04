import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Color Swatch App</title>
        <meta name="description" content="Color picker Interview-Challenge" />
      </Head>
      <Navbar/>
      <Footer/>
    </div>
  )
}
