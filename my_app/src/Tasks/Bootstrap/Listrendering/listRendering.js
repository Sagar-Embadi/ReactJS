import "./listRendering.css"
import { data } from "./data"

export let ListRendering = ()=>{
    return(
        <div className="CardsContainer">
        {data.map((x)=>{
            return(
                <div className="card" key={x.id}>
                    <img alt="" src={x.image} />
                    <p>{x.title}</p>
                    <span>PRICE: {x.price}</span>
                </div>
            )
        })}
        
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(x=>{
                        return(
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.title}</td>
                                <td>{x.price}</td>
                                <td>
                                    <img src={x.image} alt="" width="150"/>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}