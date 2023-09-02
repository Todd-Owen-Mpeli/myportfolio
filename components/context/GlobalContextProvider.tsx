import {FC} from "react";
import {GlobalContext} from "@/context/Global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	name,
	children,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				name: name,
				email: `${process.env.EMAIL_USER}`,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
