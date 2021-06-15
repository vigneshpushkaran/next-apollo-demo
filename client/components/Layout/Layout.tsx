import React from 'react'
import styles from './Layout.module.css'
const Layout = (props: any) => {

    const { children } = props
    return (
        <div className={styles.layout}>
            { children}
        </div >
    )
}

export default Layout