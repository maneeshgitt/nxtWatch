import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
    display: flex;
    flex-direction:row;
    list-style: none;
    width: 100%;
    cursor: pointer;
    margin: 25px;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
`

export const ThumbnailImage = styled.img`
    width: 50%;
    height: 250px;
    object-fit: scale-down;
`

export const VideoCardBottomContainer = styled.div`
    display : flex;
    width : 100%;
    align-items : center;
`

export const VideoDetailsContainer = styled.div`
    display : flex;
    flex-direction : column;
    margin-left : 25px;
`

export const VideoDetailsText = styled.p`
    font-size: ${props => props.size}px;
    font-weight : bold;
    font-family : "Roboto";
    color: ${props => props.textColor};
`

export const NavLink = styled(Link)`
    color: ${props => props.textColor};
    text-decoration : none;
    margin-bottom : 10px;
`
