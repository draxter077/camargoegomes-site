export default function title(){
    let style = `
        {
            font-size:26px;
            color:var(--colorOrange);
        }
        :responsive{
            text-align:center;
        }`

    const title = cE("div",style)
    title.innerHTML = `Nosso compromisso`
    return(title)
}