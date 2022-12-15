import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="280" rx="3" ry="3" width="280" height="24" /> 
    <rect x="0" y="320" rx="10" ry="10" width="280" height="85" /> 
    <rect x="121" y="412" rx="25" ry="25" width="155" height="40" /> 
    <rect x="0" y="421" rx="3" ry="3" width="88" height="27" /> 
    <circle cx="140" cy="125" r="125" />
  </ContentLoader>
)