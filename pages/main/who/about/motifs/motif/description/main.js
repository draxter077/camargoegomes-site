export default function description(d){
    let style = `
        {
            width:100%;
            font-size:18px;
            text-align:center;
            color:var(--colorBlack);
        }
        :responsive{
            font-size:15px;
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}