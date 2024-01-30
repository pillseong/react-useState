import { useState } from "react"
export default function Singup(){
  
  const[email, setemail]=useState("")
  const[pw,setpw]=useState("")
  const[error,seterror]=useState("")
 
  function onChangeId(event){
      setemail(event.target.value)
  }
  function onChangePw(event){
    setpw(event.target.value)

  }
  function onClickSignup(){
    console.log(email)
    console.log(pw)
    if(email.includes("@")===false){
      //alert("이메일을 다시 확인해 주십시오")
      //document.getElementById("myerror").innerText="이메일을 다시 확인해 주십시오"
     seterror("이메일을 다시 확인해 주십시오")
    }
   else{
      alert("가입  성공")
   }

  }

  return(
    <div>
  <label>이메일:</label> <input type="text" onChange={onChangeId}></input>
  <div id="myerror" style={{color:"red"}}>{error}</div>
   <label>비밀번호 :</label>  <input type="password" onChange={onChangePw}></input>
   <button onClick={onClickSignup}>회원가입</button>
    </div>
  )

}