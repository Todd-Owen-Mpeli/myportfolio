// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

// Styles
import styles from "../styles/components/Experience.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Experience: FC = () => {
	return (
		<>
			<div
				id="experience"
				className="flex flex-col-reverse xl:flex-row w-full items-center justify-center pt-[40rem] lg:pt-[28rem] py-32 xl:pt-[20rem] px-6 md:px-10 bg-flatBlueGreyDarker gap-24 xl:gap-12"
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
			<div
				id="experience"
				className="flex flex-col items-center justify-center pt-[40rem] lg:pt-[28rem] py-32 xl:pt-[20rem] px-6 md:px-10 bg-flatBlueGreyDarker gap-6 xl:gap-12"
			>
				<motion.h3
					initial={initial}
					viewport={{once: true}}
					whileInView={fadeInUp}
					className="text-center lg:text-left uppercase font-bold text-4xl xl:text-6xl mb sm:mb-16 text-white"
				>
					My Expertise
				</motion.h3>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center border-2 border-solid border-white">
						<div className="flex flex-col p-10">
							<div className="flex md:flex-row flex-col gap-6 items-center justify-center">
								<Image
									alt={"Firebase 9 Logo"}
									src="/svg/firebase.svg"
									width={1000}
									height={1000}
									className="w-16 h-16 object-center object-contain"
								/>
								<motion.span
									initial={initialTwo}
									viewport={{once: true}}
									whileInView={fadeIn}
									className="text-2xl text-white text-center"
								>
									Junior Software Developer, Firebase, NextJS
								</motion.span>
							</div>
							<>
								<Paragraph
									content={`<p>Embarking on becoming an experienced developer in both Cloud functional and OOP: Firebase, React, TypeScript</p>`}
									tailwindStyling="mt-6 text-base text-darkGrey text-center lg:text-left"
								/>
							</>
						</div>
						<div className="flex flex-col border-y-2 lg:border-y-0 border-x-0 lg:border-x-2 border-solid border-white p-10">
							<div className="flex md:flex-row flex-col gap-6 items-center justify-center relative">
								<span className={styles.react}>
									<span aria-hidden="true" />
									<span aria-hidden="true" />
									<span aria-hidden="true" />
								</span>
								<motion.span
									initial={initialTwo}
									viewport={{once: true}}
									whileInView={fadeIn}
									className="text-2xl text-white text-center"
								>
									Frontend Dev React, NextJS
								</motion.span>
							</div>
							<>
								<Paragraph
									content={`<p>Passionate about solving problems with clean scalable solutions. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>`}
									tailwindStyling="mt-6 text-base text-darkGrey text-center lg:text-left"
								/>
							</>
						</div>
						<div className="flex flex-col p-10">
							<div className="flex md:flex-row flex-col gap-6 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="2500"
									height="2500"
									viewBox="8.399 8.4 51.2 51.2"
									className="w-16 h-16 object-center object-contain"
								>
									<path
										fill="#ffffff"
										d="M34 59.6C19.813 59.6 8.293 48.293 8.4 34 8.507 19.707 19.28 8.4 34 8.4c14.721 0 25.6 11.52 25.6 25.6S48.187 59.6 34 59.6zm7.573-3.947l-7.253-19.52-6.827 19.947c5.014 1.174 8.427 1.493 14.08-.427zm-17.706-1.066l-10.88-29.76c-1.494 3.2-1.813 5.867-2.027 9.173.107 8.746 5.013 16.746 12.907 20.587zM56.934 34c.106-5.653-2.453-10.133-2.667-10.773.214 4.374-.427 6.613-1.173 9.067l-7.467 21.44C55.014 48.08 56.826 39.653 57.04 34h-.106zm-23.68-.96l-3.627-9.92-2.667-.213c-1.066-.747-.427-1.92.32-1.92 4.8.32 7.466.32 12.267 0 1.174 0 1.493 1.707.106 1.92l-2.56.213 8.319 24.533 3.946-13.44c.214-5.866-1.387-6.506-3.52-10.773-1.707-3.307.107-6.507 3.414-6.613-2.668-2.56-8.107-5.76-15.254-5.867s-14.72 3.52-19.2 10.347l7.894-.213c.96.427.533 1.813 0 1.92l-2.773.213 8.32 24.96 5.015-15.147z"
									/>
								</svg>
								<motion.span
									initial={initialTwo}
									viewport={{once: true}}
									whileInView={fadeIn}
									className="text-2xl text-white text-center"
								>
									Web Development, WooCommerce, PHP
								</motion.span>
							</div>
							<>
								<Paragraph
									content={`<p>Embarking on becoming an experienced in both functional and OOP: Firebase, Cloud Functions, React, TypeScript..</p>`}
									tailwindStyling="mt-6 text-base text-darkGrey text-center lg:text-left"
								/>
							</>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
