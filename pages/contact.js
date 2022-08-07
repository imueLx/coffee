import styles from '../styles/Contact.module.css'

export default function Contact () {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.contact_form_div}>
                <h1>CONTACT US</h1>
                    <form method="post" action="">
                        <p><input type="text" placeholder="Enter Name"/></p>
                        <p><input type="text" placeholder="Enter Email"/></p>
                        <p><input type="text" placeholder="Enter Contact No"/></p>
                        <p><textarea placeholder="Enter Message"></textarea></p>
                        <p><input type="submit" value="SUBMIT"/></p>
                    </form>
                </div>
            </div>
    </div>


    );

}