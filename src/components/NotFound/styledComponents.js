import styled from 'styled-components'

export const NotFoundContainer = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    height : 100vh;
    align-items : center;
    background-color: ${props => props.isDark};
`

export const Heading = styled.h1`
    text-align : center;
    font-size: 30px;
    color : ${props => props.isDark};
`

export const Desc = styled.p`
    text-align : center;
    font-size: 20px;
    color : ${props => props.isDark};
`

export const Image = styled.img`
    width : 250px;
    margin : 10px;
`
