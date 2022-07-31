import * as React from "react";
import { SVGProps } from "react";
const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 14 14"
		className="typesCreatedAt"
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
		<path d="M7.014 14c1.79 0 3.582-.69 4.943-2.068 2.724-2.72 2.724-7.172 0-9.892-2.724-2.72-7.181-2.72-9.905 0A6.972 6.972 0 0 0 0 6.996c0 1.88.728 3.633 2.052 4.955A7.058 7.058 0 0 0 7.014 14ZM3.729 7.01v1.645h4.745v-5.47H6.633v3.63H3.73v.194Zm-1.89-.014c0-1.379.542-2.67 1.522-3.648 2.006-2.005 5.287-2.007 7.298-.009l.008.009a5.168 5.168 0 0 1 0 7.295c-2.01 2.007-5.297 2.007-7.306 0A5.119 5.119 0 0 1 1.84 6.996Z" />
	</svg>
);

export default ClockIcon;
