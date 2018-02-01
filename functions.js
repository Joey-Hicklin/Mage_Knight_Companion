export const objReduce = (funct, accepted, object) =>
  Object.keys(object)
  	.reduce((accepted, key) =>
  		funct(accepted, object[key], key, object), accepted);

export const objFilter = (funct, object)=>
  objReduce ((accepted, value, key, object)=>
    funct(value, key, object)
      ? Object.assign(accepted, {[key]: value})
      : accepted, {}, object);

export const andOrObjFilter = (andArray, obj, orArray=[]) => {

  const andResult = objFilter((value,key)=> {
      return(andArray.every(val=> value.indexOf(val) !== -1))
    }, obj);
    
  return objFilter((value, key)=> {
  	return(orArray.some(val=> value.indexOf(val) !== -1))
  }, andResult)
};

export const isFunction = input => typeof input === 'function';

export const renderIf =  predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;

export const shuffle = (deck) => {
  for (let i = 0; i < 300; i++){
    const location1 = Math.floor((Math.random() * deck.length));
    const location2 = Math.floor((Math.random() * deck.length));
    const tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck;
}
