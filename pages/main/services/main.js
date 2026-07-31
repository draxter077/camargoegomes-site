import title from "./title/main.js"
import options from "./options/main.js"

export default function services(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:1.5% 0px 0px 0px;
        }
        :responsive{
            width:95%;
            margin:10% 0px 0px 0px;
        }`

    const services = cE("div",style)
    services.id = "services"
    services.appendChild(title())
    services.appendChild(options())
    return(services)
}