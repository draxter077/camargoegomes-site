import title from "./title/main.js"
import motifs from "./motifs/main.js"

export default function about(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:90%;
            padding:5% 0px 0px;
        }`

    const about = cE("div",style)
    about.appendChild(title())
    about.appendChild(motifs())
    return(about)
}