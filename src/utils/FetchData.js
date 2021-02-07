let formdata = new FormData();
formdata.append("page", "1");
formdata.append("limit", "2");

let requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};


async function getCourses()
{
	let result = await (await fetch("https://2keep.ru/api/v2/course/list/getTheoryCoursesList", 
		requestOptions)).json();

	if (result.success) 
		return result.payload;
	else
		return null;
}

async function getCourseInfo()
{
	// let result = await (await fetch("https://2keep.ru/api/v2/course/list/getTheoryCoursesList", 
	// 	requestOptions)).json();
	//
	
	let data = {
		lessons: [
			{
				title: "Текстовые задачи",
				price: 0,
				subLessons: [
					{
						title: "Введение",
						link: "/web/theory-courses/math/lesson-1"
					},
					{
						title: "Контент",
						link: "/web/theory-courses/math/lesson-2"
					},
					{
						title: "Заключение",
						link: "/web/theory-courses/math/lesson-3"
					}
				]
			},

			{
				title: "Графики и диаграмы",
				price: 0,
				subLessons: [
					{
						title: "Введение",
						link: "/web/theory-courses/math/lesson-4"
					},
					{
						title: "Контент",
						link: "/web/theory-courses/math/lesson-5"
					},
					{
						title: "Заключение",
						link: "/web/theory-courses/math/lesson-6"
					}
				]
			},

			{
				title: "Начала теории вероятности",
				price: 100,
				subLessons: [
					{
						title: "Введение",
						link: "/web/theory-courses/math/lesson-7"
					},
					{
						title: "Контент",
						link: "/web/theory-courses/math/lesson-8"
					},
					{
						title: "Заключение",
						link: "/web/theory-courses/math/lesson-9"
					}
				]
			},

			{
				title: "Производная и первообразная",
				price: 150,
				subLessons: [
					{
						title: "Введение",
						link: "/web/theory-courses/math/lesson-10"
					},
					{
						title: "Контент",
						link: "/web/theory-courses/math/lesson-11"
					},
					{
						title: "Заключение",
						link: "/web/theory-courses/math/lesson-12"
					}
				]
			}
		]
		
	}
	return data;

}


export {getCourses, getCourseInfo};
