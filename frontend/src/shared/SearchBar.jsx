import React,{useRef} from 'react'
import './search-bar.css';
import {Col,FormGroup,Form} from 'reactstrap';

const SearchBar = () => {

  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)

  const searchHandler = () =>{
    
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxGroupSize = maxGroupSizeRef.current.value
    
    if(location === '' || distance === '' || maxGroupSize === ''){
      return alert('All fields are required')
    }
  }




  return <Col lg='12'>
  <div className="search__bar">
      <Form className='d-flex align-items-center gap-4'>
      <FormGroup className='d-flex gap-3 form__group form__group-fast'>
          <span><icon class="ri-map-pin-line"></icon></span>
          <div>
            <h6>Location</h6>
            <input type='text' placeholder='Where are you going?' ref={locationRef}></input>
          </div>
      </FormGroup>
      <FormGroup className='d-flex gap-3 form__group form__group-fast'>
          <span><icon class="ri-map-pin-time-line"></icon></span>
          <div>
            <h6>Distance</h6>
            <input type='number' placeholder='Distance k/m' ref={distanceRef}></input>
          </div>
      </FormGroup>
      <FormGroup className='d-flex gap-3 form__group form__group-fast'>
          <span><icon class="ri-group-line"></icon></span>
          <div>
            <h6>Max People</h6>
            <input type='number' placeholder='0' ref={maxGroupSizeRef}></input>
          </div>
      </FormGroup>
      <span className="search__icon" type="submit" onClick={searchHandler}>
        <icon class="ri-search-line"></icon>
      </span>
      </Form>
  </div>
</Col>
}

export default SearchBar