import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 30px;
    background-color: ${props => props.bgColor};
`

export const VideosContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`

export const TrendingHeadContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    margin-left: 50px;
    width : 100%;
    background-color: ${props => props.bgColor};
    color : ${props => props.color};
`

export const TrendingLogo = styled.div`
    background-color: #94a3b8;
    border: 0px none;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

export const TrendingHead = styled.h1`
    font-family: "Roboto";
    font-weight : bold;
    color: ${props => props.color};
`

export const ProductsLoaderContainer = styled.div`
    display: flex;
    justify-content : center;
    align-items: center;
    height: 100vh;

    @media screen and (min-width : 768px){
        width : 70%;
    }
`

export const HomeStickyContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
`

export const HomeSideContainer = styled.div`
     display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
    background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    background-color: ${props => props.bgColor};
`

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
`

export const Image = styled.img`
    width : 300px;
    margin : 20px;
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

export const NavLinkTwo = styled(Link)`
    display : flex;
    justify-content : center;
    align-items : center;
    color : #1e293b;
    text-decoration : none;
    margin-bottom : 32px;
`

export const Retry = styled.button`
    padding : 15px;
    color : blue;
    cursor : pointer;
`
