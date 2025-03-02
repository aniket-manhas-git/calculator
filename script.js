let display=document.querySelector("input");
let box=document.querySelector(".box");
let val =0;
box.addEventListener("click",(e)=>{
    if(val===1)
    {
        display.value="";
        val=0;
    }
    if(e.target.innerText=="")
    {
        display.value=display.value.slice(0,-1);
    }
    if((e.target.tagName.toLowerCase())=="button")
    {
        if(e.target.innerText=="AC")
        {
            display.value="";
        }
        else if(e.target.innerText=="=")
        {
            try
            {
                val=1;
                const result = eval(display.value);
                display.value = Number(result.toFixed(10)).toString();
            }
            catch{
                display.value="ERROR";
            }
        }
        else{
            display.value+=e.target.innerText;
        }
    }
    display.scrollLeft = display.scrollWidth;
});
