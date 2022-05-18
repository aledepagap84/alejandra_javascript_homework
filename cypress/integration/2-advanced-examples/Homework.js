//Problem #1

const numberinput= 10;
let natural=0;
//Multiple of 3 or 5
for(let i=0;i<= numberinput;i++){
 if ((i% 3===0) || (i % 5 ===0))
    {
     natural+=i;
    }
}