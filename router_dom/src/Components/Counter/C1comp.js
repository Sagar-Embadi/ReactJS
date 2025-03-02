export function C1comp({setCount}){
    return(
        <>
        <button onClick={()=>{
            setCount(x=>x+1)
        }}>INCREMENT</button>
        </>
    )
}