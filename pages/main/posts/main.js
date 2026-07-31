import title from "./title/main.js"
import options from "./options/main.js"

export default function posts(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5% 0px 0px 0px;
        }
        :responsive{
            width:95%;
            margin:20% 0px 0px 0px;
        }`

    const posts = cE("div",style)
    posts.id = "posts"
    posts.appendChild(title())
    posts.appendChild(options())
    return(posts)
}