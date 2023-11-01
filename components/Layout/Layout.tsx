// Imports
import {FC} from "react";
import {ILayout} from "@/types/components/index";

// Components
import MetaTag from "@/components/Meta/MetaTag";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<div className="w-full max-w-[2560px] mx-auto">{children}</div>
		</>
	);
};

export default Layout;
