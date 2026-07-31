export default function title(t){
    let style = `
        {
            font-size:26px;
            color:var(--colorWhite);
            background:rgb(0,0,0,0.8);
            padding:10px 15px;
            width:fit-content;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}