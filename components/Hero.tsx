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
				<Navbar />

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
								</span>{" "}
								I am a
							</motion.h2>
							<motion.h1
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-center lg:text-left uppercase font-bold text-8xl sm:text-8xl text-white"
							>
								Front-end Developer
							</motion.h1>
							<motion.h2
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="flex items-center gap-2 mt-2 text-center lg:text-left tracking-[0.075rem] uppercase font-bold text-3xl mb-5 text-white"
							>
								my name is
								<span className="border-b-2 border-yellow text-yellow tracking-widest mx-2 my-4 pb-[1px] leading-[2.75rem]">
									Todd Owen Mpeli
								</span>
							</motion.h2>
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
					<div
						className="w-full max-w-7xl px-4 py-10 sm:p-10 absolute z-[997] bottom-[-525px] md:bottom-[-350px] lg:bottom-[-225px] mx-0 sm:mx-10 min-h-[250px] bg-yellow border-2 border-yellow flex flex-col items-center justify-center gap-12 bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `url("/svg/background/stacked-waves-haikei-orange-yellow.svg")`,
						}}
					>
						<motion.h4
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="text-center lg:text-left uppercase font-bold text-6xl text-flatBlueGreyDarker"
						>
							what i enjoy
						</motion.h4>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className={
								styles.skills +
								` grid items-center justify-center grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-6 lg:justify-between overflow-hidden`
							}
						>
							<Link
								className="flex flex-col gap-2 items-center justify-center"
								href="#skills"
							>
								<svg
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="#ffffff"
									className="w-14 h-14 mb-3 object-center object-contain"
								>
									<path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>
								</svg>
								<h3 className="uppercase tracking-widest font-[900] text-lg text-pinkPurple text-center">
									Next.js 13
								</h3>
							</Link>
							<Link
								className="flex flex-col gap-2 items-center justify-center relative"
								href="#skills"
							>
								<span className="">
									<span className={styles.react}>
										<span aria-hidden="true" />
										<span aria-hidden="true" />
										<span aria-hidden="true" />
									</span>
									<h3 className="uppercase tracking-widest font-[900] mt-20 text-lg text-pinkPurple text-center">
										React 18
									</h3>
								</span>
							</Link>
							<Link
								className="flex flex-col gap-2 items-center justify-center"
								href="#skills"
							>
								<svg
									fill="none"
									height="512"
									viewBox="0 0 512 512"
									width="512"
									xmlns="http://www.w3.org/2000/svg"
									className="w-14 h-14 mb-3 object-center object-contain"
								>
									<rect fill="#ffffff" height="512" rx="50" width="512" />
									<rect fill="#ffffff" height="512" rx="50" width="512" />
									<path
										clipRule="evenodd"
										d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
										fill="#e78f01"
										fillRule="evenodd"
									/>
								</svg>
								<h3 className="uppercase tracking-widest font-[900] text-lg text-pinkPurple text-center">
									TypeScript v5
								</h3>
							</Link>
							<Link
								className="flex flex-col gap-2 items-center justify-center"
								href="#skills"
							>
								<svg
									version="1.1"
									id="GraphQL_Logo"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									viewBox="0 0 400 400"
									fill="#ffffff"
									enableBackground="new 0 0 400 400"
									className="w-16 h-16 mb-3 object-center object-contain"
								>
									<g>
										<g>
											<g>
												<rect
													x="122"
													y="-0.4"
													transform="matrix(-0.866 -0.5 0.5 -0.866 163.3196 363.3136)"
													width="16.6"
													height="320.3"
												/>
											</g>
										</g>
										<g>
											<g>
												<rect x="39.8" y="272.2" width="320.3" height="16.6" />
											</g>
										</g>
										<g>
											<g>
												<rect
													x="37.9"
													y="312.2"
													transform="matrix(-0.866 -0.5 0.5 -0.866 83.0693 663.3409)"
													width="185"
													height="16.6"
												/>
											</g>
										</g>
										<g>
											<g>
												<rect
													x="177.1"
													y="71.1"
													transform="matrix(-0.866 -0.5 0.5 -0.866 463.3409 283.0693)"
													width="185"
													height="16.6"
												/>
											</g>
										</g>
										<g>
											<g>
												<rect
													x="122.1"
													y="-13"
													transform="matrix(-0.5 -0.866 0.866 -0.5 126.7903 232.1221)"
													width="16.6"
													height="185"
												/>
											</g>
										</g>
										<g>
											<g>
												<rect
													x="109.6"
													y="151.6"
													transform="matrix(-0.5 -0.866 0.866 -0.5 266.0828 473.3766)"
													width="320.3"
													height="16.6"
												/>
											</g>
										</g>
										<g>
											<g>
												<rect x="52.5" y="107.5" width="16.6" height="185" />
											</g>
										</g>
										<g>
											<g>
												<rect x="330.9" y="107.5" width="16.6" height="185" />
											</g>
										</g>
										<g>
											<g>
												<rect
													x="262.4"
													y="240.1"
													transform="matrix(-0.5 -0.866 0.866 -0.5 126.7953 714.2875)"
													width="14.5"
													height="160.9"
												/>
											</g>
										</g>
										<path
											d="M369.5,297.9c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C373.5,259.9,379.2,281.2,369.5,297.9"
										/>
										<path
											d="M90.9,137c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8
		C94.8,99,100.5,120.3,90.9,137"
										/>
										<path
											d="M30.5,297.9c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C61.4,320.3,40.1,314.6,30.5,297.9"
										/>
										<path
											d="M309.1,137c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7
		C340.1,159.4,318.7,153.7,309.1,137"
										/>
										<path
											d="M200,395.8c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,380.1,219.3,395.8,200,395.8"
										/>
										<path
											d="M200,74c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9
		C234.9,58.4,219.3,74,200,74"
										/>
									</g>
								</svg>
								<h3 className="uppercase tracking-widest font-[900] text-lg text-pinkPurple text-center">
									GraphQL
								</h3>
							</Link>
							<Link
								className="flex flex-col gap-2 items-center justify-center"
								href="#skills"
							>
								<Image
									alt={"Firebase 9 Logo"}
									src="/svg/firebase.svg"
									width={1000}
									height={1000}
									className="w-14 h-14 mb-3 object-center object-contain"
								/>
								<h3 className="uppercase tracking-widest font-[900] text-lg text-pinkPurple text-center">
									Firebase 9
								</h3>
							</Link>
							<Link
								className="flex flex-col gap-2 items-center justify-center"
								href="#skills"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									shapeRendering="geometricPrecision"
									textRendering="geometricPrecision"
									imageRendering="optimizeQuality"
									fillRule="evenodd"
									clipRule="evenodd"
									viewBox="0 0 512 459.422"
									fill="#ffffff"
									className="w-16 h-16 mb-3 object-center object-contain"
								>
									<path
										fillRule="nonzero"
										d="M362.984 94.437c-19.862-33.342-47.592-54.122-77.309-64.116-23.792-8.001-48.898-9.157-72.283-4.368-23.25 4.76-44.772 15.407-61.54 31.037-19.898 18.547-33.108 44.252-34.479 75.573-.275 6.379-5.671 11.327-12.05 11.051l-.27-.014c-36.271-2.415-61.087 15.051-73.173 39.229-4.981 9.968-7.873 21.128-8.572 32.561-.704 11.484.798 23.161 4.601 34.11l.156.484c9.972 28.2 35.607 51.831 78.585 55.22-.075 2.223-.138 4.48-.187 6.773a424.06 424.06 0 00-.027 16.359c-.453.022-.915.014-1.378-.02-53.627-4.178-85.906-34.404-98.734-70.573l-.244-.633C1.243 243.184-.674 228.44.208 214.032c.886-14.457 4.599-28.69 11.017-41.53 14.668-29.34 43.134-51.235 83.99-52.233 4.049-32.805 19.182-60 40.875-80.219 19.884-18.535 45.299-31.139 72.682-36.744 27.25-5.58 56.508-4.234 84.241 5.093 36.237 12.188 69.818 37.893 92.847 79.406 23.908-4.704 45.073-1.653 62.972 6.763 25.016 11.765 43.251 33.896 53.516 60.032 10.06 25.617 12.507 55.278 6.155 82.709-10.119 43.697-42.088 81.838-100.456 90.053-.521.053-1.047.09-1.585.09l-1.563.004c.387-5.027.599-10.184.599-15.479 0-2.576-.059-5.11-.151-7.623h.112c46.796-6.81 72.409-37.306 80.489-72.206 5.303-22.908 3.253-47.697-5.161-69.124-8.215-20.916-22.46-38.468-41.738-47.532-28.509-13.405-68.907-8.536-118.729 30.611-5.026 3.951-12.308 3.077-16.259-1.948-3.951-5.025-3.078-12.307 1.948-16.259 20.127-15.813 39.175-26.693 56.975-33.459zM318.54 284.585c5.804 0 10.513 4.706 10.513 10.513 0 5.804-4.709 10.513-10.513 10.513-5.807 0-10.513-4.709-10.513-10.513 0-5.807 4.706-10.513 10.513-10.513zm0 121.316c5.804 0 10.513 4.708 10.513 10.512 0 5.807-4.709 10.513-10.513 10.513-5.807 0-10.513-4.706-10.513-10.513 0-5.804 4.706-10.512 10.513-10.512zm0-59.425c5.804 0 10.513 4.706 10.513 10.513 0 5.804-4.709 10.513-10.513 10.513-5.807 0-10.513-4.709-10.513-10.513 0-5.807 4.706-10.513 10.513-10.513zm-131.753-90.354c17.548 5.857 41.973 9.483 69.107 9.483 27.137 0 51.558-3.626 69.11-9.483 15.404-5.142 24.933-11.368 24.933-17.457s-9.529-12.314-24.933-17.456c-17.549-5.858-41.973-9.483-69.11-9.483-27.134 0-51.559 3.625-69.107 9.483-32.683 10.91-33.581 23.703 0 34.913zm163.187 124.074c-5.488 3.754-12.476 7.063-20.739 9.821-18.905 6.311-44.846 10.214-73.341 10.214-28.495 0-54.434-3.903-73.339-10.214-8.158-2.724-15.107-5.982-20.563-9.677v40.042c1.215 5.678 10.46 11.401 24.792 16.185 17.551 5.858 41.976 9.483 69.11 9.483 27.137 0 51.558-3.625 69.11-9.483 10.637-3.549 18.474-7.618 22.303-11.8 3.16-3.453 2.667-5.724 2.667-9.848v-34.723zM148.482 238.665c0-12.48 13.021-23.068 34.073-30.095 18.905-6.31 44.846-10.215 73.339-10.215 28.495 0 54.436 3.905 73.341 10.215 19.163 6.397 31.67 15.743 33.759 26.784.251.701.387 1.456.387 2.245v184.278c0 12.774-24.407 24.078-34.146 27.331-18.905 6.308-44.846 10.214-73.341 10.214-28.495 0-54.434-3.906-73.339-10.214-9.967-3.328-33.934-14.262-33.934-27.331v-4.283c0-59.641-.139-119.297-.139-178.929zm13.51 122.526c1.215 5.677 10.46 11.401 24.792 16.185 17.551 5.858 41.976 9.483 69.11 9.483 27.137 0 51.558-3.625 69.11-9.483 15.404-5.141 24.933-11.367 24.933-17.456h.073v-38.915c-5.488 3.756-12.512 7.063-20.775 9.821-18.905 6.311-44.846 10.213-73.341 10.213-28.495 0-54.434-3.902-73.339-10.213-8.158-2.724-15.107-5.982-20.563-9.675v40.04zm0-59.191c1.215 5.678 10.46 11.401 24.792 16.186 17.551 5.857 41.976 9.483 69.11 9.483 27.137 0 51.558-3.623 69.11-9.483 15.404-5.142 24.933-11.368 24.933-17.457h.073v-41.788c-5.488 3.754-12.512 7.06-20.775 9.819-18.905 6.31-44.846 10.215-73.341 10.215-28.493 0-54.434-3.905-73.339-10.215-8.158-2.722-15.107-5.979-20.563-9.676V302z"
									/>
								</svg>
								<h3 className="uppercase tracking-widest font-[900] text-lg text-pinkPurple text-center">
									Headless CMS
								</h3>
							</Link>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
