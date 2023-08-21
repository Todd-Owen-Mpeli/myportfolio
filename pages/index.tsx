// Import
import type {NextPage} from "next";
import {motion} from "framer-motion";

// Components
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
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
			<Skills />
			<Experience />
		</motion.div>
	);
};

export default Home;
