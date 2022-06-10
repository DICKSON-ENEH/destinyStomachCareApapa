import React, {useState} from 'react'
import styled from 'styled-components'
import Navside from './Navside'
import {GiHamburgerMenu} from "react-icons/gi"
import {GiCancel} from "react-icons/gi"
import {Link} from "react-router-dom"
const Header= ()=>{

    const [toggle, setToggle] = useState(false)

    const changer = ()=>{
        setToggle(!toggle)
    }
    return (
        <>
        <Container>
            <Wrapper>
               <Link to = "/"> <Logo>
                    <img src = "/destiny.jpg" alt = "logo"/>
  DestinyFoods care
                </Logo>
                </Link>
                <Navigation>
                   <Link to ="/"> <Navs>Home</Navs></Link>
                    <Navs>About</Navs>
                    <Navs>our Services</Navs>
                    <Navs>Contact</Navs>
                </Navigation>
            </Wrapper>
            <Navers>
                {toggle?
            <GiCancel size ="30px"  onClick={changer}/>:
            <GiHamburgerMenu  size ="30px" onClick={changer}/>

        }
            </Navers>
        </Container>
        {toggle?
        <Navside toggle = {toggle} setToggle = {setToggle}/>:null
    }
        </>
    )
}

export  default Header

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap :wrap;
width:100%;
height:70px;
overflow:hidden;
box-shadow: rgba(0, 0, 0, 0) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
/* @media(min-width:330px) and (max-width:400px){
    display:flex;
    
    
} */

`
const Wrapper = styled.div`
width:90%;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
/* @media(min-width:330px) and (max-width:400px){
    display:flex;
    width:90%;
    justify-content:space-between
    
    
} */
`
const Logo = styled.div` 
img{
width:60px;
height:60px;
border-radius:50%;
object-fit:contain
}
/* :button{
    font-size:20px;
font-weight:bold;
background:transparent;
border:none;
outline:none ;
} */
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
font-weight:bold;
text-decoration:none;
color:#000;
@media(max-width:500px){
font-size:18px;
img{
    width:50px;
height:50px;
}
   
}
`
const Navigation = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:500px;
`
const Navs = styled.button`
padding:10px 20px;
border:none;
outline:none;
background:transparent;
font-size:16px;
:hover{
    cursor:pointer;
    color:#fff;
    transition:all 300ms;
    transform:scale(1.05);
    background:orangered;
    border-radius:3px;
    opacity:0.8
}
@media(max-width:800px) {
    display:none
}
`
const Navers = styled.div`
display:none;
@media(max-width:800px){
    display:block;
    margin-right:5px
    
    
}

`