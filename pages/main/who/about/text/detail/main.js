export default function detail(){
    let style = `
        {
            font-size:16px;
            margin:10px 0px 0px 0px;
            text-align:justify;
            color:var(--colorBlack);
        }`

    const detail = cE("div",style)
    detail.innerHTML = `Assumimos o compromisso de lutar por uma nova advocacia.<br>
        Ética, preocupada em fazer o que é certo.<br>
        Acessível, com linguagem clara, simples e objetiva.<br>
        Criativa, que pensa fora da caixa para traçar novas estratégias.<br>
        Crítica, que combate situações de injustiça.<br>
        Ousada, capaz de transformar.`
    return(detail)
}