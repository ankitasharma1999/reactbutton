import React, { useState } from "react";
const Comp=()=>{
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");

  const result=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
  };

  return(
    <div>
      <form onSubmit={result}>
        <label>Name:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </label>
        <label>Email:
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </label>
        <label>Phone:
        <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Comp;