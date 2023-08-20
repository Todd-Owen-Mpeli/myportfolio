// Import
import Link from "next/link";
import Image from "next/image";
import type {NextPage} from "next";
import {motion} from "framer-motion";

// Components
import Hero from "@/components/Hero";
import Paragraph from "@/components/Elements/Paragraph";

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
			<div className="flex flex-col lg:flex-row w-full items-center justify-center py-24 pt-[15rem] px-16 bg-flatBlueGreyDarker">
				<div className="w-full lg:w-1/2">
					<h1 className="text uppercase font-bold text-9xl text-white">
						Todd Owen Mpeli
					</h1>
					<Paragraph
						content={`<p>I'm a passionate front-end developer with a love for crafting immersive digital experiences. With a deep-rooted knowledge in Web Development, Next.js, TypeScript, React, GraphQL, and the intricate world of Headless CMS.</p>`}
						tailwindStyling="mt-3 mb-6 text-lg text-white font-medium text-lef max-w-xl w-full"
					/>
				</div>
				<div className="w-full lg:w-1/2"></div>
			</div>
		</motion.div>
	);
};

export default Home;
