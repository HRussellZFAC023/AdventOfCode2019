let input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,13,27,1,10,27,31,2,31,13,35,1,10,35,39,2,9,39,43,2,43,9,47,1,6,47,51,1,10,51,55,2,55,13,59,1,59,10,63,2,63,13,67,2,67,9,71,1,6,71,75,2,75,9,79,1,79,5,83,2,83,13,87,1,9,87,91,1,13,91,95,1,2,95,99,1,99,6,0,99,2,14,0,0
];

input[1] = 12;
input[2] = 1;

const run = (copy) => {
  for (let i = 0; i < copy.length; i +=4) {
    const instruction = copy[i];
    const a = copy[i + 1];
    const b = copy[i + 2];
    const c = copy[i + 3];
  
    if (instruction === 1) {
      copy[c] = copy[a] + copy[b]
    }
    else if (instruction === 2) {
      copy[c] = copy[a] * copy[b]
    }
    else if (instruction === 99) {
      break;
    }
  }
  return(copy[0]);
}

const copy = [...input];
console.log(run(copy));


// part 2
const bruteForce = () => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const copy = [...input];
      copy[1] = noun;
      copy[2] = verb;
      if (run(copy) === 19690720) {
        return { noun, verb };
      }
    }
  }
}

console.log(bruteForce());
