import link from "./link/main.js"

export default function links(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:flex-end;
            width:50%;
        }
        :responsive{
            justify-content:center;
            width:100%;
            margin:10px 0px 0px 0px;
        }`

    const links = cE("div",style)
    links.appendChild(link("Sobre nós", "who"))
    links.appendChild(link("Experiência", "services"))
    links.appendChild(link("Publicações", "posts"))
    return(links)
}