import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'

const Wrapper =styled.div`
 margin-left: auto;
 margin-right: auto;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
 background: #fff;
 height: 100vh;
 overflow: scroll;

 &:last-child{
   background: #000
 }
`
const Main = styled.div`
 padding-left: 50px;
`

const House = (props) => {
  const [house, setHouse]=useState({})
  const [review, setReview] =useState({title: '', description: '', score: 0})
  const [loaded, setLoaded] =useState(false)

  useEffect(()=>{
    const slug =props.match.params.slug
    const url = `/api/v1/houses/${slug}`
    axios.get(url)
    .then(resp =>{
      setHouse(resp.data)
      setLoaded(true)
    })
    .catch(data => console.log('Error', data) )
  }, [])

  // Modify in review form
  const handleChange =(e) => {
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    console.log('review:', review)
  }

  //submit/create a new review
  const handleSubmit = (e) => {
    e.preventDefault()
    const csrfToken = document.querySelector('[name = csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    
    //Get our house_id
    const house_id = house.data.id

    axios.post('/api/v1/reviews', {review, house_id })
    .then(resp => {
      debugger
    })
    .catch(resp => {})
    
  }

// set score  
const setRating = (score, e) => {
  e.preventDefault()

  setReview ({ ...review, score})

}
let reviews
if (loaded && house.included){
  reviews =house.included.map( (item, index) => {
    return (
      <Review
         key={index}
         attributes = {item.attributes}
      />
    )
})
}

  return (
    <Wrapper>
      {
        loaded&&
        <Fragment>
          <Column>
            <Main>
              <Header
                 attributes={house.data.attributes}
                 reviews ={house.included}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
             <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setRating={setRating}
                attributes={house.data.attributes}
                review={review}
             />
          </Column>
        </Fragment>
      }
    </Wrapper> 
  )
}


export default House
