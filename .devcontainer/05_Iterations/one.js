for(let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}   
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        break; // exit the loop when i is 3
    }
    console.log("Iteration number: " + i);
}   
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        continue; // skip the rest of the loop when i is 3
    }
    console.log("Iteration number: " + i);
}