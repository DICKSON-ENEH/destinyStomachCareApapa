import React,{useState} from "react"
import styled from "styled-components"
import Rice from "../Rice/Rice"
import Fries from "../Fries/Fries"
import Soups from "../Soups/Soups"

const Category =()=>{
    const [toggle , setToggle] = useState(false)
    const [toggled , setToggled] = useState(false)
    const [togglez , setTogglez] = useState(false)
    const changer=()=>{
        setToggle(!toggle)
    }
    const changed=()=>{
        setToggled(!toggled)
    } 
    const changers=()=>{
        setTogglez(!togglez)
    }
    return(
        <Container>
            <Wrapper>
            <First onClick ={changer}>Rice</First>
            <First onClick ={changed}>Fries</First>
            <First onClick ={changers}>Soups</First>
            {
                    toggle? <Rice/>:null
                }
                 {
                    toggled? <Fries/>:null
                }
                 {
                    togglez? <Soups/>:null
                }
            </Wrapper>
                
           
        </Container>

    )
}

export default Category

const Container = styled.div`
display:flex;
justify-content:center;
overflow:hidden;
align-items:center;
width:100%;
height:100%;
margin-top:40px;
@media(max-width:430px){
    margin-top:30px;
}
`
const Wrapper= styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-items :center;
margin:10px 0;



width:1200px;

@media(max-width:1200px){
    width:90%;  
}
@media(max-width:800px){
    justify-content:space-between;

}
`
const First = styled.div`
width:100px;
height:40px;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
font-family:montserrat;
background:#fff;
border:1px solid orange;
color:orange;
:hover{
    background:orange;
    cursor:pointer;
    color:#fff;
    transition:all 300ms;
}


@media(max-width:320px){
 width:70px;   
 font-size:15px;

 
}

`