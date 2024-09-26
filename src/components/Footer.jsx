import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div>
			{/* <h3 className={styles.titleWrapper}>{"Time"}</h3>
			Date: October 14, 2024
			<p></p>
			Time: 3:50-4:00 EST 
			 */}
			  <p style={{ textAlign: "left", marginTop: "20px" }}>
                <strong>To discuss more on similar topics, please attend our panel discuss: <a href="https://vis-panel-enough-evaluation.github.io/
" target="_blank" rel="noopener noreferrer">
    (Yet Another) Evaluation Needed? A Panel Discussion on Evaluation Trends in Visualization
  </a>
				</strong>
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