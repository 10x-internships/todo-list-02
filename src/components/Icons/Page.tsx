import * as React from "react";
import { SVGProps } from "react";

const PageIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 30 30"
		className="page"
		style={{
			width: 18,
			height: 18,
			display: "block",
			fill: "rgba(55,53,47,.45)",
			flexShrink: 0,
			backfaceVisibility: "hidden",
		}}
		{...props}
	>
		<path d="M16 1H4v28h22V11L16 1zm0 2.828L23.172 11H16V3.828zM24 27H6V3h8v10h10v14zM8 17h14v-2H8v2zm0 4h14v-2H8v2zm0 4h14v-2H8v2z" />
	</svg>
);

export default PageIcon;
