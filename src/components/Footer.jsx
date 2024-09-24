import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div>
			<h3 className={styles.titleWrapper}>{"Time and Place"}</h3>
			<p>
			Date: October 14, 2024
			<p></p>
			Time: 3:50-4:00 EST 
			</p>
			<div className={styles.realFooter}>
				<h6>
				{"Copyright © 2024 Feng Lin"}
				</h6>
			</div>
		</div>
	)
}

export default Footer;