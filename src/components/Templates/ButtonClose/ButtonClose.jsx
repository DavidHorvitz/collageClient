import styles from "./ButtonClose.module.scss";


const ButtonClose = props => {



    return (
        <div className={styles.continer}>
            <div className={styles.button_close}>
                <div className={styles.close} onClick={() => props.close(false)}></div>
            </div>
        </div>
    );
};


export default ButtonClose;