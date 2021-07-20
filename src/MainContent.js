import React, { useState } from "react";




function MainContent() {


    const [counter, setCounter] = useState(0)


    function handlePlus() {
        setCounter(counter + 1)
    }
    
    function handleMinus() {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }
    
    
    function handleReset() {
        setCounter(0)
    }



    return(
        <div className='rod-maincontent'>
            <div className='rod-nil-maincontent'>
                <span className='nil-maincontent'>
                    {counter}
                </span>
            </div>
            <div className='rod-buttons'>
                <div className='buttons-item'>
                    <div className='button-plus' onClick={handlePlus}>
                        PLUS
                    </div>
                    <div className='button-minus' onClick={handleMinus}>
                        MINUS
                    </div>
                    <div className='button-reset' onClick={handleReset}>
                        RESET
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainContent;