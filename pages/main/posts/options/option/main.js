import title from "./title/main.js"

export default function option(l,url,t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:18%;
            aspect-ratio:1;
            background-image:url('${url}'); 
            background-position:center; 
            background-repeat:no-repeat; 
            background-size:cover;
            box-shadow:0px 0px 5px 3px var(--colorWhite);
            transition:box-shadow 0.5s;
            cursor:pointer;
        }
        :hover{
            box-shadow:0px 0px 5px 3px var(--colorOrange);
        }`

    const option = cE("a",style)
    option.href = l
    option.target = "_blank"
    option.appendChild(title(t))
    return(option)
}