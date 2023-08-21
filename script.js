// display btn content in calculator screen
function display(content){
    result.value += content
}

function Allclear(){
    result.value =""
}

function calcu(){
    try{
        result.value = eval(result.value)
    }catch{
        result.value = "ERROR"
    }
    
}

function removeLast(){
    result.value = result.value.slice(0,-1)
}