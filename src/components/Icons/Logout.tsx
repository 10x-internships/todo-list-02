import * as React from "react";
import { SVGProps } from "react";

const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M16 13v-2H7V8l-5 4 5 4v-3h9Z" fill="#484848" />
		<path
			d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2Z"
			fill="#484848"
		/>
	</svg>
);

export default LogoutIcon;
