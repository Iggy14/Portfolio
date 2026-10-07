import type { IconType } from 'react-icons'

/** Power BI logo mark (not in react-icons) — three ascending bars. Matches the IconType signature. */
const PowerBiIcon: IconType = ({ size = '1em', title, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    role={title ? 'img' : undefined}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <rect x="3" y="12" width="4.5" height="9" rx="1.2" opacity="0.55" />
    <rect x="9.75" y="7" width="4.5" height="14" rx="1.2" opacity="0.8" />
    <rect x="16.5" y="2" width="4.5" height="19" rx="1.2" />
  </svg>
)

export default PowerBiIcon
