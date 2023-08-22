// Import
import type {NextPage} from "next";
import {motion} from "framer-motion";

// Components
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import BlueInventory from "@/components/projects/BlueInventory";

const Home: NextPage = () => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<Hero />
			<Experience />
			<BlueInventory />
			<Projects />
			<CTA />
			<Skills />
			<ContactForm />
		</motion.div>
	);
};

export default Home;
