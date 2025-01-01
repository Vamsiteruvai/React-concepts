import { useDispatch, useSelector } from "react-redux";

function App() {
    let dispatch = useDispatch()
    let tdata=useSelector((state)=>{
        return state?.userData
    })
    console.log(tdata)
    async function fetchData(dispatch,usestate) {
        
        let apiData = await fetch('http://localhost:3000/products/3')
        let data = await apiData.json();
        dispatch({ type: "add", payload:data})
    }
    return (
        <>
            <button className="btn btn-primary" onClick={()=>{
                dispatch(fetchData)
            }}>click</button>
            <h1>id:{tdata?.id}</h1>
            <h1>name:{tdata?.name}</h1>
            <h1>price:{tdata?.price}</h1>
        </>
    )
}
export default App