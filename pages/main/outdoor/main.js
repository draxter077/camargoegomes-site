export default function outdoor(){
    let style = `
        {
            width:100%;
            padding:5% 0px 2.5%;
            background:var(--colorOrange);
            text-align:center;
            font-size:50px;
            color:var(--colorWhite);
            font-weight:900;
            line-height:1.0;
        }
        :responsive{
            width:95%;
            padding:20% 0px;
        }`

    const outdoor = cE("div",style)
    outdoor.innerHTML = `Uma nova<br>advocacia.`
    return(outdoor)
}