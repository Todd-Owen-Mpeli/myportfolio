export interface IParagraphProps {
	content: string;
	tailwindStyling: string;
}

export interface IContentGrid {
	techStack: {
		text: string;
	}[];
	subTechStack: {
		text: string;
	}[];
	imageGrid: {
		altText: string;
		sourceUrl: string;
	}[];
	title: string;
	subtitle: string;
	liveLink: string;
	paragraph: string;
	sideTitle: string;
	githubLink: string;
	isCompleted: boolean;
	paragraphTwo: string;
	sideParagraph: string;
	paragraphThree: string;
	backgroundImage: string;
}

// layout
export interface ILayout {
	children: React.ReactNode;
}
