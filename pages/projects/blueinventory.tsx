// Import
import type {NextPage} from "next";
import {motion} from "framer-motion";

// Components
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import ContentGrid from "@/components/ContentGrid";

const BlueInventory: NextPage = () => {
	const imageGrid = [
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/BlueInventory-Inventory-Management-Software.jpg",
		},
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/BlueInventory-Inventory-Management-Software-(2).jpg",
		},
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/BlueInventory-Inventory-Management-Software-(3).jpg",
		},
		{
			altText: "BlueInventory Project Image",
			sourceUrl:
				"/img/projects/BlueInventory-Inventory-Management-Software-(4).jpg",
		},
	];

	const techStack = [
		{
			text: "Firebase",
		},
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
			text: "Stripe",
		},
		{
			text: "Tailwindcss",
		},
		{
			text: "REST API&apos;s",
		},
		{
			text: "Apollo & Apollo/client",
		},
		{
			text: "FireStore Cloud Database",
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

	const subTechStack = [
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
				isCompleted={true}
				imageGrid={imageGrid}
				techStack={techStack}
				title={"BlueInventory"}
				subTechStack={subTechStack}
				sideTitle={`My Improvements:`}
				liveLink={"https://blueinventory.vercel.app/"}
				githubLink={"https://github.com/Todd-Owen-Mpeli"}
				subtitle={"Fully featured web application with cloud database"}
				backgroundImage={
					"/svg/background/stacked-peaks-haikei-blue-darkBlue.svg"
				}
				paragraph={`BlueInventory is your powerful non-commerce inventory management solution. Simpler Inventory, easier growth, better management.`}
				paragraphTwo={`
					<p>
					A software as a service (SAAS) utilizing google Authentication & Firebase Cloud database. Built using next.js 13 static-side & server-side rendering. This projects is developed with leading industry technology stack: Next.js 13, React 18, Typescript, Firebase, FireStore cloud database, Stripe & Headless Wordpress API.</p>`}
				paragraphThree={`<p>BlueInventory was born out of the vision to revolutionize how businesses approach inventory management. By reducing complexity, enhancing precision, and fostering growth, it's poised to become the industry benchmark, setting new standards for operational excellence.</p>`}
				sideParagraph={`<p>Enhanced functionality, Improved performance & contemporary design was the focus. I wanted to achieve a reduction in page load times, integrate modern features and functionalities, and ensuring the website is user-friendly and responsive across all devices.</p>`}
			/>
			<TechStack />
			<CTA />
		</motion.div>
	);
};

export default BlueInventory;
