import React from 'react' 
import styled from 'styled-components'

const Wrapper = styled.div`
 padding: 50px 100px 50px 0;
 font-size: 20px;

 img{
     height: 50px;
     width: 50px;
     border-radius: 100%;
     border:1px solid rgba(0,0,0,0.1);
     margin-bottom: -8px;

 }
`
const TotalReviews =styled.div`
 font-size:18px;
 padding:10px 0;
`
const TotalOutOf = styled.div `
 font-size: 18px;
 font-weight: bold;
 padding: 10px 0;
`

const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total =props.reviews.length
    return(
        <Wrapper>
            <h1><img scr={image_url}alt ={name}/> {name}</h1>
            <div>
                <TotalReviews>{total} user reviews</TotalReviews>
                <div className="starRating"></div>
                <TotalOutOf>{avg_score} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}
export default Header