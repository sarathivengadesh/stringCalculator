
const add=(value)=>{
  if(!value || value.trim()==="") return 0;
  const regex = /\d+/g
  const result = value.match(regex)?.reduce((total,old)=>{return total+parseInt(old)},0);

  return result;
}

module.exports = { add };