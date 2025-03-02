export function C2comp({setCount}){
    return(
        <>
        <button onClick={()=>{
            setCount(x=>x-1)
        }}>DECREMENT</button>
        </>
    )
}