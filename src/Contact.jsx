import React, {useState} from 'react';


const Contact = () => {
const [data, setData] = useState({
email:"",
name:"",
msg:""
});

const InputEvent = (event) =>{
    const {name,value} = event.target;

        setData((preVal) => {
            console.log(preVal);
            return {
                ...preVal,
                [name]:value,
            };
         });


};
    const formSubmit = (e) =>{
e.preventDefult();
alert(`${data.email}`);


    }
return (
    <>
        <h2 className="text-center pt-5 pb-5">Welcome Contact Page</h2>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input name="name" value={data.name} onChange={InputEvent} type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <div className="mb-3 ">
  <label for="exampleInputEmail1" className="form-label">Message</label>
    <textarea  name="msg" value={data.msg} onChange={InputEvent} className="form-control" id="exampleCheck1" >

    </textarea>
    
  </div>
  <button type="submit" className="btn btn-danger">Submit</button>
</form>
        </div>
    </div>
</div>



    </>
    )
}
export default Contact;