import logo from "./logo/main.js"

export default function id(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const id = cE("div",style)
    id.appendChild(logo())
    return(id)
}