import * as React from "react";
import { SVGProps } from "react";

const SettingIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 14 14"
		className="sidebarSettings"
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
		<path d="M14 7.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45L7.77.01h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 6.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 7.75v.02ZM7 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z" />
	</svg>
);

export default SettingIcon;
