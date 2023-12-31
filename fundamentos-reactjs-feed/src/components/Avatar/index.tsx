//import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

export function Avatar({ hasBorder = true, src }) {

    return (

        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt="Avatar"
        />

    );
}
