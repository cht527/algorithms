function shuffle (arr){
    let i = arr.length-1;
    while(i){
        const r = Math.floor(Math.random()*i--);
        [arr[i], arr[r]] = [arr[r],arr[i]]
    }

    return arr
}