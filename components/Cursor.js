import React from 'react'
import { useRef, useEffect} from 'react';

export default function Cursor() {

const cursorRef =useRef( null) 
const cursorBisRef =useRef('')
const sound = useRef()



useEffect(() => {
if (cursorRef.current == null || cursorRef == null)
     return;
document.addEventListener('mousemove', e => {
     if (cursorRef.current == null)
          return;
     cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
}) 


if (cursorBisRef.current == null || cursorBisRef == null)
     return
document.addEventListener('mousemove',e => {
     if (cursorBisRef.current == null)
          return
    cursorBisRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;" )
})

document.addEventListener('mouseenter', () =>{

})

document.addEventListener('click', () => {

if (cursorRef.current == null)
     return;
sound.current.play()
cursorRef.current.classList.add("expand")
setTimeout(() => {
     if (cursorRef.current == null)
          return;
     cursorRef.current.classList.remove("expand")
}, 500)
})
}, [])
  return (
  <>
    <div className='cursor'  ref={cursorRef}></div>
    <div className='cursorBis'  ref={cursorBisRef}></div>
    <audio ref={ sound }>
       <source src="SFB-appphoto.mp3"></source>
    </audio>  
  </>
  )
}

 