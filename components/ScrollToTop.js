import React, { useState, useEffect, useRef} from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [showTopBtn,setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    },[])

    // const topRef = useRef(null)
    // const goToTop = () => topRef.current.scrollIntoView()
    // const goToTop = () => {
    //     window.scrollTo({
    //         to:0, 
    //         behavior:"smooth",
        

    //     })
    // }
  return (
    <div className="top-to-btn">
    {/* {" "} */}
    {showTopBtn && (
    <FaArrowAltCircleUp 
         className="icon-position icon-style" 
         onClick={goToTop}
    />
    )}
    {/* {" "} */}
    </div>
  )
}

export default ScrollToTop