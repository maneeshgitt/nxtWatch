import styled from 'styled-components'

export const NavHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    padding-left: 30px;
    padding-right: 30px;
    position: sticky;
    height: 50px;
    background-color: ${props => props.bgColor};
    
    @media screen and (max-width : 768px){
        flex-direction: column;
    }
`

export const ProfileImage = styled.img`
     height: 30px;
    width: 40px;
    margin-right: 10px;
    margin-left: 10px;
`

export const ContentContainer = styled.ul`
     display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    width: 16%;
`

export const LogoutButton = styled.button`
    background-color: #0967d2;
    border: none;
    padding: 8px 16px;
    color: #ffffff;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    font-family: "Roboto";
    font-size: 10px;
    font-weight: bold;
    margin-left: 14px;
`

export const ThemeButton = styled.button`
    background-color: transparent;
    border: 0px none;
    cursor: pointer;
    color : ${props => props.color};
`

export const WebsiteLogo = styled.img`
    width: 110px;
    @media screen and (min-width : 768px){
        width : 165px;
    }
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 200px;
    width: 400px;
    background-color: #cbd5e1;
    border-radius: 10px;
`

export const CloseButton = styled.button`
    align-self: flex-end;
    background-color: transparent;
    border: 1px solid grey;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
    color: grey;
    margin: 12px;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Roboto";
    font-size: 15px;
    font-weight: bold;
`

export const AlignRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ConfirmButton = styled.button`

    align-self: flex-end;
    background-color: #3b82f6;
    color: white;
    padding: 15px;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
    margin: 10px;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    font-family: "Ronboto";
    font-weight: bold;
    font-size: 15px;
`

export const ModalDesc = styled.p`
    font-family: "Roboto";
    font-size: 25px;
    margin: 10px;
    color: black;
`

export const AlignColumn = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #cbd5e1;
    border-radius: 10px;
    padding: 20px;
`

export const ContentListItem = styled.li`
    font-family: "Roboto";
    font-weight: 600;
    font-size: 10px;
    padding: 8px 16px;
    color: #fff;
    background-color: #0967d2;
    border: none;
    border-radius: 4px;
    margin-left: 14px;
    cursor: pointer;
    outline: none;
`
