import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import styled from "styled-components"

const StyledMain = styled.div`
  label {
    color: blue;
  }
`

const Main = () => {
  return (
    <StyledMain>
      <AppHeader />
      <label>Welcome to Good 2 Know, the leading world site for restarurant reviews</label>
      <AppFooter />
    </StyledMain>
  )
}

export default Main