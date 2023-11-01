// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "@/styles/components/Hero.module.scss";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import SkillsBanner from "./SkillsBanner";
import Paragraph from "@/components/Elements/Paragraph";

const Hero: FC = () => {
	return (
		<>
			<section
				id="hero"
				className="bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/background/stacked-peaks-haikei-flatBlueGrey.svg")`,
				}}
			>
				<div className={styles.hero}>
					<div className="flex flex-col lg:flex-row w-full items-center justify-center gap-20 lg:gap-4">
						<div className="w-full lg:w-1/2">
							<motion.h2
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-center lg:text-left tracking-[0.075rem] uppercase font-bold text-3xl mb-5 text-white"
							>
								<span className="border-b-2 border-yellow text-yellow tracking-widest mx-2 my-4 pb-[1px] leading-[2.75rem]">
									Hello!,
								</span>
								I am a
							</motion.h2>
							<motion.h1
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-center lg:text-left uppercase font-bold text-5xl sm:text-6xl md:text-8xl text-white"
							>
								Front-end Developer
							</motion.h1>
							<Paragraph
								content={`<p>A passionate front-end developer with a love for crafting immersive digital experiences. With a deep-rooted knowledge in <span><a href="#skills">Next.js 13</a></span>, <span><a href="#skills">TypeScript v5</a></span>, <span><a href="#skills">React 18</a></span>, <span><a href="#skills">GraphQL 16</a></span>, <span><a href="#skills">Headless CMS</a></span> and the intricate world of Web Development.</p>`}
								tailwindStyling="mt-16 mb-6 text-xl sm:text-2xl text-white font-normal text-left max-w-3xl w-full"
							/>
						</div>
						<div className="w-full lg:w-1/2">
							<motion.ul
								initial={initial}
								viewport={{once: true}}
								whileInView={stagger}
								className="flex flex-col text-right items-end justify-center gap-6 relative"
							>
								<li>
									<Link
										className="uppercase font-[900] text-5xl md:text-8xl xl:text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 md:mr-[50px] lg:mr-[-75px] xl:mr-[-100px] hover:mr-[25px] hover:md:mr-[50px] hover:xl:mr-[100px]"
										href="#projects"
									>
										projects
									</Link>
								</li>
								<li>
									<Link
										className="uppercase font-[900] text-5xl md:text-8xl xl:text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 md:mr-[50px] lg:mr-[-75px] xl:mr-[-100px] hover:mr-[25px] hover:md:mr-[50px] hover:xl:mr-[100px]"
										href="#experience"
									>
										about
									</Link>
								</li>
								<li>
									<Link
										className="uppercase font-[900] text-5xl md:text-8xl xl:text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 md:mr-[50px] lg:mr-[-75px] xl:mr-[-100px] hover:mr-[25px] hover:md:mr-[50px] hover:xl:mr-[100px]"
										href="#skills"
									>
										skills
									</Link>
								</li>
								<li>
									<Link
										className="uppercase font-[900] text-5xl md:text-8xl xl:text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 md:mr-[50px] lg:mr-[-75px] xl:mr-[-100px] hover:mr-[25px] hover:md:mr-[50px] hover:xl:mr-[100px]"
										href="#contact"
									>
										contact
									</Link>
								</li>
							</motion.ul>
						</div>
					</div>
					<SkillsBanner />
				</div>
			</section>
		</>
	);
};

export default Hero;
