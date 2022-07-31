import * as React from "react";
import { SVGProps } from "react";

const TemplatesIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 14 14"
		className="sidebarTemplates"
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="m7.237 1 7.84 1.237-1.201 7.61L11.5 6.15 9.424 9.38 6 8.84 7.237 1zM5.545 5.31a4 4 0 1 0 2.29 4.832l-2.979-.47.689-4.363zM7 15l4.5-7 4.5 7H7z"
		/>
	</svg>
);

export default TemplatesIcon;
