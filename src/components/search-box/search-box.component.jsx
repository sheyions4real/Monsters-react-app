import React from 'react';
import './search-box.styles.css'

export const SearchBox = (props)=>{
    return (
    <input  type="search" onChange={props.handleChange}
  className="form-control" name="" id={props.id}  placeholder={props.placeholder} />
    );
}

// to destructure the props
export const SearchBoxWithDestructuredProps = ({id, placeholder, handleChange})=>{
    return (
    <input  type="search" onChange={handleChange}
  className="form-control" name="" id={id}  placeholder={placeholder} />
    );
}