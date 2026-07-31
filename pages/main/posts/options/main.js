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
    options.appendChild(option("https://www.camargoegomes.com/post/i-congresso-prudentino-de-processo-civil-10-anos-de-vig%C3%AAncia","./assets/parceriaPublicoPrivada.jpeg","I Congresso Prudentino de Processo Civil: 10 anos de vigência"))
    options.appendChild(option("https://carbonocamargoegomes.substack.com/p/edicao-20-perdas-e-ganhos-em-belem","./assets/fundoPatrimonial.jpg","InfoCarbono #20: Perdas e ganhos em Belém"))
    options.appendChild(option("https://www.camargoegomes.com/post/arbitragem-e-an%C3%A1lise-econ%C3%B4mica-do-direito","./assets/dissolucaoDeSociedade.jpeg","Arbitragem e Análise Econômica do Direito"))
    options.appendChild(option("https://carbonocamargoegomes.substack.com/p/edicao-19-enfim-belem","./assets/recuperacaoDeCredito.jpeg","InfoCarbono #19: Enfim, Belém"))
    options.appendChild(option("https://www.camargoegomes.com/post/adriano-camargo-gomes-torna-se-livre-docente-pela-faculdade-de-direito-da-usp","./assets/reservasExtrativistas.jpeg","Adriano Camargo e Gomes torna-se livre docente pela Faculdade de Direito da USP"))
    return(options)
}