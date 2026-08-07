import { ReactNode } from 'react'

export default interface IPage {
  name: string
  url: string
  element: ReactNode
  customElement?: boolean
}
