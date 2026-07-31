export default function title(){
    let style = `
        {
            font-size:26px;
            color:var(--colorOrange);
        }`

    const title = cE("div",style)
    title.innerHTML = "Somos uma advocacia"
    return(title)
}