import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
 border:1px solid #efefef;
 background: #fff;
 text-align: center;
`
const HouseLogo =styled.div`
 width:50px;
 text-align: center;
 margin-left: auto;
 margin-right: auto;
 padding-top: 10px;
 img{
     height: 50px;
     width: 50px;
     border-radius: 100%;
     border: 1px solid #efefef;
 }
`
const HouseName =styled.div`
 padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
 margin: 30px 0 20px 0;
 height: 50px;
 a{
     color:#000;
     background: rgba(77, 19, 209, 1) ;
     border-radius: 4px;
     padding: 10px 50px;
     border: 1px solid #000;
     width: 100%
     text-decoration: none;
 }
`

const House = (props) => {
    return (
        <Card>
            <HouseLogo>
                <img src={props.attributes.image_url} alt ={props.attributes.name}/>
            </HouseLogo>
            <HouseName>{props.attributes.name}</HouseName>
            <div className="house-score">{props.attributes.avg_score}</div>
            <LinkWrapper>
                <Link to = {`/houses/${props.attributes.slug}`}>Enter House</Link>
            </LinkWrapper>
        </Card>

    
    )
}

export default House