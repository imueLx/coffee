import styles from '../styles/Contact.module.css'

export default function Contact () {
    return(
        <div className={styles.container}>
            <div className={styles.row}>
			<h1>Contact us</h1>
            </div>
            <div className={styles.row}>
                    <h4 style="text-align:center">We'd love to hear from you!</h4>
            </div>
            <div className={styles.input-container}>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input type="text" required />
                            <label>Name</label> 
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input type="text" required />
                            <label>Email</label> 
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input" style="float:right;">
                            <input type="text" required />
                            <label>Phone Number</label> 
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="btn-lrg submit-btn">Send Message</div>
                    </div>
            </div>
        </div>
    );

}