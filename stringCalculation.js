
const add=(value)=>{
  if(!value || value.trim()==="") return 0;
  const regex = /-?\d/g
  const findNumbers = value?.match(regex)?.map(Number)|| [];
  const findNegativeNum = findNumbers?.filter((n) => n < 0);
 if(findNegativeNum?.length>0){
   throw new Error (`Negative numbers not allowed: ${findNegativeNum?.join(',')}`);
 }
 const result = findNumbers?.reduce((total,old)=>{return total+old},0);
  return result;
}

module.exports = { add };