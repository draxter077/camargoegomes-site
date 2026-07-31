export default function title(){
    let style = `
        {
            font-size:26px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            width:100%;
            padding:10px 15px;
        }
        :responsive{
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = "Nossas últimas atualizações"
    return(title)
}