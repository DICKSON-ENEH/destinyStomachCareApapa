import React from "react"
import styled from 'styled-components'
import {Link } from 'react-router-dom'

const Navside =({toggle , setToggle})=>{
    const changer = ()=>{
        setToggle(toggle)
    }
    return (

       
<Container>
    <Wrapper>
       <Link to = "/"><button onClick = {changer}>Home</button></Link> 
        <button onClick = {changer}>About</button>
        <button onClick = {changer}>Our services</button>
        <button onClick = {changer}>Contact</button>
    </Wrapper>
</Container>
    )
}
export default Navside

const  Container = styled.div`
display:none;
@media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh  
}
`
const Wrapper = styled.div`
@media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:80vh  
}
button{
    padding:10px 20px;
border:none;
outline:none;
background:transparent;
font-size:18px;
font-weight:bold;
width:100%;
:hover{
    cursor:pointer;
   
    transition:all 300ms;
    transform:scale(1.05);
    border-radius:3px;
    opacity:0.8
   
}
}
`
