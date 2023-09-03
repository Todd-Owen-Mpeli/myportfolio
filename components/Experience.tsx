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
							<h3 className="">2</h3>
							<h3 className="text-4xl tracking-widest">plus</h3>
						</motion.h3>
						<span className="text-center mt-10 font-bold text-xl sm:text-4xl text-white">
							Years of Experience
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
							<h3 className="">87</h3>
							<h3 className="text-4xl tracking-widest">plus</h3>
						</motion.h3>
						<span className="text-center mt-10 font-bold text-xl sm:text-4xl text-white">
							Live Client Developments
						</span>
					</motion.div>
				</div>
				<div className="w-full xl:w-1/2">
					<motion.h3
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className="text-center lg:text-left uppercase font-bold text-4xl sm:text-8xl lg:text-9xl mb-16 text-white"
					>
						Web Development
					</motion.h3>
					<Paragraph
						content={`<p>I enjoy solving problems with clean scalable solutions. I am dedicated to bringing ideas to life through the power of code and creativity. My goal is to blend seamless functionality with stunning aesthetics, all while ensuring top-tier user experiences. </p>`}
						tailwindStyling="mb-6 text-base sm:text-xl sm:text-2xl text-white text-center lg:text-left"
					/>
					<Paragraph
						content={`<p>I thrive on the challenges that front-end development offers and constantly seek innovative ways to push the boundaries of what's possible. Join me on this journey as I explore and conquer all things front-end, one pixel at a time.</p>`}
						tailwindStyling="mb-6 text-base sm:text-xl sm:text-2xl text-darkGrey text-center lg:text-left"
					/>
				</div>
			</div>
		</>
	);
};

export default Experience;
