import React from 'react';
import styles from './styles.module.css';

type Props ={
    popUpVisibility: boolean;
    setPopupVisibility: (value: boolean) => void;
}

export const PopUpNotification = ({ popUpVisibility } : Props) => {
    return (popUpVisibility) ? (
        <div className={styles.popup}>
            Скопировано в буфер обмена
        </div>
    ) : null;
};