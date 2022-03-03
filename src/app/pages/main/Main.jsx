import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import homeImage from "../../images/g2k-home-image.png"
import styled from "styled-components"

const StyledMain = styled.div`
  width: 1024px;
  margin: 0 auto;
  label {
    color: blue;
  }

  >p {
    margin-bottom: 30px;
    font-size: 20px;
    font-family: Tahoma, sans-serif;
    font-weight: bold;
    text-align: center;
    color: #404749;
  }

  button {
    display: block;
    width: 100px;
    margin: 40px auto;
    padding: 10px;
    font-size: 15px;
    font-family: Tahoma, sans-serif;
    background-color: white;
    color: #4e776d;
    border: 1px solid #4e776d;
    border-radius: 8px;
  }

  button:hover {
    color: #87b134;
    border: 1px solid #87b134;
  }

  .home-image {
    height: 500px;
    display: block;
    margin: 0 auto;
  }
`

const Main = () => {
  return (
    <StyledMain>
      <AppHeader />
        <p>Welcome to Good 2 Know, <br />the leading world site for restarurant reviews</p>
        <img className="home-image" src={homeImage} alt="Critic in a restaurant"/>
        <button>Login</button>
      <AppFooter />
    </StyledMain>
  )
}

export default Main