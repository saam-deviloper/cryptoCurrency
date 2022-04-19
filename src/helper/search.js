export const search = (coins, input) => {
  // const {name} =  coins; 
  // console.log(coins);
  //const re = RegExp(`.*${input.toLowerCase().split('').join('.*')}.*`)
  if (input !== '')
    return coins.filter(
      (item) => item.id.toLowerCase().match(input)
    );
  else return coins;
};
