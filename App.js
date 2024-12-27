import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css'


function App(){
    let [show,setShow]=useState(false)
    function setPortal(){
        setShow(!show)
    }
    return(
        <div className='parent'>
        <button onClick={setPortal} className='btn btn-primary'>click</button>
        {
            show&&<PopUp close={setPortal}/>
        }
        </div>
    )
}

function PopUp(props){
    return(
        ReactDOM.createPortal(
            <div className='portal'>
            <div className='portal1'>
                <h1>this is portal</h1>
                <p>Modal</p>
                <button onClick={props.close} className='btn btn-danger'>close</button>
            </div>
        </div>,document.getElementById('portal')
        )
    )
}
export default App