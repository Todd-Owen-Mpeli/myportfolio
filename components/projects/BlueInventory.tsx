// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "@/styles/components/projects/StarProject.module.scss";
import {initial, fadeInUp, initialTwo, fadeIn} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const BlueInventory: FC = () => {
	return (
		<>
			<section
				id="blueInventory"
				className={styles.starProject + " bg-center bg-no-repeat bg-cover"}
				style={{
					backgroundImage: `url("/svg/background/stacked-peaks-haikei-flatBlueGrey.svg")`,
				}}
			>
				<div className="flex flex-col gap-6 xl:gap-16 py-16 px-6 sm:px-20">
					<div className="flex flex-col gap-6 lg:gap-12 xl:gap-24 2xl:flex-row">
						<div className="flex flex-col">
							<motion.h4
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left uppercase tracking-widest font-bold text-xl mb-2 text-yellow"
							>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="512"
										height="273"
										shapeRendering="geometricPrecision"
										textRendering="geometricPrecision"
										imageRendering="optimizeQuality"
										fillRule="evenodd"
										fill="#e78f01"
										clipRule="evenodd"
										viewBox="0 0 512 273.23"
										className="w-16 h-16 object-center object-contain"
									>
										<path
											fillRule="nonzero"
											d="m404.63 17.77 26.89 62.95 68.58 6.13c3.52.42 6.6 2.19 8.74 4.73 2.15 2.56 3.35 5.9 3.13 9.44l-.07.85c-.2 1.6-.67 3.11-1.36 4.48l-.32.57c-.59 1.03-1.32 1.98-2.15 2.81l-52.28 45.69 15.26 66.77c.84 3.62.11 7.27-1.73 10.19-1.83 2.9-4.8 5.14-8.43 5.96-1.79.4-3.62.43-5.36.12-1.69-.3-3.3-.93-4.74-1.83l-58.58-35.01-27.34 16.34-3.63-15.61 27.01-16.15a7.633 7.633 0 0 1 7.88-.03l59.09 35.32-15.34-67.1c-.59-2.66.23-5.54 2.42-7.46l51.85-45.27-68.1-6.12a7.621 7.621 0 0 1-6.8-4.64l-27.04-63.3-17.94 42.02-16.02-1.44 21.55-50.45c1.45-3.42 4.16-5.93 7.36-7.22 3.21-1.3 6.91-1.36 10.34.1l.59.28c1.4.67 2.64 1.57 3.66 2.6 1.23 1.19 2.19 2.67 2.88 4.28zM262.89 4.59l36.63 85.78 92.92 8.34c4.1.35 7.14 3.96 6.78 8.06-.17 2-1.12 3.74-2.52 4.96l-70.29 61.38 20.79 90.99c.93 4.01-1.59 8.02-5.61 8.94-2.05.47-4.11.04-5.75-1.03L256 224.27l-80.1 47.89c-3.53 2.11-8.1.96-10.22-2.58a7.365 7.365 0 0 1-.87-5.48l-.01-.01 20.8-90.98-70.3-61.38a7.445 7.445 0 0 1-.7-10.52 7.448 7.448 0 0 1 5.21-2.53l92.67-8.31 36.65-85.82c1.62-3.8 6-5.57 9.79-3.95 1.87.79 3.25 2.26 3.97 3.99zM119.79 27.6 92.75 90.9a7.61 7.61 0 0 1-6.8 4.64l-68.1 6.12 51.85 45.27a7.653 7.653 0 0 1 2.42 7.46l-15.33 67.1 59.08-35.32c2.51-1.5 5.53-1.39 7.88.03l27.05 16.17-3.57 15.65-27.44-16.4-58.58 35.02c-1.44.89-3.05 1.52-4.74 1.82-1.74.31-3.57.28-5.35-.12-3.65-.82-6.61-3.06-8.44-5.96-1.83-2.93-2.56-6.57-1.73-10.19l15.26-66.77-52.28-45.69c-.83-.83-1.56-1.78-2.15-2.81l-.31-.57c-.7-1.37-1.17-2.88-1.37-4.48l-.07-.82c-.22-3.56.98-6.9 3.13-9.47 2.14-2.55 5.22-4.31 8.75-4.73l68.57-6.13 26.89-62.95c.69-1.61 1.66-3.09 2.86-4.29 1.04-1.02 2.27-1.91 3.67-2.58l.61-.29c3.41-1.46 7.12-1.4 10.33-.11 3.2 1.3 5.91 3.81 7.36 7.23l21.54 50.43-16 1.44-17.95-42z"
										/>
									</svg>
								</span>
								<span>Star Project</span>
							</motion.h4>
							<motion.span
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-center lg:text-left uppercase tracking-wider font-bold text-lg mb-10 text-white"
							>
								Fully featured web application with cloud database
							</motion.span>
							<motion.h2
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="break-words text-center lg:text-left uppercase font-bold text-6xl sm:text-7xl lg:text-8xl text-white"
							>
								BlueInventory
							</motion.h2>
						</div>
						<div className="flex flex-col">
							<motion.span
								initial={initial}
								viewport={{once: true}}
								whileInView={fadeInUp}
								className="text-center mb-3 lg:text-left text-xl sm:text-2xl text-purple"
							>
								BlueInventory is your powerful non-commerce inventory management
								solution. Simpler Inventory, easier growth, better management.
							</motion.span>
							<Paragraph
								content={`<p>BlueInventory was born out of the vision to revolutionize how businesses approach inventory management. By reducing complexity, enhancing precision, and fostering growth, it's poised to become the industry benchmark, setting new standards for operational excellence.</p>`}
								tailwindStyling="mb-6 text-xl sm:text-2xl text-white text-center lg:text-left"
							/>
							<div className="flex flex-col sm:flex-row gap-6 xl:gap-12 mt-6 items-center justify-center lg:justify-start">
								<Link target="blank" href={`/projects/blueInventory`}>
									<motion.button
										role="button"
										type="button"
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="relative flex items-center justify-center rounded-sm overflow-hidden  bg-yellow font-semibold px-6 py-3 transition-all group ease-in-out duration-200"
									>
										<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
										<div className="flex gap-4 relative mx-auto items-center justify-center">
											<span className="text-medium font-medium text-left text-white">
												More Information
											</span>
										</div>
									</motion.button>
								</Link>
								<Link target="blank" href={`https://blueinventory.vercel.app/`}>
									<motion.button
										role="button"
										type="button"
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="relative flex items-center justify-center rounded-sm overflow-hidden bg-yellow font-semibold px-6 py-3 transition-all group ease-in-out duration-200"
									>
										<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
										<div className="flex gap-4 relative mx-auto items-center justify-center">
											<span className="text-medium font-medium text-left text-white">
												Live Link
											</span>
										</div>
									</motion.button>
								</Link>
								<Link
									target="blank"
									href={`https://github.com/Todd-Owen-Mpeli`}
								>
									<motion.button
										role="button"
										type="button"
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											version="1.1"
											id="Capa_1"
											x="0px"
											y="0px"
											viewBox="0 0 24 24"
											width="512"
											height="512"
											fill="#e78f01"
											className="w-7 h-7 object-center object-contain"
										>
											<g>
												<path d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z" />
												<path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
												<path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
												<path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
												<path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
												<path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
												<path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
												<path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
											</g>
										</svg>
									</motion.button>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col-reverse xl:flex-row gap-6 xl:gap-16">
						<div className="w-full xl:w-[75%]">
							<Link
								target="blank"
								className="w-full h-full"
								href={`https://blueinventory.vercel.app`}
							>
								<Image
									width={1000}
									height={1000}
									src="/img/projects/BlueInventory-Inventory-Management-Software.jpg"
									alt={"BlueInventory Project"}
									className="w-full rounded-md h-full mb-6 object-center object-cover"
								/>
							</Link>
						</div>
						<div
							className={
								styles.techStack +
								" w-full xl:w-[25%] flex flex-col sm:flex-row xl:flex-col justify-between gap-16 sm:justify-center items-center sm:items-baseline xl:justify-between p-8 rounded-lg bg-white"
							}
						>
							<div className="flex flex-col">
								<motion.h3
									initial={initialTwo}
									viewport={{once: true}}
									whileInView={fadeIn}
									className="text-center lg:text-left font-bold text-lg mb-5 text-flatBlueGreyDarker"
								>
									<strong>Tech Stack:</strong>
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Firebase
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Next.js 13
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									React 18
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Advanced Custom Fields PRO
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Headless CMS
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Typescript
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Stripe
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Tailwindcss
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									REST API&apos;s
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Apollo & Apollo/client
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									FireStore Cloud Database
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Headless Wordpress API.
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									HTML 5
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									CSS
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Javascript
								</motion.h3>
							</div>
							<div className="flex flex-col">
								<motion.h3
									initial={initialTwo}
									viewport={{once: true}}
									whileInView={fadeIn}
									className="text-center lg:text-left font-bold text-lg my-5 text-flatBlueGreyDarker"
								>
									<strong>Sub Tech Stack:</strong>
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Google ReCaptcha v2
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Git & Github
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Cors
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Babel
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Posthog-js
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Formik
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Framer Motion Animation
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Dompurify & Isomorphic-dompurify
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Nodemailer
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Styled-components
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Validator
								</motion.h3>
								<motion.h3
									initial={initial}
									viewport={{once: true}}
									whileInView={fadeInUp}
									className="text-center lg:text-left text-base text-flatBlueGreyDarker"
								>
									Sitemap
								</motion.h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlueInventory;
