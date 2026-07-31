import title from "./title/main.js"

export default function option(url,t){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:33.3%;
            aspect-ratio:2;
            background-image:url('${url}'); 
            background-position:center; 
            background-repeat:no-repeat; 
            background-size:cover;    
        }
        :responsive{
            width:50%;
            aspect-ratio:1;
        }`

    const option = cE("div",style)
    option.appendChild(title(t))
    return(option)
}