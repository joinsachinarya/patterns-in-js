for(let i  = 1; i<=5; i++){
    let str = ''
    let n = 65;
    for(let j=1; j<=i; j++){
        str+=String.fromCharCode(n);
        n++;
    }
    console.log(str);
}