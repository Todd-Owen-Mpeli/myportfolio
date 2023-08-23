// Import
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";

const sitemap = async (req: any, res: any) => {
	// Pages Arrays
	const pagesLinks: any = [
		{
			url: `/`,
			changefreq: "monthly",
			lastmod: "2023-08-22T22:02:10.000Z",
			priority: 0.8,
		},
		{
			url: `/projects/blueinventory`,
			changefreq: "monthly",
			lastmod: "2023-08-22T22:02:10.000Z",
			priority: 0.8,
		},
		{
			url: `/projects/DBMXRacing`,
			changefreq: "monthly",
			lastmod: "2023-08-22T22:02:10.000Z",
			priority: 0.8,
		},
	];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(pagesLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};

export default sitemap;
