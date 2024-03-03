let NewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0; 
const ArrayMethod = (element) => {
    if (element % 2 == 0) {
        sum += element ** 2; 
    }
}
NewArray.forEach(ArrayMethod);
console.log(sum); 
console.log("1ci usul")
let months=["Yanvar","Fevral","Mart","Aprel"] ;
function monthDefine(months){
    months.forEach(function(month, index){
  console.log(`${month} :${index+1}`)
    });
  }
  monthDefine(months);

  console.log("2ci usul")

//2ci usul 
  function monthDefineSecond(months){
    months.filter((value,index)=>console.log(`${value} :${index+1}`))
  }
  monthDefineSecond(months)
  console.log("3ci usul")

  function monthDefineThird(months){
    months.map((value,index)=>console.log(`${value} :${index+1}`))
  }

  monthDefineThird(months)