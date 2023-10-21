import React from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

const PageScroll = ({ children }: Props) => {
  const loc = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [loc.key])

  return (
    <>{children}</>
  )
}

export default PageScroll 
