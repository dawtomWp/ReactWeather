import React from 'react';
import Button from '../Button/Button'

const Form = props => {
    return (
       <form 
       onSubmit={props.submit}
       className={props.className}
       >
           <input
             type="text"
             className={props.className}
             value={props.value}
             onChange={props.change}
             placeholder="Search City"
           />
           <Button children="Search"/>
       </form>
    )
}

export default Form
