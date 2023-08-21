// Import
import {useRouter} from "next/router";
import type {AppProps} from "next/app";
import {useState, useEffect} from "react";

// PostHog Cookies Policy
import postHog from "posthog-js";
import {PostHogProvider} from "posthog-js/react";

// Global Context Provider
import {GlobalContext} from "@/context/Global";
import CookiePolicyCard from "@/components/Elements/CookiePolicyCard";

// Styling
import "../styles/globals.scss";
import Layout from "@/components/Layout/Layout";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
	postHog.init(`${process.env.POSTHOG_KEY}`, {
		api_host: `${process.env.POSTHOG_HOST}` || "https://app.posthog.com",
		// Disable in development
		loaded: (postHog) => {
			if (process.env.NODE_ENV === "development") postHog.opt_out_capturing();
		},
	});
}

export default function App({Component, pageProps}: AppProps) {
	// COOKIES POLICY //
	// PostHog Cookies Policy
	const router: any = useRouter();

	useEffect(() => {
		// Track page views
		const handleRouteChange = () => postHog?.capture("$pageview");
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	});

	// PAGE LOADING ANIMATION //
	// Page Animation Loader
	function Loading() {
		const [loading, setLoading]: any = useState(false);

		useEffect(() => {
			const handleStart = (url: any) =>
				url !== router.asPath && setLoading(true);
			const handleComplete = (url: any) =>
				url === router.asPath &&
				setTimeout(() => {
					setLoading(false);
				}, 7000);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);

			return () => {
				router.events.off("routeChangeStart", handleStart);
				router.events.off("routeChangeComplete", handleComplete);
				router.events.off("routeChangeError", handleComplete);
			};
		});

		return (
			loading && (
				<div className="spinner-wrapper">
					{/* LEGO SPINNER */}
					<div className="loader">
						<div className="box box0">
							<div></div>
						</div>
						<div className="box box1">
							<div></div>
						</div>
						<div className="box box2">
							<div></div>
						</div>
						<div className="box box3">
							<div></div>
						</div>
						<div className="box box4">
							<div></div>
						</div>
						<div className="box box5">
							<div></div>
						</div>
						<div className="box box6">
							<div></div>
						</div>
						<div className="box box7">
							<div></div>
						</div>
						<div className="ground">
							<div></div>
						</div>
					</div>
				</div>
			)
		);
	}

	return (
		<PostHogProvider client={postHog}>
			<GlobalContext.Provider
				value={{
					name: `Todd Owen Mpeli`,
					email: `${process.env.EMAIL_USER}`,
				}}
			>
				{/* Cookie Policy Pop Up */}
				{postHog.has_opted_in_capturing() ||
				postHog.has_opted_out_capturing() ? null : (
					<CookiePolicyCard />
				)}
				<Layout>
					<Loading />
					<Component {...pageProps} />
				</Layout>
			</GlobalContext.Provider>
		</PostHogProvider>
	);
}
