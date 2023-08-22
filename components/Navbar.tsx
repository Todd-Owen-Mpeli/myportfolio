// Import
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import styles from "@/styles/components/Navbar.module.scss";
import {initial, fadeInUp, stagger} from "@/animations/animations";

const Navbar: FC = () => {
	return (
		<>
			<motion.nav
				id="navbar"
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex items-center justify-between gap-4 py-6 px-12 fixed w-full z-[999] bg-flatBlueGreyDarker bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/background/stacked-waves-haikei-flatBlueGrey-two.svg")`,
				}}
			>
				<div className={styles.nav}>
					<Link target="blank" href={`/`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							width="1080"
							height="1080"
							viewBox="0 0 1080 1080"
							className="w-7 h-7 object-center object-contain"
						>
							<g transform="matrix(60 0 0 60 540 540)">
								<path
									style={{
										stroke: "none",
										strokeWidth: "1",
										strokeDasharray: "none",
										strokeLinecap: "butt",
										strokeDashoffset: "0",
										strokeLinejoin: "miter",
										strokeMiterlimit: "4",
										fillRule: "nonzero",
										opacity: "1",
									}}
									transform=" translate(-9, -9)"
									d="M 7.33329 9.83329 L 1.49996 9.83329 C 1.27895 9.83329 1.06698 9.92109 0.910704 10.0774 C 0.754423 10.2337 0.666626 10.4456 0.666626 10.6666 L 0.666626 16.5 C 0.666626 16.721 0.754423 16.9329 0.910704 17.0892 C 1.06698 17.2455 1.27895 17.3333 1.49996 17.3333 L 7.33329 17.3333 C 7.55431 17.3333 7.76627 17.2455 7.92255 17.0892 C 8.07883 16.9329 8.16663 16.721 8.16663 16.5 L 8.16663 10.6666 C 8.16663 10.4456 8.07883 10.2337 7.92255 10.0774 C 7.76627 9.92109 7.55431 9.83329 7.33329 9.83329 Z M 6.49996 15.6666 L 2.33329 15.6666 L 2.33329 11.5 L 6.49996 11.5 L 6.49996 15.6666 Z M 16.5 0.666626 L 10.6666 0.666626 C 10.4456 0.666626 10.2337 0.754423 10.0774 0.910704 C 9.92109 1.06698 9.83329 1.27895 9.83329 1.49996 L 9.83329 7.33329 C 9.83329 7.55431 9.92109 7.76627 10.0774 7.92255 C 10.2337 8.07883 10.4456 8.16663 10.6666 8.16663 L 16.5 8.16663 C 16.721 8.16663 16.9329 8.07883 17.0892 7.92255 C 17.2455 7.76627 17.3333 7.55431 17.3333 7.33329 L 17.3333 1.49996 C 17.3333 1.27895 17.2455 1.06698 17.0892 0.910704 C 16.9329 0.754423 16.721 0.666626 16.5 0.666626 Z M 15.6666 6.49996 L 11.5 6.49996 L 11.5 2.33329 L 15.6666 2.33329 L 15.6666 6.49996 Z M 16.5 9.83329 L 10.6666 9.83329 C 10.4456 9.83329 10.2337 9.92109 10.0774 10.0774 C 9.92109 10.2337 9.83329 10.4456 9.83329 10.6666 L 9.83329 16.5 C 9.83329 16.721 9.92109 16.9329 10.0774 17.0892 C 10.2337 17.2455 10.4456 17.3333 10.6666 17.3333 L 16.5 17.3333 C 16.721 17.3333 16.9329 17.2455 17.0892 17.0892 C 17.2455 16.9329 17.3333 16.721 17.3333 16.5 L 17.3333 10.6666 C 17.3333 10.4456 17.2455 10.2337 17.0892 10.0774 C 16.9329 9.92109 16.721 9.83329 16.5 9.83329 Z M 15.6666 15.6666 L 11.5 15.6666 L 11.5 11.5 L 15.6666 11.5 L 15.6666 15.6666 Z M 7.33329 0.666626 L 1.49996 0.666626 C 1.27895 0.666626 1.06698 0.754423 0.910704 0.910704 C 0.754423 1.06698 0.666626 1.27895 0.666626 1.49996 L 0.666626 7.33329 C 0.666626 7.55431 0.754423 7.76627 0.910704 7.92255 C 1.06698 8.07883 1.27895 8.16663 1.49996 8.16663 L 7.33329 8.16663 C 7.55431 8.16663 7.76627 8.07883 7.92255 7.92255 C 8.07883 7.76627 8.16663 7.55431 8.16663 7.33329 L 8.16663 1.49996 C 8.16663 1.27895 8.07883 1.06698 7.92255 0.910704 C 7.76627 0.754423 7.55431 0.666626 7.33329 0.666626 Z M 6.49996 6.49996 L 2.33329 6.49996 L 2.33329 2.33329 L 6.49996 2.33329 L 6.49996 6.49996 Z"
									strokeLinecap="round"
									fill="#ffffff"
								/>
							</g>
						</svg>
					</Link>
				</div>
				<div className="flex items-center justify-center xl:justify-end gap-12">
					<Link
						target="blank"
						className="hidden sm:block"
						href={`Todd Owen Mpeli CV.pdf`}
						download="Todd Owen Mpeli CV.pdf"
					>
						<motion.button
							role="button"
							type="button"
							initial={initial}
							whileInView={fadeInUp}
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
							styles.nav + " flex items-center justify-center gap-6 sm:gap-12"
						}
					>
						<Link
							target="blank"
							// className="hidden sm:block"
							href={`https://github.com/Todd-Owen-Mpeli`}
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
							// className="hidden sm:block"
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
					</div>
				</div>
			</motion.nav>
		</>
	);
};

export default Navbar;
