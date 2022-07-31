import * as React from "react";
import { SVGProps } from "react";

const ImportIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 14 14"
		className="sidebarImport"
		style={{
			width: "100%",
			height: 15,
			display: "block",
			fill: "rgba(55,53,47,.45)",
			flexShrink: 0,
			backfaceVisibility: "hidden",
		}}
		{...props}
	>
		<path d="m11.286 6.057-1.2-1.2-2.229 2.29V1H6.143v6.148l-2.229-2.29-1.2 1.2L7 10.427l4.286-4.37ZM1 11.286V13h12v-1.714H1Z" />
	</svg>
);

export default ImportIcon;
