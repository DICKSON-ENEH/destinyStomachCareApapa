import React, {useEffect} from "react"
import pix from "./hero.jpg"
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = ()=>{
    useEffect(()=>{
Aos.init({duration:1500})
    }, [])
    return(
        <Div>
 <Wrapper>
     <Left>
<Head>Destiny Stomach Care</Head>
<Text>
    why think of your next meal?
    Food You love in your palm and sight
</Text>
<Button>Get started</Button>
     </Left>
     <Right data-aos="fade-left">
<Image src = {pix}/>
{/* <img src ={pix} alt="hero"/> */}
    
    
     </Right>
 </Wrapper>
        </Div>
    )
}

export default Hero
const Div = styled.div`
width:100%;
height:100%;
min-height:calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
`
const Wrapper = styled.div`
width:1200px;
display:flex;
justify-content: space-between;
align-items: center;
flex-wrap :wrap;
/* background: red; */
@media(max-width:1200px) {
    width:90%
}
@media(max-width:820px){
    flex-direction:column-reverse;
}
`
const Left = styled.div`
flex:0.6;
/* background:red */
@media(max-width:820px){
    
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
overflow:hidden;
}
`
const Head = styled.div`
font-size:3rem;
color:green;
font-family:montserrat;
font-weight:bold;
margin-bottom: 20px;
@media(max-width:768px){
    
text-align: center;
}
`
const Text = styled.div`
width:300px;
font-size: 16px;
font-family: montserrat;
font-weight: 400;
margin-bottom: 20px;
@media(max-width:820px){
    
    text-align: center;
    }

`
const Button = styled.button`
padding:13px 40px;
border:0;
outline: none;
background: green;
color:#fff;
border-radius: 20px;
font-family: montserrat;
`
const Right = styled.div`
flex:0.5;



`
const Image = styled.img`
width:500px;
height:500px;
border-radius: 50%;
/* background: red; */

object-fit: cover;
@media(max-width:768px){
    
    width:300px;
height:300px;
border-radius: 50%;
}
`