import title from "./title/main.js"
import description from "./description/main.js"

export default function motif(t,d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:15%;
        }`

    const motif = cE("div",style)
    motif.appendChild(title(t))
    motif.appendChild(description(d))
    return(motif)
}