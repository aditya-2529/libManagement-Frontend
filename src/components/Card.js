import React from 'react'
import PopUp from './PopUp'
import Card2 from './Card2'

export default function Card(props) {
  return (
    <>
      {props.isRegister?<>
      <img className="card-img-top" src={props.link} alt="Card image" style={{width:"100%"}}/>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <PopUp buttonname={props.name} register="Register" render={()=>{return(<>
          <div className="d-xl-flex p-xl-5">
    <div className="card m-5" style={{width:"250px"}}>
    <Card2 name='Employee' loink={props.loink+'emp'} val={props.val+' as an employee'} link='https://img.freepik.com/premium-vector/employee-engagement-concept-illustration-key-motivated-workforce_1263357-35578.jpg?semt=ais_hybrid'/>
    </div>
    <div className="card m-5" style={{width:"250px"}}>
    <Card2 name='Customer' val={props.val+' as a customer'} loink={props.loink+'cust'} link='https://static.vecteezy.com/system/resources/previews/021/340/782/non_2x/customer-icon-for-your-website-design-logo-app-ui-free-vector.jpg'/>
    </div>
    </div>
        </>)}}/>
        {/* <a href={props.loink.toLowerCase()} className="btn btn-primary">{props.val}</a> */}
      </div></>:<>
      <img className="card-img-top" src={props.link} alt="Card image" style={{width:"100%"}}/>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <PopUp buttonname={props.name} register="Login" render={()=>{return(<>
          <div className="d-xl-flex p-xl-5">
    <div className="card m-5" style={{width:"250px"}}>
    <Card2 name='Employee' loink={props.loink} val={props.val+' as an employee'} link='https://img.freepik.com/premium-vector/employee-engagement-concept-illustration-key-motivated-workforce_1263357-35578.jpg?semt=ais_hybrid'/>
    </div>
    <div className="card m-5" style={{width:"250px"}}>
    <Card2 name='Customer' val={props.val+' as a customer'} loink={props.loink} link='https://static.vecteezy.com/system/resources/previews/021/340/782/non_2x/customer-icon-for-your-website-design-logo-app-ui-free-vector.jpg'/>
    </div>
    </div>
        </>)}}/>
        {/* <a href={props.loink.toLowerCase()} className="btn btn-primary">{props.val}</a> */}
      </div></>}
      </>
  )
}
