function yinYang(arr){
    var result = ''
    for(i = 0; i < arr.length; i++){
      if((arr[i] % 2 == 0) && (arr[i] % 3 == 0)){
        result += 'YinYang'
      }else if(arr[i] % 2 == 0){
        result += 'Yin'
      }else if(arr[i] % 3 == 0){
        result += 'Yang'
      }else{
        result += arr[i]
      }
    }
    return result;
  }
  
  console.log(yinYang([1,2,5,6,11,13,15]));