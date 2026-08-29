// class Node {
//     int data;
//     Node next;
//     Node prev;

//     public Node(int data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     private Node head;
//     private Node tail;

//     // ელემენტის დამატება ბოლოში
//     public void addLast(int data) {
//         Node newNode = new Node(data);

//         if (head == null) {
//             head = tail = newNode;
//             return;
//         }

//         tail.next = newNode;
//         newNode.prev = tail;
//         tail = newNode;
//     }

//     // ელემენტის დამატება თავში
//     public void addFirst(int data) {
//         Node newNode = new Node(data);

//         if (head == null) {
//             head = tail = newNode;
//             return;
//         }

//         newNode.next = head;
//         head.prev = newNode;
//         head = newNode;
//     }

//     // ელემენტის წაშლა მნიშვნელობით
//     public void remove(int data) {
//         if (head == null) {
//             return;
//         }

//         Node current = head;

//         while (current != null && current.data != data) {
//             current = current.next;
//         }

//         if (current == null) {
//             return; // ელემენტი ვერ მოიძებნა
//         }

//         if (current == head) {
//             head = head.next;
//             if (head != null) {
//                 head.prev = null;
//             } else {
//                 tail = null;
//             }
//             return;
//         }

//         if (current == tail) {
//             tail = tail.prev;
//             tail.next = null;
//             return;
//         }

//         current.prev.next = current.next;
//         current.next.prev = current.prev;
//     }

//     // ელემენტის ძებნა
//     public boolean contains(int data) {
//         Node current = head;

//         while (current != null) {
//             if (current.data == data) {
//                 return true;
//             }
//             current = current.next;
//         }

//         return false;
//     }

//     // დაბეჭდვა თავიდან ბოლომდე
//     public void printForward() {
//         Node current = head;

//         while (current != null) {
//             System.out.print(current.data + " <-> ");
//             current = current.next;
//         }

//         System.out.println("null");
//     }

//     // დაბეჭდვა ბოლოდან დასაწყისამდე
//     public void printBackward() {
//         Node current = tail;

//         while (current != null) {
//             System.out.print(current.data + " <-> ");
//             current = current.prev;
//         }

//         System.out.println("null");
//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         DoublyLinkedList list = new DoublyLinkedList();

//         list.addLast(10);
//         list.addLast(20);
//         list.addLast(30);

//         list.addFirst(5);

//         System.out.println("Forward:");
//         list.printForward();
//         // 5 <-> 10 <-> 20 <-> 30 <-> null

//         System.out.println("Backward:");
//         list.printBackward();
//         // 30 <-> 20 <-> 10 <-> 5 <-> null

//         System.out.println(list.contains(20));
//         // true

//         list.remove(20);

//         System.out.println("After removing 20:");
//         list.printForward();
//         // 5 <-> 10 <-> 30 <-> null
//     }
// }