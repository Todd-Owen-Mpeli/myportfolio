// Import
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {initial, fadeInUp, initialTwo, fadeIn} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Projects: FC = () => {
	return (
		<>
			<section
				id="projects"
				className="px-4 sm:px-10 py-24 sm:py-44 min-h-[250px] bg-yellow flex flex-col items-center justify-center gap-12 bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/background/stacked-waves-haikei-purple-pinkPurple.svg")`,
				}}
			>
				<div className="flex flex-col items-center">
					<motion.h4
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className="text-center lg:text-left uppercase font-bold text-6xl sm:text-8xl lg:text-9xl text-pinkPurple"
					>
						Projects
					</motion.h4>
					<div className="mt-12 xl:mt-28 grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-6 xl:gap-y-12">
						<div className="flex flex-col gap-2 items-center justify-center bg-flatBlueGreyDarker py-8 px-4 sm:p-8 rounded-md">
							<Link
								target="blank"
								className="w-full h-full"
								href={`https://dbmx-racing.vercel.app`}
							>
								<Image
									width={1000}
									height={1000}
									src="/img/projects/DBMX-Racing-Motocross-Accessories-Parts.jpg"
									alt={"DBMX Racing Project"}
									className="w-full rounded-md h-[300px] sm:h-[400px] mb-6 object-center object-cover"
								/>
							</Link>
							<div className="flex flex-col xl:flex-row gap-4 items-center justify-between w-full">
								<div className="flex flex-col gap-4 xl:gap-8 justify-between items-center">
									<h3 className="uppercase text-center lg:text-left font-[900] text-xl sm:text-2xl lg:text-3xl text-white tracking-[0.25rem]">
										DBMX Racing Website
									</h3>
									<Paragraph
										content={`<p>This is a Next.js 13 project website I've built for a Motocross accessories and parts local business. Is a project I've built for a reputable motocross accessories and parts shop in Gloucester. Presented and aimed at revitalizing and modernizing older version of the client website.
										</br>
										</br>
										I optimize the clients website to deliver an exceptional browsing experience. And implement up-to-date SEO strategies to attract more organic traffic.
										</p>`}
										tailwindStyling="text-base max-w-lg text-white text-center lg:text-left"
									/>
									<div>
										<h3 className="uppercase text-center lg:text-left font-[900] text-xl text-white mt-8 sm:mt-4">
											Tech stack
										</h3>
										<Paragraph
											content={`<p>Next.js 13,  React 18, Typescript, Tailwindcss, and a Headless CMS, REST API&apos;s, Apollo & Apollo/client, Sitemap, Google ReCaptcha v2, HTML 5, CSS3, Javascript, Framer Motion Animation.</p>`}
											tailwindStyling="text-sm mt-2 max-w-lg text-darkGrey text-center lg:text-left"
										/>
									</div>
								</div>
								<div className="flex flex-col lg:flex-row xl:flex-col gap-6 mt-6 items-center justify-center lg:justify-start">
									<Link target="blank" href={`/projects/DBMXRacing`}>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-pinkRed font-semibold px-6 py-2 transition-all group ease-in-out duration-200 focus:ring-[1px] focus:ring-pinkRed focus:ring-offset-1"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													More Info
												</span>
											</div>
										</motion.button>
									</Link>
									<Link target="blank" href={`https://dbmx-racing.vercel.app`}>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-pinkRed font-semibold px-6 py-2 transition-all group ease-in-out duration-200 focus:ring-[1px] focus:ring-pinkRed focus:ring-offset-1"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													Live Link
												</span>
											</div>
										</motion.button>
									</Link>
									<Link
										target="blank"
										href={`https://github.com/Todd-Owen-Mpeli/DBMX-Racing`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
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
						<div className="flex flex-col gap-2 items-center justify-center bg-flatBlueGreyDarker py-8 px-4 sm:p-8 rounded-md">
							<Link
								target="blank"
								className="w-full h-full"
								href={`https://freemanseventpartners.co.uk/`}
							>
								<Image
									width={1000}
									height={1000}
									src="/img/projects/Freemans-Event-Partners.png"
									alt={"Freemans Event Partners Project"}
									className="w-full rounded-md h-[300px] sm:h-[400px] mb-6 object-center object-cover"
								/>
							</Link>
							<div className="flex flex-col xl:flex-row gap-4 items-center justify-between w-full">
								<div className="flex flex-col gap-4 xl:gap-8 justify-between items-center">
									<h3 className="uppercase text-center lg:text-left font-[900] text-xl sm:text-2xl lg:text-3xl text-white tracking-[0.25rem]">
										Freemans Event Partners Website
									</h3>
									<Paragraph
										content={`<p>Freemans Event Partners is a family owned business,  operating across a wide range of high-profile event venues and festivals. As the lead react.js developer contributor. I collaborate with other developers to create & integrate modern features and functionalities.
										<br/>
										<br/>
										I optimize the clients website to deliver an exceptional browsing experience. And implement up-to-date SEO strategies to attract more organic traffic.</p>`}
										tailwindStyling="text-base max-w-lg text-white text-center lg:text-left"
									/>
									<div>
										<h3 className="uppercase text-center lg:text-left font-[900] text-xl text-white mt-8 sm:mt-4">
											Tech stack
										</h3>
										<Paragraph
											content={`<p>Next.js 9,  React 16, Typescript, Tailwindcss, and a Headless CMS, REST API&apos;s, Apollo & Axios, Sitemap, Google ReCaptcha v2, HTML 5, CSS3, Javascript.</p>`}
											tailwindStyling="text-sm mt-2 max-w-lg text-darkGrey text-center lg:text-left"
										/>
									</div>
								</div>
								<div className="flex flex-col lg:flex-row xl:flex-col gap-6 mt-6 items-center justify-center lg:justify-start">
									<Link
										target="blank"
										href={`https://github.com/bracecreative/freemans`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-pinkRed font-semibold px-6 py-2 transition-all group ease-in-out duration-200 focus:ring-[1px] focus:ring-pinkRed focus:ring-offset-1"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													More Info
												</span>
											</div>
										</motion.button>
									</Link>
									<Link
										target="blank"
										href={`https://freemanseventpartners.co.uk/`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-yellow font-semibold px-6 py-2 transition-all group ease-in-out duration-200"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													Live Link
												</span>
											</div>
										</motion.button>
									</Link>
									<Link
										target="blank"
										href={`https://github.com/bracecreative/freemans`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
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
						<div className="flex flex-col gap-2 items-center justify-center bg-flatBlueGreyDarker py-8 px-4 sm:p-8 rounded-md">
							<Link
								target="blank"
								className="w-full h-full"
								href={`https://mponjolimpeliapartments.vercel.app`}
							>
								<Image
									width={1000}
									height={1000}
									src="/img/projects/MponjoliMpeli-Apartments.png"
									alt={"MponjoliMpeli Apartments Project"}
									className="w-full rounded-md h-[300px] sm:h-[400px] mb-6 object-center object-cover"
								/>
							</Link>
							<div className="flex flex-col xl:flex-row gap-4 items-center justify-between w-full">
								<div className="flex flex-col gap-4 xl:gap-8 justify-between items-center">
									<h3 className="uppercase text-center lg:text-left font-[900] text-xl sm:text-2xl lg:text-3xl text-white tracking-[0.25rem]">
										MponjoliMpeli Apartments Website
									</h3>
									<Paragraph
										content={`<p>This is a Next.js 13 project website I've built for a Letting Apartment Business.
										</br>
										</br>
										Enhanced functionality, Improved performance & contemporary design was the focus. I wanted to achieve a reduction in page load times, integrate modern features and functionalities, and ensuring the website is user-friendly and responsive across all devices.</p>`}
										tailwindStyling="text-base max-w-lg text-white text-center lg:text-left"
									/>
									<div>
										<h3 className="uppercase text-center lg:text-left font-[900] text-xl text-white mt-8 sm:mt-4">
											Tech stack
										</h3>
										<Paragraph
											content={`<p>Next.js 13,  React 18, Typescript, Tailwindcss, and a Headless CMS, REST API&apos;s, Apollo & Apollo/client, Sitemap, Google ReCaptcha v2, HTML 5, CSS3, Javascript, Framer Motion Animation.</p>`}
											tailwindStyling="text-sm mt-2 max-w-lg text-darkGrey text-center lg:text-left"
										/>
									</div>
								</div>
								<div className="flex flex-col lg:flex-row xl:flex-col gap-6 mt-6 items-center justify-center lg:justify-start">
									<Link
										target="blank"
										href={`/projects/MponjoliMpeli-Apartments`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-pinkRed font-semibold px-6 py-2 transition-all group ease-in-out duration-200 focus:ring-[1px] focus:ring-pinkRed focus:ring-offset-1"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													More Info
												</span>
											</div>
										</motion.button>
									</Link>
									<Link
										target="blank"
										href={`https://mponjolimpeliapartments.vercel.app/`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-yellow font-semibold px-6 py-2 transition-all group ease-in-out duration-200"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													Live Link
												</span>
											</div>
										</motion.button>
									</Link>
									<Link
										target="blank"
										href={`https://github.com/Todd-Owen-Mpeli/MponjoliMpeli-Apartments`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
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
						<div className="flex flex-col gap-2 items-center justify-center bg-flatBlueGreyDarker py-8 px-4 sm:p-8 rounded-md">
							<Link
								target="blank"
								className="w-full h-full"
								href={`https://kandys-launderette.vercel.app`}
							>
								<Image
									width={1000}
									height={1000}
									src="/img/projects/kandys-launderette.png"
									alt={"kandys launderette Project"}
									className="w-full rounded-md h-[300px] sm:h-[400px] mb-6 object-center object-cover"
								/>
							</Link>
							<div className="flex flex-col xl:flex-row gap-4 items-center justify-between w-full">
								<div className="flex flex-col gap-4 xl:gap-8 justify-between items-center">
									<h3 className="uppercase text-center lg:text-left font-[900] text-xl sm:text-2xl lg:text-3xl text-white tracking-[0.25rem]">
										Kandys Launderette Website
									</h3>
									<Paragraph
										content={`<p>Kandy's Launderette is a small Dry-cleaning store providing a multitude of services, Duvets & Quilts Cleaning, Drying & Washing Machines, Washing Detergent, Professional Ironing and Stain Removing.
										</br>
										</br>
										As a dry-cleaning store all its services are all in-store experience however this store doesn't have an online website for its customers.</p>`}
										tailwindStyling="text-base max-w-lg text-white text-center lg:text-left"
									/>
									<div>
										<h3 className="uppercase text-center lg:text-left font-[900] text-xl text-white mt-8 sm:mt-4">
											Tech stack
										</h3>
										<Paragraph
											content={`<p>Next.js 13,  React 18, Typescript, Tailwindcss, and a Headless CMS, REST API&apos;s, Apollo & Apollo/client, Sitemap, Google ReCaptcha v2, HTML 5, CSS3, Javascript, Framer Motion Animation.</p>`}
											tailwindStyling="text-sm mt-2 max-w-lg text-darkGrey text-center lg:text-left"
										/>
									</div>
								</div>
								<div className="flex flex-col lg:flex-row xl:flex-col gap-6 mt-6 items-center justify-center lg:justify-start">
									<Link
										target="blank"
										href={`https://github.com/Todd-Owen-Mpeli/KandysLaunderette`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-pinkRed font-semibold px-6 py-2 transition-all group ease-in-out duration-200 focus:ring-[1px] focus:ring-pinkRed focus:ring-offset-1"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													More Info
												</span>
											</div>
										</motion.button>
									</Link>
									<Link
										target="blank"
										href={`https://kandys-launderette.vercel.app/`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="relative flex items-center justify-center rounded-sm overflow-hidden bg-yellow font-semibold px-6 py-2 transition-all group ease-in-out duration-200"
										>
											<div className="absolute top-0 w-full h-full transition duration-200 transform bg-purple right-full group-hover:translate-x-full group-hover:scale-102" />
											<div className="flex gap-4 relative mx-auto items-center justify-center">
												<span className="text-medium font-medium text-center text-white">
													Live Link
												</span>
											</div>
										</motion.button>
									</Link>
									<Link
										target="blank"
										href={`https://github.com/Todd-Owen-Mpeli/KandysLaunderette`}
									>
										<motion.button
											role="button"
											type="button"
											initial={initialTwo}
											whileInView={fadeIn}
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
					</div>
				</div>
			</section>
		</>
	);
};

export default Projects;
