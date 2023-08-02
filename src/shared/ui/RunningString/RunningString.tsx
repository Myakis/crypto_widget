import { type FC, type ReactNode } from 'react'
import Marquee from 'react-fast-marquee'

type TProps = {
  children: ReactNode
}

export const RunningString: FC<TProps> = ({ children }) => {
  return (
    <>
      <Marquee>{children}</Marquee>
    </>
  )
}
