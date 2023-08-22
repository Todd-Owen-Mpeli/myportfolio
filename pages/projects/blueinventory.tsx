// Import
import type {NextPage} from "next";
import {motion} from "framer-motion";

// Components
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";

const BlueInventory: NextPage = () => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<Navbar />
			<Experience />
			<TechStack />
			<CTA />
		</motion.div>
	);
};

export default BlueInventory;
