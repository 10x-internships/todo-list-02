import * as React from "react";
import { SVGProps } from "react";

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 14 14"
		className="plusThick"
		style={{
			width: 16,
			height: 16,
			display: "block",
			fill: "rgba(55,53,47,.45)",
			flexShrink: 0,
			backfaceVisibility: "hidden",
		}}
		{...props}
	>
		<path d="M2 7.164c0 .433.36.787.787.787h3.59v3.589a.79.79 0 0 0 .787.787.79.79 0 0 0 .787-.787V7.95h3.589a.79.79 0 0 0 .787-.786.79.79 0 0 0-.787-.788H7.95V2.787A.793.793 0 0 0 7.165 2a.793.793 0 0 0-.788.787v3.59H2.787A.793.793 0 0 0 2 7.163Z" />
	</svg>
);

export default AddIcon;
