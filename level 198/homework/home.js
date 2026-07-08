// HashMap 

// HashMap არის Java-ს მონაცემთა სტრუქტურა, რომელიც ინახავს მონაცემებს
// Key-Value წყვილების სახით. მონაცემები ინახება 
// მექანიზმის გამოყენებით, სადაც თითოეულ Key-ს შეესაბამება კონკრეტული Value.
//
// Key არის უნიკალური რომლის საშუალებითაც ვპოულობთ მონაცემს,
// ხოლო Value არის მნიშვნელობა რომელიც დაკავშირებულია ამ Key-სთან.
//
// HashMap-ში ერთნაირი Key-ების შენახვა არ შეიძლება, რადგან თითოეული Key უნიკალური უნდა იყოს, თუმცა ერთნაირი Value-ების შენახვა შესაძლებელია.
//
// HashMap-ის გამოსაყენებლად საჭიროა:
// import java.util.HashMap;

// public class Main {
//     public static void main(String[] args) {

//         HashMap-ის შექმნა
//         HashMap<String, Integer> map = new HashMap<>();

//          ახალი ელემენტის დამატება
//         map.put("Ana", 20);
//         map.put("Nika", 18);
//         map.put("Luka", 20);

//         კონკრეტული მნიშვნელობის მიღება
//         System.out.println(map.get("Ana"));

//         არსებული Key-სთვის ახალი Value-ის მინიჭება
//         map.put("Ana", 25);

//          ელემენტის წაშლა
//         map.remove("Nika");

//          Key-ის არსებობის შემოწმება
//         System.out.println(map.containsKey("Ana"));

//         Value-ის არსებობის შემოწმება
//         System.out.println(map.containsValue(25));

//         ელემენტების რაოდენობა
//         System.out.println(map.size());

//         ყველა Key
//         System.out.println(map.keySet());

//         ყველა Value
//         System.out.println(map.values());

//         ყველა Key-Value წყვილი
//         System.out.println(map.entrySet());

//         HashMap-ის გასუფთავება
//         map.clear();

//         System.out.println(map);
//     }
// }