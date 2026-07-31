import link from "./link/main.js"

export default function contact(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
            background:var(--colorOrange);
            padding:10px 0px;
        }`

    const contact = cE("div",style)
    contact.appendChild(link("./assets/linkedin.png",linkedin_url))
    contact.appendChild(link("./assets/whatsapp.png",whatsapp_url))
    contact.appendChild(link("./assets/instagram.png",instagram_url))
    return(contact)
}