import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 30px;
    background-color: ${props => props.bgColor};
`

export const SearchInput = styled.input`
    width : 250px;
    border : 1px solid #64748b;
    border-radius : 2px;
    margin-left : 60px;
    padding : 3px;
    padding-right : 10px;
    padding-left : 10px;
`

export const VideosContainer = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap : wrap;
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

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    height: 100vh;
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
    color : #1e293b;
    text-decoration : none;
    margin-bottom : 32px;
`

export const Retry = styled.button`
    padding : 15px;
    color : blue;
    cursor : pointer;
`
