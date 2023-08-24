// Import
import type {NextPage} from "next";
import {motion} from "framer-motion";
import {IImageGrid, ITechStack, ISubTechStack} from "@/types/components";

// Components
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import ContentGrid from "@/components/ContentGrid";

const DBMXRacing: NextPage = () => {
	const imageGrid: IImageGrid = [
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/DBMX-Racing-Motocross-Accessories-Parts-(2).jpg",
		},
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/DBMX-Racing-Motocross-Accessories-Parts-(3).jpg",
		},
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/DBMX-Racing-Motocross-Accessories-Parts-(6).jpg",
		},
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/DBMX-Racing-Motocross-Accessories-Parts-(7).jpg",
		},
	];

	const techStack: ITechStack = [
		{
			text: "Next.js 13",
		},
		{
			text: "React 18",
		},
		{
			text: "Advanced Custom Fields PRO",
		},
		{
			text: "Headless CMS",
		},
		{
			text: "Typescript",
		},
		{
			text: "Tailwindcss",
		},
		{
			text: "REST API's",
		},
		{
			text: "Apollo & Apollo/client",
		},
		{
			text: "Headless Wordpress API.",
		},
		{
			text: "HTML 5",
		},
		{
			text: "CSS",
		},
		{
			text: "Javascript",
		},
	];

	const subTechStack: ISubTechStack = [
		{
			text: "Google ReCaptcha v2",
		},
		{
			text: "Git & Github",
		},
		{
			text: "Cors",
		},
		{
			text: "Babel",
		},
		{
			text: "Posthog-js",
		},
		{
			text: "Formik",
		},
		{
			text: "Framer Motion Animation",
		},
		{
			text: "Dompurify & Isomorphic-dompurify",
		},
		{
			text: "Nodemailer",
		},
		{
			text: "Styled-components",
		},
		{
			text: "Validator",
		},
		{
			text: "Sitemap",
		},
	];

	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<Navbar />
			<ContentGrid
				isCompleted={false}
				imageGrid={imageGrid}
				techStack={techStack}
				title={"DBMX-Racing"}
				subTechStack={subTechStack}
				sideTitle={`My Improvements:`}
				liveLink={"https://dbmx-racing.vercel.app"}
				githubLink={"https://github.com/Todd-Owen-Mpeli/DBMX-Racing"}
				subtitle={"Fully featured website"}
				backgroundImage={"/svg/background/stacked-waves-haikei-pinkRed.svg"}
				paragraph={`Is a project I've built for a reputable motocross accessories and parts shop in Gloucester. Presented and aimed at revitalizing and modernizing older version of the client website.`}
				paragraphTwo={`<p></p>`}
				paragraphThree={`<p>Enhanced functionality, Improved performance & contemporary design was the focus. I wanted to achieve a reduction in page load times, integrate modern features and functionalities, and ensuring the website is user-friendly and responsive across all devices.</p>`}
				sideParagraph={`<p>Enhanced functionality, Improved performance & contemporary design was the focus. I wanted to achieve a reduction in page load times, integrate modern features and functionalities, and ensuring the website is user-friendly and responsive across all devices.</p>`}
			/>
			<TechStack />
			<CTA />
		</motion.div>
	);
};

export default DBMXRacing;
