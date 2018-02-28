module.exports = function getZerosCount(number, base) {
  let zerosCount = 0;
  let multiplier = base;

  
  if (multiplier === 2)
  {
    while (multiplier <= number)
    {
      zerosCount += Math.floor(number/multiplier);
      multiplier *= 2; 
    }
      return zerosCount;
  }

  for (i = 2; i < base; i++)
{
  while (multiplier%i === 0 && multiplier !== i )
  {
   multiplier /=i; 
  }
}
 const baseMultiplier = multiplier;
 
 while (multiplier <= number)
 {
  zerosCount += Math.floor(number/multiplier);
   multiplier *= baseMultiplier; 
 }
 
 return zerosCount;
}