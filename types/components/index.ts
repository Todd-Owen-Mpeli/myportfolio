export interface IParagraphProps {
	content: string;
	tailwindStyling: string;
}

export type ITechStack = {
	text: string;
}[];

export type ISubTechStack = {
	text: string;
}[];

export type IImageGrid = {
	altText: string;
	sourceUrl: string;
}[];

export interface IContentGrid {
	title: string;
	subtitle: string;
	liveLink: string;
	paragraph: string;
	sideTitle: string;
	githubLink: string;
	isCompleted: boolean;
	paragraphTwo: string;
	techStack: ITechStack;
	sideParagraph: string;
	imageGrid: IImageGrid;
	paragraphThree: string;
	backgroundImage: string;
	subTechStack: ISubTechStack;
}

// layout
export interface ILayout {
	children: React.ReactNode;
}
