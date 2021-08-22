import React, {useState,useEffect, Fragment} from 'react'
import axios from 'axios'
import House from './House'
import styled from 'styled-components'
//styling for the Home div
const Home =styled.div`
text-align: center;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`//styling for the Header div
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1{
    font-size:42px
  }
`
//styling for the subheader div
const Subheader = styled.div`
 font-weight: 300;
 font-size: 26px:
`
//styling for the grid div
const Grid = styled.div`
 display:grid;
 grid-template-columns:repeat(4,1fr);
 grid-gap:20px;
 width:100%;
 padding:20px`

const Houses = () => {
    const [houses, setHouses] = useState([])
    useEffect(() => {
        //get all our houses from the api
        //update houses in our state
        axios.get('/api/v1/houses.json')
        .then( resp =>{
            setHouses(resp.data.data)
        })
        .catch( resp => console.log(resp))
    }, [houses.length])
    const grid = houses.map(item => {
        return(
            <House
               key ={item.attributes.name}
               attributes = {item.attributes}
               />
        )
    })
    return(
    
        <Home>
            <Header>
                <h1>OpenHomes</h1>
                <Subheader>Honest unbiased house reviews. Share your experience</Subheader>

            </Header>
            <Grid>
                {grid}
        
            </Grid>
      </Home>
    
  )
}

export default Houses