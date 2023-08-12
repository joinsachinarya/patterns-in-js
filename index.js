for(let i = 1; i<=3; i++){
    let str = '';
    for(let j = 1; j<=5; j++){
        if(i==2){
            if(j==1 || j==5){
                str+='*';
            }
            else{
                str+=' ';
            }
        }
        else{
            str+='*';
        }
    }
    console.log(str);
}