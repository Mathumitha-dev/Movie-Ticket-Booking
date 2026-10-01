import {useState} from "react";
function Register() {
     const [form,setform]=useState({name:"",email:"",phone:"",password:"",confirm_password:""});
     function handlechange(e){
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
     }
     const [error,seterror]=useState("");
     function handlesubmit(e){
        e.preventDefault();
        if (form.password.length < 8) { 
            seterror("Password must at least 8 characters"); 
            return; 
        } 
        if (form.password !== form.confirm_password) 
            { 
            seterror("Passwords do not match"); 
            return; 
        } 
    const pattern=/^[6-9]\d{9}$/;
    if(!pattern.test(form.phone)){
        seterror("invalid phone number");
        return;
    }
    seterror("");
    console.log(form);
}
  return (

    <div>
      <h1>Create Account</h1>

      <form onSubmit={handlesubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handlechange} />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handlechange}  />
        </div>

        <div>
          <label>Phone</label>
          <input  type="text" name="phone" value={form.phone} onChange={handlechange} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handlechange} />
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" value={form.confirm_password} onChange={handlechange} />
        </div>
        {error && <p>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;