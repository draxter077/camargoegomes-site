export default function title(){
    let style = `
        {
            font-size:26px;
            color:var(--colorWhite);
            background:var(--colorOrange);
            width:100%;
            padding:10px 15px;
            text-align:right;
        }
        :responsive{
            text-align:center;
            font-size:21px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Com experiência em diversas áreas"
    return(title)
}