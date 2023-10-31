import styled from "styled-components";
import { Typography } from 'antd'
import { Menu as AntdMenu } from 'antd'

export const Wrapper = styled('header')`
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled(Typography.Title)`
    white-space: nowrap;
`

export const Navigation = styled('div')`
    
`

export const Menu = styled(AntdMenu)`
    width: 101%; // NOTE: have to use this to avoid issue with hiding last menu item
`