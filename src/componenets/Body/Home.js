import React from 'react'
import styled from 'styled-components'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'

const Home= ()=>{
    return (
        <Div>

            <Hero/>
            <Category/>
        </Div>
    )
}

export default Home
const Div = styled.div`
width:100%;
height:100%;
` 