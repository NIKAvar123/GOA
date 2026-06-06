

// // 1) GET მეთოდი - ყველა წიგნის მიღება
// @GetMapping("/books")
// public List<Book> getAllBooks() {
//     return books;
// }

// // 2) POST მეთოდი - ახალი წიგნის დამატება
// @PostMapping("/books")
// public void addBook(@RequestBody Book book) {
//     books.add(book);
// }

// // 3) PUT მეთოდი - არსებული წიგნის განახლება
// @PutMapping("/books/{id}")
// public void updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
//     books.set(id, updatedBook);
// }

// // 4) DELETE მეთოდი - წიგნის წაშლა
// @DeleteMapping("/books/{id}")
// public void deleteBook(@PathVariable int id) {
//     books.remove(id);
// }

/*
5) რა მოხდება თუ:

- GET მეთოდით მონაცემის დამატებას ვეცდებით?
  არ იმუშავებს სწორად, რადგან GET გამოიყენება მხოლოდ მონაცემების მისაღებად.

- DELETE მეთოდით მონაცემის მიღებას ვეცდებით?
  არ იმუშავებს სწორად, რადგან DELETE გამოიყენება მხოლოდ მონაცემების წასაშლელად.
*/

/*
6) დააკავშირე მეთოდები მათ დანიშნულებასთან:

GET    -> მონაცემის მიღება
POST   -> მონაცემის დამატება
PUT    -> მონაცემის განახლება
DELETE -> მონაცემის წაშლა
*/