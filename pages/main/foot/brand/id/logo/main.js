export default function logo(){
    let style = `
        {
            height:70px;
            border:2px solid var(--colorWhite);
            background:var(--colorWhite);
            padding:10px 15px;
        }`

    const logo = cE("img",style)
    logo.src = "./assets/minilogo.png"
    logo.alt = "Logotipo da Camargo e Gomes Advogados"
    return(logo)
}