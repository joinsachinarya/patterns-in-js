for(let i =1; i<=5; i++){
    let str = '';
    for(let j=1; j<=10; j++){
        if(i==1){
            str+='*';
        }else{
            if(j>=7-i && j<=4+i){
                str+=" "
            }else{
                str+='*'
            }
        }
    }
    console.log(str);
}
for(let i =1; i<=5; i++){
    let str = '';
    for(let j=1; j<=10; j++){
        if(i==10){
            str+='*'
        }else{
            if(j>i && j<=10-i){
                str+=' '
            }else{
                str+="*"
            }
        }
    }
    console.log(str);
}