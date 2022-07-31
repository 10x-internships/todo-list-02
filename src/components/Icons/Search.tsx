import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 14 14"
		className="sidebarSearch"
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
		<path d="M5.922.54C2.941.54.5 2.98.5 5.962c0 2.982 2.44 5.423 5.422 5.423 1.101 0 2.13-.329 2.988-.898l3.236 3.193a1.088 1.088 0 0 0 1.536 0 1.08 1.08 0 0 0 0-1.53l-3.241-3.2a5.39 5.39 0 0 0 .904-2.988c0-2.981-2.44-5.422-5.423-5.422Zm0 2.169a3.237 3.237 0 0 1 3.254 3.253 3.237 3.237 0 0 1-3.254 3.254A3.237 3.237 0 0 1 2.67 5.962 3.237 3.237 0 0 1 5.922 2.71Z" />
	</svg>
);

export default SearchIcon;
