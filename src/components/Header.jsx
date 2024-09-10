import React from "react";

import styles from "./Header.module.scss";

import parse from 'html-react-parser';




const Header = () => {

	return (
		<div>
			<img src="./imgs/vis2024_logo.png" alt="IEEE VIS 2024 Logo" className={styles.logo} />
			<div className={styles.headerWrapper} style={{ textAlign: "center" }}>
				<h2>
				<a href="https://www.arxiv.org/abs/2408.16080" target="_blank" rel="noopener noreferrer" style={{ color: "inherit"}}>
					{parse("Striking the Right Balance: Systematic Assessment of Evaluation Method Distribution Across Contribution Types")}
				</a>	
				</h2>
			</div>
				<h3>{"Panel @ BELIV at VIS 2024"}</h3>
			<p>
			{parse(`In the rapidly evolving field of information visualization, rigorous evaluation is essential for validating new techniques, understanding user interactions, and demonstrating the effectiveness and usability of visualizations. Faithful evaluations provide valuable insights into how users interact with and perceive the system, enabling designers to identify potential weaknesses and make informed decisions about design choices and improvements. However, an emerging trend of multiple evaluations within a single research raises critical questions about the sustainability, feasibility, and methodological rigor of such an approach. New researchers and students, influenced by this trend, may believe -- multiple evaluations are necessary for a study, regardless of the contribution types. However, the number of evaluations in a study should depend on its contributions and merits, not on the trend of including multiple evaluations to strengthen a paper. So, how many evaluations are enough? This is a situational question and cannot be formulaically determined. Our objective is to summarize current trends and patterns to assess the distribution of evaluation methods over different paper contribution types. In this paper, we identify this trend through a <a href="https://docs.google.com/spreadsheets/d/1tgKlUm23xsazU_rFGVi_c8Kkq-fVwVnm5_G4CgHOv88/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">non-exhaustive literature survey</a> of evaluation patterns in 214 papers in the two most recent years' VIS issues in IEEE TVCG from 2023 and 2024. We then discuss various evaluation strategy patterns in the information visualization field to guide practical choices and how this paper will open avenues for further discussion.`)}
			</p>
		</div>
	)
}

export default Header;