
import React from "react"
import ReactDOM from "react-dom"
import './style.css'

let MyName = () => <h1>Jared Engler</h1>

let MyBlurb = () => <p className='blurb'>I am a person, a developer, and emacs enthusiast.</p>

let MyList = () => (
    <div>
        <p>List of top vacation spots I'd like to visit:</p>
        <ul>
            <li>Caves of Altamira</li>
            <li>Maui</li>
            <li>The Moon</li>
        </ul>
    </div>
)

let MyInfo = () => (
    <div>
        <MyName />
        <MyBlurb />
        <MyList />
    </div>
)

ReactDOM.render(<MyInfo />, document.getElementById("root"))
