/* 
- ให้เขียน Function ที่ชื่อว่า heaviestBagPair โดยมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัว คือ bagWeights มี Value Type เป็น Array ที่เก็บน้ำหนักกระเป๋านักเรียนแต่ละคน
        - Function นี้จะ Return กระเป๋านักเรียนคู่ที่มีน้ำหนักรวมกันมากที่สุด โดยกระเป๋า 2 ใบนี้ต้องวางอยู่ติดกัน
        - ถ้ามีกระเป๋าน้อยกว่า 2 ใบ ให้ Return null
*/

function heaviestBagPair(bagWeights) {
  // Start Coding Here
}

console.log(heaviestBagPair([5, 8, 12, 15, 7]));
// Output: [12, 15] เพราะเป็นคู่กระเป๋าที่หนักที่สุด (27 กก.)

console.log(heaviestBagPair([10, 20, 5, 7, 15]));
// Output: [10, 20] เพราะเป็นคู่กระเป๋าที่หนักที่สุด (30 กก.)

console.log(heaviestBagPair([4]));
// Output: null เพราะมีกระเป๋าแค่ใบเดียว
