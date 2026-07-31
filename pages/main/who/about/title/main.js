export default function title(){
    let style = `
        {
            font-size:26px;
            color:var(--colorOrange);
        }
        :responsive{
            font-size:21px;
            text-align:center;
            margin:0px 0px 2.5% 0px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Somos uma advocacia"
    return(title)
}