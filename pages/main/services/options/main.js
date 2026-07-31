import option from "./option/main.js"

export default function options(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:100%;
            margin:1% 0px 0px;
        }`

    const options = cE("div",style)
    options.appendChild(option("./assets/parceriaPublicoPrivada.jpeg","Parceria Público-Privada"))
    options.appendChild(option("./assets/fundoPatrimonial.jpg","Fundo Patrimonial"))
    options.appendChild(option("./assets/dissolucaoDeSociedade.jpeg","Dissolução de Sociedade"))
    options.appendChild(option("./assets/recuperacaoDeCredito.jpeg","Recuperação de Crédito"))
    options.appendChild(option("./assets/reservasExtrativistas.jpeg","Reservas Extrativistas"))
    options.appendChild(option("./assets/ouvidoriasPublicas.jpeg","Ouvidorias Públicas"))
    return(options)
}