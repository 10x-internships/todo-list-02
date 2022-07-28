import * as React from "react"
import { SVGProps } from "react"

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.579 2 2 6.579 2 12c0 3.189 1.592 6.078 4 7.924V20h.102C7.77 21.245 9.813 22 12 22s4.23-.755 5.898-2H18v-.076c2.408-1.846 4-4.734 4-7.924 0-5.421-4.579-10-10-10ZM8.074 18.927A3.002 3.002 0 0 1 11 16.573h2a3.003 3.003 0 0 1 2.926 2.354A7.82 7.82 0 0 1 12 20a7.82 7.82 0 0 1-3.926-1.073Zm9.536-1.286A5.007 5.007 0 0 0 13 14.573h-2a5.007 5.007 0 0 0-4.61 3.068C4.923 16.182 4 14.176 4 12c0-4.337 3.663-8 8-8s8 3.663 8 8c0 2.176-.923 4.182-2.39 5.641Z"
      fill="#37352F"
    />
    <path
      d="M12 6c-2.28 0-4 1.72-4 4 0 2.28 1.72 4 4 4 2.28 0 4-1.72 4-4 0-2.28-1.72-4-4-4Zm0 6c-1.178 0-2-.822-2-2s.822-2 2-2 2 .822 2 2-.822 2-2 2Z"
      fill="#37352F"
    />
  </svg>
)

export default UserIcon;