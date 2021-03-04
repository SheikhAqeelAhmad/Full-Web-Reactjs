import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) =>{
    return (

        <>
<section className="d-flex align-item-center">
    <div className="container-fluid nav-bg">
        <div className="row">
            <div className="col-12 mx-auto">
            <div className="row">
                <div className="col-6 pt-5 pl-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h2>{props.title} <span style={{color:'#66ABEC'}}> <br></br>{props.brandname}</span></h2>
                    <p>{props.para}</p>
                   <NavLink to={props.btnvisit} style={{width: 'fit-content', textDecoration:'none'}} className="btn btn-primary">{props.btntitle}</NavLink> 
                </div>
                
                <div className="col-6 pt-5 pt-lg-5 order-1 order-lg-2">
                    <img className="img-fluid homeImage" src={props.imgsrc}  alt="img"/>
                </div>
            </div>
            </div>
         </div>
    </div>  
</section>     
</>

    )
}
export default Common;