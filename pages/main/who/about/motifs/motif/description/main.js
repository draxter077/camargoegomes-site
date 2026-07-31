export default function description(d){
    let style = `
        {
            width:100%;
            font-size:18px;
            text-align:center;
            color:var(--colorBlack);
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}