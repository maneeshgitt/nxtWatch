import styled from 'styled-components'

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
    font-weight: bold;
    color: ${props => props.color};
`

export const ProductsLoaderContainer = styled.div`
    display: flex;
    justify-content: center;
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

export const Image = styled.img`
    width: 250px;
    margin: 10px;
`

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-color: ${props => props.bgColor};
`

export const Heading = styled.h1`
    color: black;
    font-size: 30px;
    margin: 15px;
    color: ${props => props.color};
`

export const Desc = styled.p`
    font-size: 20px;
    margin-left: 15px;
    color: ${props => props.textColor};
`
