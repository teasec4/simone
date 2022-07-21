import styled from 'styled-components'

export const Page1Container = styled.div`
  background: #E4C3B1;
  height: 100vh;
  width: 100vw;
  color: #475132;
  padding: 0 2rem;
  
  h3{
    font-size: 8rem;
    margin: 0;
  }
  
  p{
    font-size: 4rem;
    margin: 0;
  }
  
  @media screen and (max-width: 768px){
    h3{
      font-size: 2rem;
    }
  }
`
