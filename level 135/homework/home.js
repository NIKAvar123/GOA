
//codewars


//1
// function triangleArea(triangle) {
// const ax = triangle.a.x;  
//   const ay = triangle.a.y;
//   const bx = triangle.b.x;
//   const by = triangle.b.y;
//   const cx = triangle.c.x;
//   const cy = triangle.c.y;

//   const area = 0.5 * Math.abs(
//     ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)
//   );

//   return area;
// }


//2
// function uniquePush(arr, obj) {
//   if (!obj.phoneNumber) return false;

//   if (!arr.some(function(item) { return item.phoneNumber === obj.phoneNumber; })) {
//     arr.push(obj);
//     return true;
//   }
//   return false;
// }


//4
// def duplicate_count(text):
//     seen = set()
//     dupes = set()
//     for char in text:
//         char = char.lower()
//         if char in seen:
//             dupes.add(char)
//         seen.add(char)
//     return len(dupes)


//5
// def filter_numbers(st):
//     return "".join(x for x in st if x not in '1234567890')