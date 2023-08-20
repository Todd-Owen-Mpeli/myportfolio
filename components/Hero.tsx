// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "@/styles/components/Hero.module.scss";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Navbar from "@/components/Navbar";
import Paragraph from "@/components/Elements/Paragraph";

const logoGrid = [
	{
		altText: "",
		sourceUrl: "",
		mediaDetails: {
			height: 1000,
			width: 1000,
		},
	},
];

const Hero: FC = () => {
	return (
		<>
			<section
				className=" bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/background/stacked-peaks-haikei-flatBlueGrey.svg")`,
				}}
			>
				<Navbar />

				<div className={styles.hero}>
					<div className="flex flex-col lg:flex-row w-full items-center justify-center gap-20 lg:gap-4">
						<div className="w-full lg:w-1/2">
							<motion.h2
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-center lg:text-left uppercase font-bold text-xl text-white"
							>
								I am
							</motion.h2>
							<motion.h1
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-center lg:text-left uppercase font-bold text-9xl text-white"
							>
								Todd Owen Mpeli
							</motion.h1>
							<Paragraph
								content={`<p>A passionate front-end developer with a love for crafting immersive digital experiences. With a deep-rooted knowledge in Web Development, Next.js, TypeScript, React, GraphQL, and the intricate world of Headless CMS.</p>`}
								tailwindStyling="mt-16 mb-6 text-2xl text-white font-normal text-left max-w-3xl w-full"
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
										className="uppercase font-[900] text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 mr-[-100px] hover:mr-0"
										href="#project"
									>
										projects
									</Link>
								</li>
								<li>
									<Link
										className="uppercase font-[900] text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 mr-[-100px] hover:mr-0"
										href="#about"
									>
										about
									</Link>
								</li>
								<li>
									<Link
										className="uppercase font-[900] text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 mr-[-100px] hover:mr-0"
										href="#skills"
									>
										skills
									</Link>
								</li>
								<li>
									<Link
										className="uppercase font-[900] text-9xl text-pinkPurple hover:text-yellow transition-all ease-in-out duration-500 mr-[-100px] hover:mr-0"
										href="#contact"
									>
										contact
									</Link>
								</li>
							</motion.ul>
						</div>
					</div>
					<div className="w-full max-w-7xl p-10 absolute z-[997] bottom-[-150px] mx-10 min-h-[250px] bg-yellow border-2 border-yellow grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-4 lg:justify-between"></div>
				</div>
			</section>
		</>
	);
};

export default Hero;
