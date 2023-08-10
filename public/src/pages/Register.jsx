import React from "react"
import styled from 'styled-components'
function Register() {
  const HandleSubmit=((e)=>{
    e.preventDefault();
    alert("form");
  })
  const HandleChange=((e)=>{

  })
  return <>
    <FormContainer>
      <form onSubmit={(e)=>{
         HandleSubmit(e)
      }}>
        <div className="brand">
        <img  src="" alt="img"><h1>snappy</h1></img>
        </div>
        <input type="text" placeholder="Username" name="Username" onChange={e=>{HandleChange(e)}}></input>
      </form>
    </FormContainer>
  </>
}

const FormContainer=styled.div``;
export default Register
