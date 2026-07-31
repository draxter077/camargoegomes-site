export default function outdoor(){
    let style = `
        {

            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            text-align:center;
            padding:5% 0px;
            background:var(--colorOrange);
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
    outdoor.innerHTML = "Uma nova<br>advocacia."
    return(outdoor)
}