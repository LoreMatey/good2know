import styled from "styled-components"
import { RiSearchEyeLine } from "react-icons/ri"
import { MdRestaurant } from "react-icons/md"
import { FaUsers } from "react-icons/fa"

const StyledAppHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;

  .logo {
    font-size: 14px;
    color: #4e776d;
    font-family: arial;
    padding-left: 16px;
    width: fit-content;
  }

  .logo:hover {
    opacity: 70%;
    cursor: pointer;
  }

  .searchIcon {
    /* color: #ccf57a; */
    color: #87b134;
  }

  .header-main-wrapper {
    display: flex;
    justify-content: space-between
  }

  .g2k-user {
    line-height: 5px;
    margin-top: 10px;
    margin-right: 24px;
    padding-top: 0;
    color: #4e776d;
  }

  ul {
    width: 30%;
    margin: 26px auto;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;

    li {
      color: #4e776d;
      padding: 18px;
      border: 1px solid #4e776d;
      border-radius: 8px;
    }

    li:hover {
      color: #87b134;
      border: 1px solid #87b134;
      cursor: pointer;
    }
  }

  .menu-icon {
    vertical-align: middle;
    padding-left: 15px;
  }
`;

const AppHeader = ({color, onLogoClick, showLogo, user}) => {

  const menuItems = 
    [
      {name: 'Restaurants',
      icon: MdRestaurant},
      {name: 'Users',
      icon: FaUsers}
    ];

  const internalClick = () => {
    console.log("Se hizo click internamente en AppHeader")
    onLogoClick()
  }

  return (
    <StyledAppHeader style={{backgroundColor: color}}>
      <div className="header-main-wrapper">
      {
        showLogo&& 
          <div className="logo" onClick={internalClick}>
            <h1>
              G<RiSearchEyeLine className="searchIcon"/>od<span style={{color: '#87b134'}}>2</span>Know
            </h1>
          </div>
      }
      {
        user&& 
        <div className="g2k-user">
          <h4>{user.name}</h4>
          <h5>{user.email}</h5>
        </div>
      }
      </div>

      <ul>
        { 
          menuItems.map(menuItem => (<li key={menuItem.name}>{menuItem.name} <menuItem.icon className="menu-icon"/></li>))
        }
      </ul>
    </StyledAppHeader>
  )
}

export default AppHeader