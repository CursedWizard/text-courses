import React from 'react';
import InfoBlock from "../components/InfoBlock";
import {flexible_format, text_base, concise_material, practise} from "../media/texts/text_course";
import TextIcon from "../img/TextIcon";
import BulbIcon from "../img/BulbIcon";
import FormatIcon from "../img/MonitorIcon";

class CourseInfo extends React.Component {
    constructor (props) 
	{
		super(props);

	}

	render()
	{
		return (
	 		<>
				<div className="grey-back p-6"
				>
					<div 
						className="mx-auto"
						style={{
							maxWidth: "850px"
						}}
					>
					<h4 className="mb-0 mt-0"
					>Чем наши курсы лучше?</h4>
					<div className="flex-row items-center ml-auto mr-auto justify-start wrap">
						<InfoBlock
							icon={TextIcon}
							title={"Текстовые курсы."}
							text={text_base}
						/>

						<InfoBlock
							icon={BulbIcon}
							title={"Коротко и по делу."}
							text={concise_material}
						/>
						<InfoBlock
							style={{
								marginTop: "0px",
							}}
							icon={FormatIcon}
							title={"Гибкий формат."}
							text={flexible_format}
						/>

						<InfoBlock

							style={{
								marginTop: "0px",
							}}
							icon={FormatIcon}
							title={"Турниры."}
							text={practise}
						/>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CourseInfo;
