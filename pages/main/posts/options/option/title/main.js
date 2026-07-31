export default function title(t){
    let style = `
        {
            font-size:26px;
            color:var(--colorWhite);
            background:rgb(0,0,0,0.66);
            padding:10px 15px;
            width:100%;
            height:100%;
            display:flex;
            flex-direction:column-reverse;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}