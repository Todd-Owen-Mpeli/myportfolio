// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {fadeIn, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

const Navbar: FC = () => {
	const [revealGoogleTranslateOptions, setRevealGoogleTranslateOptions] =
		useState(false);

	// Hides or Displays Google Translate Options
	const handleRevealGoogleTranslateOptions = () => {
		setRevealGoogleTranslateOptions(!revealGoogleTranslateOptions);
	};

	return (
		<>
			<nav
				id="navbar"
				className={
					styles.nav +
					" flex items-center justify-between gap-4 py-3 px-12 fixed w-full z-[999] bg-flatBlueGrey"
				}
			>
				<div className={styles.navButton}>
					<Link target="" href={`/`} className="flex gap-4">
						<Image
							width={500}
							height={500}
							id="avatarButton"
							data-dropdown-toggle="userDropdown"
							alt="Todd Owen Mpeli profile image"
							data-dropdown-placement="bottom-start"
							className="object-cover object-center min-w-10 min-h-10 w-12 h-12 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-[3px] ring-pinkPurple"
							src={`/img/professional-picture-two-16-11-2021-at-14-41.43)-two.jpg`}
						/>
						<motion.h2
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeIn}
							className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-center lg:text-left tracking-[0.075rem] uppercase font-bold text-lg"
						>
							<span className="border-b-2 border-yellow text-yellow tracking-widest mx-2 leading-[1.75rem]">
								Todd Owen Mpeli
							</span>
						</motion.h2>
					</Link>
				</div>
				<div className="flex items-center justify-center xl:justify-end gap-12">
					<Link
						target="blank"
						className="hidden sm:block"
						download="Todd Owen Mpeli - Front-end Developer CV.pdf"
						href={`/common/Todd-Owen-Mpeli-Front-end-Developer-CV.pdf`}
					>
						<motion.button
							role="button"
							type="button"
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							aria-label="Download CV Button"
							className="relative flex items-center justify-center rounded-full overflow-hidden border-2 border-white hover:border-yellow bg-transparent font-semibold px-6 py-1 transition-all group ease-in-out duration-200 focus:ring-[1px] focus:ring-white focus:ring-offset-1"
						>
							<div className="absolute top-0 w-full h-full transition duration-200 transform bg-yellow right-full group-hover:translate-x-full group-hover:scale-102" />
							<div className="flex gap-4 relative mx-auto items-center justify-center">
								<span className="text-medium font-medium text-left text-white">
									Resume
								</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										id="Outline"
										viewBox="0 0 24 24"
										width="512"
										height="512"
										fill="#ffffff"
										className="w-4 h-4 object-center object-contain"
									>
										<path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z" />
										<path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z" />
									</svg>
								</span>
							</div>
						</motion.button>
					</Link>
					<div
						className={
							styles.navButton +
							" flex items-center justify-center gap-6 sm:gap-8"
						}
					>
						<Link target="blank" href={`https://github.com/Todd-Owen-Mpeli`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								id="Capa_1"
								x="0px"
								y="0px"
								viewBox="0 0 24 24"
								width="512"
								height="512"
								fill="#ffffff"
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
						</Link>
						<Link
							target="blank"
							href={`https://www.linkedin.com/in/todd-mpeli-831b18121/`}
						>
							<svg
								fill="#ffffff"
								aria-hidden="true"
								viewBox="0 0 15 15"
								xmlns="http://www.w3.org/2000/svg"
								className="w-7 h-7 object-center object-contain"
							>
								<path
									fillRule="evenodd"
									d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
									clipRule="evenodd"
								/>
								<path d="M3 5.012H0V15h3V5.012Z" />
							</svg>
						</Link>
						<motion.button
							role="button"
							type="button"
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							onClick={handleRevealGoogleTranslateOptions}
							aria-label="Google Translate Options Button"
							className={
								revealGoogleTranslateOptions
									? "hidden"
									: "p-0 text-white transition duration-200 rounded-sm flex flex-row items-center justify-center gap-3"
							}
						>
							<svg
								id="Layer_1"
								fill="#ffffff"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 122.88 92.91"
								className="block w-full max-w-[35px] h-[35px] object-contain object-center"
							>
								<path d="M20.15,83.63,31.63,73.4a2.89,2.89,0,0,1,1.91-.73h27.8a.92.92,0,0,0,.93-.93V65.9H68v5.84a6.71,6.71,0,0,1-6.68,6.68H34.62L19.3,92.07a2.87,2.87,0,0,1-4.9-2V78.42H6.69A6.71,6.71,0,0,1,0,71.74V28.59a6.76,6.76,0,0,1,6.69-6.68H43.35v5.75H6.69a1,1,0,0,0-.94.93V71.74a.91.91,0,0,0,.28.65,1,1,0,0,0,.66.28H17.27a2.88,2.88,0,0,1,2.88,2.88v8.08Zm.21-19.48L29.6,36.24h8.83l9.24,27.91H40.35L38.8,59.07H29.15l-1.51,5.08ZM30.79,53.24h6.37L34,41.81,30.79,53.24ZM76.63,13.35h8.7V11.11a.69.69,0,0,1,.69-.69h4.65a.68.68,0,0,1,.68.69v2.24h9.76a.68.68,0,0,1,.68.69V18.5a.68.68,0,0,1-.68.68H99.56a26.3,26.3,0,0,1-.91,3.88l0,.06a26.07,26.07,0,0,1-1.74,4.15,32.34,32.34,0,0,1-2.14,3.43c-.67,1-1.41,1.9-2.2,2.83a35.78,35.78,0,0,0,3.68,3.83,41.43,41.43,0,0,0,5.09,3.74.68.68,0,0,1,.21.94l-2.39,3.73a.69.69,0,0,1-1,.2,45.88,45.88,0,0,1-5.58-4.08l0,0a41.42,41.42,0,0,1-4-4.1C87.3,38.93,86.15,40,85,41l0,0c-1.36,1.12-2.79,2.2-4.47,3.36a.69.69,0,0,1-1-.17L77,40.53a.69.69,0,0,1,.17-1c1.66-1.14,3-2.19,4.36-3.28,1.16-1,2.28-2,3.49-3.16a44.82,44.82,0,0,1-2.77-4.45A28.84,28.84,0,0,1,80,22.9a.68.68,0,0,1,.47-.84l4.27-1.19a.68.68,0,0,1,.84.47A22.62,22.62,0,0,0,89,28.7L90.27,27a26.33,26.33,0,0,0,1.51-2.47l0,0A19.43,19.43,0,0,0,93,21.62a24,24,0,0,0,.66-2.44h-17a.69.69,0,0,1-.69-.68V14a.69.69,0,0,1,.69-.69Zm27,56.82L88.26,56.51H61.54a6.73,6.73,0,0,1-6.69-6.68V6.69a6.71,6.71,0,0,1,2-4.72l.2-.18A6.67,6.67,0,0,1,61.54,0h54.65a6.69,6.69,0,0,1,4.71,2l.19.2a6.69,6.69,0,0,1,1.79,4.51V49.83a6.73,6.73,0,0,1-6.69,6.68h-7.7V68.13a2.88,2.88,0,0,1-4.91,2ZM91.26,51.49l11.47,10.23V53.64a2.88,2.88,0,0,1,2.88-2.88h10.58a.92.92,0,0,0,.65-.28.91.91,0,0,0,.29-.65V6.69a1,1,0,0,0-.22-.58L116.84,6a1,1,0,0,0-.65-.29H61.54A.94.94,0,0,0,61,6L60.89,6a.92.92,0,0,0-.28.65V49.83a.92.92,0,0,0,.93.93H89.35a2.86,2.86,0,0,1,1.91.73Z" />
							</svg>
						</motion.button>
						<motion.button
							role="button"
							type="button"
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							onClick={handleRevealGoogleTranslateOptions}
							aria-label="Google Translate Options Button"
							className={
								revealGoogleTranslateOptions ? "block ml-2 mr-16" : "hidden"
							}
						>
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className={
									styles.closeGoogleTranslateSVG +
									" w-[32px] h-[32px] object-contain object-center"
								}
							>
								<path
									d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
									stroke="#ffffff"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
								<path
									d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
									stroke="#ffffff"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</motion.button>
						<motion.button
							role="button"
							type="button"
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							id="google_translate_element"
							aria-label="Google Translate Options Button"
							className={revealGoogleTranslateOptions ? "block" : "hidden"}
						/>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
