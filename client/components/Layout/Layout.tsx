import React from 'react'
import Header from '../Header'
import styles from './layout.module.css'
const Layout = (props: any) => {

    const { children } = props
    return (
        <div className={styles.layout}>
            <Header />
            <div style={{ margin: '8px 16px' }}>
                {children}
            </div>
        </div>
    )
}

export default Layout