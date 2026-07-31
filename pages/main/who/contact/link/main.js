export default function link(i,l){
    let style = `
        {
            height:60px;
            cursor:pointer;
            margin:0px 2%;
            padding:10px;
            border-radius:5px;
            background:var(--colorOrange);
            transition:background 0.25s;
        }
        >img{
            height:100%;
            filter:invert(1);
        }
        :hover{
            background:var(--colorBlack);
        }
        :responsive{
            height:50px;
        }`

    const link = cE("a",style)
    link.href = l
    link.target = "_blank"
    link.innerHTML = `<img src="${i}"></img>`
    return(link)
}