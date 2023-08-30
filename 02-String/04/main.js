
const text = (x) =>{
    if(x === 'xxx' || x === 'sex' || x === 'porn' ){
        return true
    }else if(x === 'XXX'.toUpperCase() || x === 'pOrn'.toUpperCase() || x === 'sEX'.toUpperCase()){
        return false
    }else{
        return false
    }
   
}
console.log(text('pOrn'));
