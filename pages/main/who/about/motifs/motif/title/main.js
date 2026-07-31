export default function title(t){
    let style = `
        {
            font-size:26px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            padding:5px 10px;
            margin:0px 0px 5px 0px;
        }
        :responsive{
            font-size:20px;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}