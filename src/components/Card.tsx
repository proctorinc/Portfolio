type CardProps = {
  children: string | JSX.Element | JSX.Element[]
  className: string
}

export const Card = (props: CardProps) => {
  const { children, className } = props

  return (
    <div className={`${className} rounded-xl border-2 border-slate-600 bg-slate-500/20`}>
      {children}
    </div>
  )
}
