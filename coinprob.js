/*In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).It is possible to make £2 in the following way:

1x£1 + 1x50p + 2x20p + 1x5p + 1x2p + 3x1p

How many different ways can £2 be made using any number of coins?*/

let target  = 200;
let ways = 0;
 
for (let a = target; a >= 0; a -= 200) {
    for (let b = a; b >= 0; b -= 100) {
        for (let c = b; c >= 0; c -= 50) {
            for (let d = c; d >= 0; d -= 20) {
                for (let e = d; e >= 0; e -= 10) {
                    for (let f = e; f >= 0; f -= 5) {
                        for (let g = f; g >= 0; g -= 2) {
                            ways++;
                        }
                    }
                }
            }
        }
    }
}
console.log(ways)