import Head from 'next/head'
import Layout from '../../component/Layout'
import style from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      
      <Layout pageTitle="Home Page">
        {/* Cara yang direkomendasikan, bisa compare di network, mulai dari size nya type nya dll */}
          <Image src="/intro.png" width={400} height={600} alt='profile'/>


          <img src="/intro.png" style={{width: 400, height: 600}} alt='profile' />


          {/* Jika menggunakan global.css */}
          {/* <h1 className='title'>Welcome Nur</h1>   */}

          {/* Jika buat module sendiri */}
          <h1 className={style['title-homepage']}>Welcome Nur</h1>
      </Layout>
    </>
  )
}
