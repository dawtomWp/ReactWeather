import React from 'react';
import styles from './StartPanel.module.scss';
import Button from '../Button/Button';
import banner from '../../images/weatherMain.png'

const StartPanel = ({buttonMethod}) =>  (
        <div className={styles.wrapper}>
            <p className={styles.desc}>Designed by Dawid Dev 2021</p>
            <h2 className={styles.wrapperTitle}>Bellona <span>.weather</span></h2>
            <img src={banner} className={styles.banner} alt="bellona weather"></img>
            <div className={styles.buttonsWrapper}>
                <Button
                 className={styles.primaryButton}
                 click={buttonMethod}
                 children="MY LOCATION"
                 purpose="showLocation"
                 />
                <Button
                 className={styles.secondaryButton}
                 click={buttonMethod}
                 children="SEARCH"
                 purpose="searchLocation"
                 />
            </div>
        </div>
    )


export default StartPanel
