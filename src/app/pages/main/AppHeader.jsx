import styled from "styled-components"
import logo from '../../images/g2k-logo.png'
import { FaBeer } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";

const StyledAppHeader = styled.div`
  .g2k-logo{
    width: 150px;
    clip-path: circle(50% at 50% 50%);
  }
`

const AppHeader = () => {
  return (
    <StyledAppHeader>
      {/* <img className="g2k-logo" src={logo}></img> */}
      <h1>G<SiCodechef />od<span style={{color: 'red'}}>2</span>Know</h1>
      
    </StyledAppHeader>
  )
}

export default AppHeader