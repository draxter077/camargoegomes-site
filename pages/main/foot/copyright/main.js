export default function copyright(){
    let style = `
        {
            font-size:15px;
            font-weight:900;
            text-align:center;
            color:white;
            margin:20px 0px 0px 0px;
        }`

    const copyright = cE("div",style)
    copyright.innerHTML = `Camargo e Gomes Advogados © ${new Date().getFullYear()} | Todos os direitos reservados`
    return(copyright)
}