import React from 'react'
import Typewriter from 'typewriter-effect'
import Swal from "sweetalert2";
function Titlem() {
  return (
    <h1 className="d-flex justify-content-center font-size-1100">
    <Typewriter
    onInit={(typewriter)=>{
        typewriter.typeString('Hello').callFunction(()=>{Swal.fire({
            title: 'Get Motivation',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })}).pauseFor(30000).deleteAll().start();
    }}
    />
    </h1>
  )
}

export default Titlem