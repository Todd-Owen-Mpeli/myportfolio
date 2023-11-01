export interface IGlobalContext {
	name: string;
	email: string;
}
export type IGlobalContextProvider = {
	name: string;
	children: React.ReactNode;
};
export type IGoogleTranslateContextProvider = {
	children: React.ReactNode;
};
