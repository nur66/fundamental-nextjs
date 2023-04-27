import React, { ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.css'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode,
    pageTitle: String
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props
    return (
        <>
            <Head>
                <title>
                    Nur Iswanto
                    {' '}
                    {pageTitle}
                </title>
                <meta name='description' content='Website next js' />
            </Head>
            <div className={styles.container} >
                <Header />
                <div className={styles.content} >{children}</div>
                <Footer />
            </div>
        </>
    )
}
