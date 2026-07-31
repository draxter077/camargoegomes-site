export default function logo(){
    let style = `
        {
            width:10%;
        }
        :responsive{
            display:none;
        }`

    const logo = cE("img",style)
    logo.src = "./assets/minilogo.png"
    logo.alt = "Logotipo da Camargo e Gomes Advogados"
    return(logo)
}