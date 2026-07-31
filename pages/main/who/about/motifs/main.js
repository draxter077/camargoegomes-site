import motif from "./motif/main.js"

export default function motifs(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            margin:2% 0px 0px;
        }`

    const motifs = cE("div",style)
    motifs.appendChild(motif("Ética","Preocupada em fazer o que é certo"))
    motifs.appendChild(motif("Acessível","Com linguagem clara, simples e objetiva"))
    motifs.appendChild(motif("Criativa","Que pensa fora da caixa para traçar novas estratégias"))
    motifs.appendChild(motif("Crítica","Que combate situações de injustiça"))
    motifs.appendChild(motif("Ousada","Capaz de transformar"))
    return(motifs)
}