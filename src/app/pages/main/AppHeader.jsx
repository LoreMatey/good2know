import styled from "styled-components"
import { RiSearchEyeLine } from "react-icons/ri"

const StyledAppHeader = styled.div`
  /* background-color: #00643ecc; */
  width: 100%;
  height: fit-content;

  .logo {
    font-size: 14px;
    /* color: #ddf8e3; */
    color: #4e776d;
    font-family: arial;
    display: inline-block;
    padding-left: 16px;
  }

  .searchIcon {
    /* color: #ccf57a; */
    color: #87b134;
  }
`;

const AppHeader = () => {
  return (
    <StyledAppHeader>
      <div className="logo">
        <h1>
          G<RiSearchEyeLine className="searchIcon"/>od<span style={{color: '#87b134'}}>2</span>Know
        </h1>
      </div>
    </StyledAppHeader>
  )
}

export default AppHeader