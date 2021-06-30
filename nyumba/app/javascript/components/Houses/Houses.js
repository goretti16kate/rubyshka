import React, {useState,useEffect, Fragment} from 'react'
import axios from 'axios'
import House from './House'
import styled from 'styled-components'

const Home =styled.div
const Header = styled.div
const Subheader = styled.div
const Grid = styled.div

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
    
        <div className="home">
            <div className ="header">
                <h1>OpenHomes</h1>
                <p className ="subheader">Honest unbiased house reviews. Share your experience</p>

            </div>
            <div className = "grid">
                <ul>
                    {grid}
                </ul>
        
            </div>
      </div>
    
  )
}

export default Houses