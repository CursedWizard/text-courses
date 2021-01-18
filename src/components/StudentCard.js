
import React from 'react';
import Student from "../img/Graduate";


class StudentCard extends React.Component {

	render()
	{
		return (
		<div className="student-card">
			<Student className="rounded-full student-avatar" style={{width: "64px", height: "64px"}}/>
			<div className="student-info">
				<span style={{paddingBottom: "1%"}}>Алексей Навальный</span>
				<span style={{color: "#555555"}}>новичок</span>
			</div>

		</div>
		);
	}
}

StudentCard.propTypes = {
};

export default StudentCard;
