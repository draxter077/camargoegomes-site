import title from "./title/main.js"
import description from "./description/main.js"

export default function motif(t,d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:15%;
        }
        :responsive{
            width:48%;
            margin:10px 0px;
        }`

    const motif = cE("div",style)
    motif.appendChild(title(t))
    motif.appendChild(description(d))
    return(motif)
}