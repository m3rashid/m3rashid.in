export type Project = {
	title: string;
	description: string;
	href: string;
	mediaSrc?: string;
}

export const projects: Project[] = [
	{
		title: "Go with the flow",
		description: "A flow builder for actions similar to apache airflow. A high performance server written in go, entirely configurable with custom flows",
		href: "https://github.com/m3rashid/go-with-the-flow",
		mediaSrc: "/go-with-the-flow.jpg",
	},
	{
		title: "Mad Blocks",
		description: "A simple but fully functional end-to-end blockchain implementation written in go",
		href: "https://github.com/m3rashid/mad-blocks",
		mediaSrc: "/mad-blocks.jpg",
	},
	{
		title: "HMIS",
		description: "A hospital management information system written in typescript and go",
		href: "https://github.com/m3rashid/hmis",
		mediaSrc: "/hmis.jpg",
	},
	{
		title: "Form Builder",
		description: "A form builder written in react and typescript to generate forms from json",
		href: "https://github.com/m3rashid/formbuilder",
	},
	{
		title: "Exam Portal",
		description: "A simple exam portal written in react and typescript, where teachers can create exams, students can take exams and admins can manage users with analytics, dashboards, reports and other features",
		href: "https://github.com/m3rashid/exam-portal",
		mediaSrc: "/exam-portal.jpg",
	},
	{
		title: "Tax Tds",
		description: "A local business directory website",
		href:"https://github.com/m3rashid/taxtds-new",
		mediaSrc: "/taxtds.jpg",
	},
	{
		title: "Whatsapp Bot",
		description: "A general utility whatsapp bot",
		href: "https://github.com/m3rashid/whatsapp-bot",
		mediaSrc: "/whatsapp-bot.jpg",
	}
];
