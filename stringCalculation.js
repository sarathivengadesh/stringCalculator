
const add=(value)=>{
  if(!value || value.trim()==="") return 0;
  return parseInt(value);
}

module.exports = { add };