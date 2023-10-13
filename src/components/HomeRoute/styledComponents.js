import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    background-color: ${props => props.bgColor};
`

export const HomeSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
    background-color: ${props => props.bgColor};
`

export const BannerImage = styled.img`
    object-fit: fill;
    width: 250px;
`

export const HomeStickyContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
`

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    margin-left: 10px;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`

export const GetItNowButton = styled.button`
    color: #181818;
    background-color: transparent;
    width: 100px;
    border: 1px solid #181818;
    padding: 5px;
`

export const BannerImageContainer = styled.div`
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    background-size: cover;
    width: 80%;
    height: 40vh;
    padding: 50px;
    display: ${props => props.display};
`
