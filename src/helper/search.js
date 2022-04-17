export const search = (coins, input) => {
  if(input !== '')
    return coins.filter((item) => item.name === input);
    else
    return coins
};
