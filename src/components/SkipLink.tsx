import { FC } from 'react'
import styled from '@emotion/styled'
import { Link as MuiLink, LinkProps } from '@mui/material'
import { css } from '@emotion/react'

export type SkipLinkProps = LinkProps

const Link = styled(MuiLink)(
  ({ theme }) => css`
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);

    &:active,
    &:focus {
      clip: auto;
      width: auto;
      height: auto;
      display: block;
      z-index: 100000;
      text-decoration: none;
      background-color: ${theme.palette.background.paper};
      color: unset;
      top: ${theme.spacing(1)};
      left: ${theme.spacing(1)};
      padding: ${theme.spacing(2)};
    }
  `
)

const SkipLink: FC<LinkProps> = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
)

export default SkipLink
