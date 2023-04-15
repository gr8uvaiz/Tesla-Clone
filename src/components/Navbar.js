import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {
  const [drawerState, setDrawer] = useState(true);
  return (
    
    <Container>
      <TeslaLogo>
      <Logo src="/images/logo.svg">
        
        </Logo>
      </TeslaLogo>
     
      <Menuitem>
      <li><a href='#'>Model S</a></li>
      <li><a href='#'>Model X</a></li>
      <li><a href='#'>Model Y</a></li>
      <li><a href='#'>Model 3</a></li>
      </Menuitem>

      <Rightmenu>
      <li><a href='#'>Shop</a></li>
      <li><a href='#'>Account</a></li>
      <Icommenu>
      <Custommenu onClick={()=>{
        setDrawer(false);
      }}>

      </Custommenu>
      </Icommenu>
      
      </Rightmenu>

      <Rightdrawer drawerposition={drawerState}>

        <Closewrapper>
          <Customclose onClick={()=>{
            setDrawer(true);
          }}>
          </Customclose>
        </Closewrapper>

      <li><a href='#'>Model S</a></li>
      <li><a href='#'>Model X</a></li>
      <li><a href='#'>Model Y</a></li>
      <li><a href='#'>Model 3</a></li>
      <li><a href='#'>Solar Roof</a></li>
      <li><a href='#'>Solar Panel</a></li>
      <li><a href='#'>Accessories</a></li>
      </Rightdrawer>
    </Container>
  )
}

const Custommenu = styled(MenuIcon)`

`

const Container = styled.div`
z-index: 1;
position: fixed;
display: flex;
justify-content: space-between;
width: 100%;
padding: 20px;

`
const Rightdrawer = styled.div`
width: 30%;
transition: 0.5s;
transform: ${(props) => (props.drawerposition ? "translateX(100%)" : "translateX(0%)")};
li{
  border-bottom: 1px solid gray;
  padding: 16px 0px;
  font-weight: 600;
}
// overflow: scroll;
padding: 20px;
scroll
display: flex;
flex-direction: column;
opacity: 0.9;
@media only screen and (max-width: 768px) {
  width: 50%;
}
z-index: 10;
position: fixed;
top 0;
right: 0;
bottom: 0;
height: 100%;
background-color: white;
`
const TeslaLogo = styled.div`

`

const Logo = styled.img`

`
const Customclose = styled(CloseIcon)`

`

const Closewrapper = styled.div`
cursor: pointer;
display: flex;
justify-content: flex-end;
`
const Menuitem = styled.div`
display: flex;
align-items: center;
li{
  padding: 0px 12px;
  cursor: pointer;
}
a{
  font-weight: 600;
}
@media only screen and (max-width: 768px) {
  li{
    display: none;
  }
}

`

const Rightmenu = styled.div`
display: flex;

align-items: center;
li{
  padding: 0px 12px;
  cursor: pointer;
}
a{
  font-weight: 600;
}
`

const Icommenu = styled.div`
cursor: pointer;
`
export default Navbar
