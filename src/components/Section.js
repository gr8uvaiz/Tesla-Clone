
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title,description,buttonleft,buttonright,backgroundImg}) {
  return (
    <div>
      <Wrap bgimage={backgroundImg}>
        <Fade bottom>
        <Header>
            <h1>{title}</h1>
            <p>{description}</p>
        </Header>
        </Fade>
        
        <Buttons>
          <Fade bottom>
          <Buttongroup>
            <Buttonleft>
                {buttonleft}
            </Buttonleft>
            {buttonright && <Buttonright>
                {buttonright}
            </Buttonright> }
            
        </Buttongroup>
          </Fade>
        
        <Downarrow src="/images/down-arrow.svg">
        
        </Downarrow>
        </Buttons>
        
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: ${props => `url("/images/${props.bgimage}")`};
height: 100vh;
background-position: center;
background-size: cover;
`
const Header = styled.div`
padding-top: 15vh;
text-align: center;
`
const Buttongroup = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const Buttonleft = styled.div`
border-radius: 10px;
margin: 12px;
background-color: rgb(40, 40, 40);
color: white;
padding: 10px;
width: 20rem;
cursor: pointer;
text-align: center;
opacity: 0.8;
`
const Buttonright = styled.div`
border-radius: 10px;
margin: 12px;
background-color: white;
color: black;
padding: 10px;
cursor: pointer;
width: 20rem;
text-align: center;
opacity: 0.8;
`
const Buttons = styled.div`
display: flex;
flex-direction: column;
`
const Downarrow = styled.img`
height: 40px;
margin-top: 15px;
`

export default Section
