import styled from 'styled-components'

const StyledAppFooter = styled.div`
  width: 100%;
  background-color: #4e776d;
  color: white;
  text-align: center;
  font-family: Tahoma, sans-serif;
  font-size: 12px;

  p {
    padding: 15px;
  }
`

const AppFooter = () => {
  return (
    <StyledAppFooter>
      <p>Lorena Matey, 2022<br /><i>Home image by vectorjuice from freepik</i></p>
    </StyledAppFooter>
  )
}

export default AppFooter