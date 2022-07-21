import styled from 'styled-components'

export const HeroContainer = styled.div`
  .div1{
    display: flex;
    align-items: center;
    justify-content: start;
    background: #475132;
    color: #E4C3B1;
    padding: 0 2rem;
    height: 100vh;
    width: 100vw;
  }
  
  h3{
    font-size: 8rem;
    margin: 0;
  }
  
  p{
    font-size: 4rem;
    margin: 0;
  }
  h4{
    font-size: 3rem;
    margin: 0;
  }
  
  @media screen and (max-width: 768px){
    h3{
      font-size: 3rem;
      margin: 0;
    }

    p{
      font-size: 2rem;
      margin: 0;
    }

    h4{
      font-size: 1.5rem;
      margin: 0;
    }
  }
`
