import React from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
import Card2 from '../Card2';

export default function Employee(props) {
    const {id} = useParams();
  return (
    <div className='card d-xl-flex p-xl-5 m-5' style={{width:"250px"}}>
        <Card2 name="Create Books" loink={id+"/Books"} val="Create Books" link="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"/>
        <Card2 name="Manage Books" loink={id+"/mBooks"} val="Manage Books" link="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"/>
    </div>
  )
}
