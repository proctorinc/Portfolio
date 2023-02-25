import { Bar } from "@visx/shape"

export const GridBackground = () => {
  return (
    <div className="absolute z-10 h-full w-full">
      <svg className="h-full w-full">
        <Bar fill={`url(#smallerlines)`} width="100%" height="100%" />
      </svg>
    </div>
  )
}
