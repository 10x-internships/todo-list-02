import * as React from "react";
import { SVGProps } from "react";

const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 14 14"
		className="sidebarTrash"
		style={{
			width: 14,
			height: "100%",
			display: "block",
			fill: "rgba(55,53,47,.45)",
			flexShrink: 0,
			backfaceVisibility: "hidden",
		}}
		{...props}
	>
		<path d="M13.5 3.24c0 1.318-1.577 8.81-1.577 8.838 0 .58-2.185 1.922-4.881 1.922-2.697 0-4.882-1.343-4.882-1.922C2.16 12.054.5 4.558.5 3.24.5 1.918 3.027 0 7.035 0S13.5 1.918 13.5 3.24ZM7 2C3.625 2 2.5 3.25 2.5 4S3.625 6 7 6s4.5-1.25 4.5-2S10.375 2 7 2Z" />
	</svg>
);

export default TrashIcon;
