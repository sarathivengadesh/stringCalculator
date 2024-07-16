
const add=(value)=>{
  // Empty Case
  if(!value || value.trim()==="") return 0;
  const regex = /-?\d/g
  // Filter number in the string and convert to Number
  const findNumbers = value?.match(regex)?.map(Number)|| [];
  // Filter negative case and throw error
  const findNegativeNum = findNumbers?.filter((n) => n < 0);
 if(findNegativeNum?.length>0){
   throw new Error (`Negative numbers not allowed: ${findNegativeNum?.join(',')}`);
 }
 // return Total value of set of Numbers
 const result = findNumbers?.reduce((total,old)=>{return total+old},0);
  return result;
}

module.exports = { add };