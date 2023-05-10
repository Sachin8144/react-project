import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function ContactUs(props) {
    const [Text , setText] = useState('')
    const UpperCase = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const LowerCase = ()=>{
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const OnChange = (event)=>{
        setText(event.target.value)
    }
    const Reset = ()=>{
        Text = '';
        setText(Text);
    }
    // const Blod = ()=>{
    //     setText(Text.Blod);
    // }
    return (
        <>

            <div className="container py-5">
                <div className="mb-3 text-Dark">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={Text} onChange={OnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={UpperCase}>UpperCse</button>
                <button className="btn btn-primary mx-2" onClick={LowerCase}>LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={Reset}>Reset</button>
                <button className="btn btn-primary mx-2" >Blod</button>
                <button className="btn btn-primary mx-2">Italic</button>

            </div>

            {/* 

                <p class="fw-bold">Bold text.</p>
                <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
                <p class="fw-normal">Normal weight text.</p>
                <p class="fw-light">Light weight text.</p>
                <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
                <p class="fst-italic">Italic text.</p>
                <p class="fst-normal">Text with normal font style</p>

             */}

        </>
    )
}

ContactUs.propTypes = {
    title: PropTypes.string,
}

ContactUs.defaultprop = {
    title: "Enter Your Text Here",
}
