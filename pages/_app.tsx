// Imports
import {useRouter} from "next/router";
import type {AppProps} from "next/app";
import {useState, useEffect} from "react";

// PostHog Cookies Policy
import postHog from "posthog-js";
import {PostHogProvider} from "posthog-js/react";

// Styling
import "../styles/globals.scss";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout/Layout";
import GlobalContextProvider from "@/components/context/GlobalContextProvider";
import PostHogContextProvider from "@/components/context/PostHogProviderContext";
import GoogleTranslateContextProvider from "@/components/context/GoogleTranslateContextProvider";

export default function App({Component, pageProps}: AppProps) {
	// COOKIES POLICY //
	// PostHog Cookies Policy
	const router: any = useRouter();

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
			<GlobalContextProvider name={`Todd Owen Mpeli`}>
				<GoogleTranslateContextProvider>
					<Layout>
						{/* Cookie Policy Pop Up */}
						<PostHogContextProvider />
						<Loading />
						<Component {...pageProps} />
						<Footer />
					</Layout>
				</GoogleTranslateContextProvider>
			</GlobalContextProvider>
		</PostHogProvider>
	);
}
