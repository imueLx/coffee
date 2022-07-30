import styles from '../styles/Contact.module.css'

export default function Contact () {
    return(
        <div className={styles.container}>
			<h1>Contact us</h1>
            <div className={styles.row}>
                    <h4>We love to hear from you!</h4>
            </div>
            <div className={styles.wrapper}>
                    <div className="col-xs-12">
                        <div className={styles.styled}>
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div className={styles.input}>
                        <div className={styles.styled}>
                            <input type="text" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div className={styles.input}>
                        <div className={styles.styled}>
                            <input type="text" required />
                            <label>Phone Number</label> 
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className={styles.styled}>
                            <textarea className={styles.textarea}>Message</textarea>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        Send Message
                    </div>
            </div>
        </div>
    );

}