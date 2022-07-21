import styled from 'styled-components'


export const SidebarMenu = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(-170%)')};
  transition: all 0.2s ;
`

export const SidebarBLur = styled.div`
  width: 100vw;
  height: 100vh;
  left: 70%;
  backdrop-filter: blur(2px);
  position: absolute;
`

export const SidebarCont = styled.div`
  width: 70%;
  height: 100%;
  transition: all 0.4s ;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  
`