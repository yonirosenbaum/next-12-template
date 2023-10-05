import type { HeadersDefaults as IHeadersDefaults } from 'axios'

declare module 'axios' {
  interface HeadersDefaults extends IHeadersDefaults {
    [x: string]: string
  }
}
