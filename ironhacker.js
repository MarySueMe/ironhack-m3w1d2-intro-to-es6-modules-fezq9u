const ironhacker = {
  name: 'Bob',
  age: 32,
};

export const printName = () => {
  console.log(ironhacker.name);
};

export const printAge = () => {
  console.log(ironhacker.age);
};

export const printIronhackerDetails = () => {
  printName();
  printAge();
};

// export {printName, printAge, printIronhackerDetails};

export default printIronhackerDetails;



