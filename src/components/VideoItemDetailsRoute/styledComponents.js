import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`

export const ProductsLoaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items : center;
    height: 100vh;

    @media screen and (min-width : 768px){
        width : 70%;
    }
`

export const VideoDetailsSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding : 30px;
    width: 100%;
    align-items : center;
`

export const VideoDetailsTitle = styled.p`
    font-family: "Roboto";
    font-weight : bold;
    margin-left: 10px;
    color: #181818;
`

export const VideoDetailsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items : flex-start;
    width: 90%;
`

export const ViewsDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width : 90%;
`

export const LikesContainer = styled.div`
    display : flex;
`

export const ViewsText = styled.p`
    font-family: "Roboto";
    margin-left: 10px;
    color: ${props => props.color};
`

export const IconContainer = styled.button`
    display: flex;
    flex-direction : row;
    justify-content : center;
    align-items: center;
    margin-right: 15px;
    cursor : pointer;
    border : 0px none;
    background-color: transparent;
    color : ${props => props.color};
`

export const HorizontalLine = styled.hr`
    margin: 15px;
    width : 100%;
    background-color: #181818;
    color : #181818;
`

export const ChannelLogo = styled.img`
    height : 50px;
    width : 50px;
`

export const ChannelContainer = styled.div`
    display: flex;
    flex-direction : row;
    align-items: center;
`

export const ChannelDetailsContainer = styled.div`
    display: flex;
    flex-direction : column;
    margin-left: 20px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content : center;
    align-items: center;
    border-radius : 40px;
    background-color: #cbd5e1;
    padding : 10px;
    width : 80px;;
`

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    height : 100vh;
    background-color : #fff;
`

export const Image = styled.img`
    width : 300px;
    margin: 20px;
`

export const Heading = styled.h1`
    color : black;
    text-align : center;
    font-size : 30px;
`

export const Desc = styled.p`
    color : black;
    text-align : center;
    font-size : 20px;
`

export const NavLink = styled(Link)`
     display: flex;
    justify-content : center;
    align-items: center;
    margin-bottom: 32px;
    color : #1e293b;
    text-decoration : none;
`

export const Retry = styled.button`
    padding : 15px;
    color : blue;
    cursor : pointer;
`
