import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
    display: flex;
    flex-direction : column;
    list-style: none;
    width: 300px;
    cursor: pointer;
    margin: 25px;
    background-color : ${props => props.bgColor};
`


export const ThumbnailImage = styled.img`
    width : 100%;
`

export const VideoCardBottomContainer = styled.div`
    display : flex;
    align-items : center;
    width: 100%;
`

export const ProfileImage = styled.img`
    height : 40px;
    width : 40px;
    margin-right : 10px;
`

export const VideoDetailsContainer = styled.div`
    display: flex;
    flex-direction : column;
    margin-left : 10px;
`

export const VideoDetailsText = styled.p`
    font-size: 12px;
    font-family : "Roboto";
    font-weight : bold;
    color :  #475569;
    color: ${props => props.color};
`

export const NavLink = styled(Link)`
    color : #1e293b;
    text-decoration : none;
    margin-bottom : 10px;
`
