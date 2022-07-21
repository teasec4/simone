import styled from 'styled-components'

export const NavContainer = styled.nav`
  background: transparent;
  position: sticky;
  z-index: 10;
  margin-top: -80px;
  top: 0;
  height: 80px;
  
  ul{
    list-style: none;
  }
  
  li{
    margin: 1rem;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    
    &:hover{
      transform: scale(1.08);
      transition: 0.3s all ease-in-out;
    }
  }
  

  @media screen and (max-width: 768px){
   
    li{
      margin: 0.5rem;
      font-size: 1rem;
    }
  }
  
`

export const NavMenu = styled.div`
  
  @media screen and (max-width: 786px){
    display: none;
  }
`

export const NavMobileIcon = styled.div`
  
`