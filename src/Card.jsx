export default function Card(props){
    return(
        <div className="item-text">
            <input type="checkbox" checked={props.done} onChange={()=>props.onToggle(props.id)}/>
            <p style={{ textDecoration: props.done ? "line-through" : "none" }}>{props.text}</p>
            <button className="delete-btn" onClick={()=>props.remove(props.id)}><img src="../public/delete.png"></img></button>
        </div>
    )
}