// Import
import Head from "next/head";
import {useGlobalContext} from "@/context/Global";

const MetaTag = () => {
	const content = useGlobalContext();
	return (
		<Head>
			{/* <!-- Website Title --> */}
			<title key="title">{`${content.name} | Developer Portfolio`}</title>
			<meta name="description" content="" />
			<link
				rel="icon"
				href="/img/professional-picture-two-16-11-2021-at-14-41.43).ico"
			/>
			<meta name="robots" content="" key="metaRobots" />
			<link rel="canonical" href="" key="metaCanonical" />

			{/* OpenGraph */}
			<meta property="og:title" content="" key="ogTitle" />
			<meta name="og:url" content="" key="ogUrl" />
			<meta name="og:image" content="" key="ogImage" />
			<meta name="image" property="og:image" content="" key="ogLinkedInImage" />
			<meta name="og:description" content="" key="ogDesc" />

			{/* Twitter */}
			<meta name="twitter:title" content="" key="twitterTitle" />
			<meta name="twitter:description" content="" key="twitterDesc" />
			<meta name="twitter:image" content="" key="twitterImage" />
			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twitterCard"
			/>
		</Head>
	);
};

export default MetaTag;
