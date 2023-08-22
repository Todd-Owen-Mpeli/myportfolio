// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Experience: FC = () => {
	return (
		<>
			<div
				id="experience"
				className=" flex flex-col-reverse xl:flex-row w-full items-center justify-center pt-[40rem] lg:pt-[28rem] py-32 xl:pt-[20rem] px-6 md:px-10 bg-flatBlueGreyDarker gap-24 xl:gap-12"
			>
				<div className="w-full xl:w-1/2 flex flex-col lg:flex-row gap-24 xl:gap-4">
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="flex flex-col items-center justify-center gap-4"
					>
						<motion.h3
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="flex flex-col items-center gap-8 sm:flex-row text-center uppercase font-bold text-9xl text-purple"
						>
							<span className="">2</span>
							<span className="text-4xl tracking-widest">plus</span>
						</motion.h3>
						<span className="text-center mt-10 uppercase font-bold text-xl sm:text-4xl text-white">
							Years of experience
						</span>
					</motion.div>
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="flex flex-col items-center justify-center gap-4"
					>
						<motion.h3
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="flex flex-col items-center gap-8 sm:flex-row text-center uppercase font-bold text-9xl text-purple"
						>
							<span className="">199</span>
							<span className="text-4xl tracking-widest">plus</span>
						</motion.h3>
						<span className="text-center mt-10 uppercase font-bold text-xl sm:text-4xl text-white">
							Client project developments
						</span>
					</motion.div>
				</div>
				<div className="w-full xl:w-1/2">
					<motion.h3
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className="break-words text-center lg:text-left uppercase font-bold text-6xl sm:text-8xl lg:text-9xl mb-16 text-white"
					>
						Web Development
					</motion.h3>
					<Paragraph
						content={`<p>I enjoy solving problems with clean scalable solutions. I am dedicated to bringing ideas to life through the power of code and creativity. My goal is to blend seamless functionality with stunning aesthetics, all while ensuring top-tier user experiences. </p>`}
						tailwindStyling="mt-3 mb-6 text-xl sm:text-2xl text-white font-medium text-center sm:text-left"
					/>
					<Paragraph
						content={`<p>I thrive on the challenges that front-end development offers and constantly seek innovative ways to push the boundaries of what's possible. Join me on this journey as I explore and conquer all things front-end, one pixel at a time.</p>`}
						tailwindStyling="mt-3 mb-6 text-xl sm:text-2xl text-darkGrey font-medium text-center sm:text-left"
					/>
				</div>
			</div>
		</>
	);
};

export default Experience;
