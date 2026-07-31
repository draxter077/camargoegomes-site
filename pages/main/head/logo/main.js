export default function logo(){
    let style = `
        {
            height:50px;
        }
        :responsive{
            height:75px;
            margin:2.5% 0px;
        }`

    const logo = cE("img",style)
    logo.src = "./assets/logo.png"
    logo.alt = "Logotipo da Camargo e Gomes Advogados"
    return(logo)
}