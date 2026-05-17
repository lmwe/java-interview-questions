import { Question } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    title: 'Java中==和equals的区别是什么？',
    content: '请详细解释Java中==运算符和equals方法的区别，并举例说明。',
    category: 'basics',
    difficulty: 'easy',
    answer: '==用于比较基本数据类型的值是否相等，或比较引用类型的引用地址是否相同。equals方法用于比较对象的内容是否相等，默认行为与==相同，但通常被重写（如String、Integer等类）来比较内容。',
    codeExample: `String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);      // false，引用不同
System.out.println(s1.equals(s2)); // true，内容相同

int a = 10;
int b = 10;
System.out.println(a == b);        // true，基本类型比较值`,
    tags: ['基础', '面向对象']
  },
  {
    id: '2',
    title: '什么是Java的自动装箱和拆箱？',
    content: '解释Java中的自动装箱（autoboxing）和拆箱（unboxing）概念，并说明它们的使用场景和注意事项。',
    category: 'basics',
    difficulty: 'easy',
    answer: '自动装箱是Java编译器自动将基本类型转换为对应的包装类类型的过程，拆箱则是相反的过程。例如int自动转换为Integer，Double自动转换为double等。这简化了代码，但在性能敏感的场景或集合操作中需要注意。',
    codeExample: `// 自动装箱
Integer i = 100; // 相当于 Integer.valueOf(100)

// 自动拆箱
int j = i;       // 相当于 i.intValue()

// 在集合中使用
List<Integer> list = new ArrayList<>();
list.add(1);     // 自动装箱`,
    tags: ['基础', '类型系统']
  },
  {
    id: '3',
    title: 'String、StringBuilder和StringBuffer的区别',
    content: '比较这三个字符串相关类的特点、使用场景和性能差异。',
    category: 'basics',
    difficulty: 'medium',
    answer: 'String是不可变的，每次修改都会创建新对象。StringBuilder是可变的，非线程安全，性能高。StringBuffer是可变的，线程安全（方法都加了synchronized），性能略低于StringBuilder。',
    codeExample: `// String - 不可变
String s = "hello";
s = s + " world"; // 创建新对象

// StringBuilder - 可变，非线程安全
StringBuilder sb = new StringBuilder("hello");
sb.append(" world"); // 原地修改

// StringBuffer - 可变，线程安全
StringBuffer sbuf = new StringBuffer("hello");
sbuf.append(" world");`,
    tags: ['字符串', '性能']
  },
  {
    id: '4',
    title: 'Java中的异常体系是怎样的？',
    content: '请描述Java异常的层次结构，以及Error、Exception、RuntimeException的区别。',
    category: 'basics',
    difficulty: 'medium',
    answer: 'Java异常体系的根类是Throwable，分为Error和Exception。Error表示系统级错误，通常无法恢复。Exception分为受检异常（必须处理）和非受检异常（RuntimeException及其子类）。RuntimeException表示编程错误，如空指针、数组越界等。',
    codeExample: `// 受检异常 - 需要catch或throws
public void readFile() throws IOException {
    FileInputStream fis = new FileInputStream("file.txt");
}

// 非受检异常 - 可以不处理
public void divide(int a, int b) {
    if (b == 0) {
        throw new ArithmeticException("除数不能为0");
    }
}`,
    tags: ['异常处理', '核心概念']
  },
  {
    id: '5',
    title: '什么是Java的反射机制？',
    content: '解释Java反射的概念、用途、优缺点以及基本使用方法。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '反射允许程序在运行时检查类、接口、方法和字段的信息，并且可以在运行时创建对象、调用方法、访问字段。它是框架开发的基础，但会降低性能并破坏封装性。',
    codeExample: `// 获取Class对象
Class<?> clazz = Class.forName("java.lang.String");

// 获取构造函数并创建对象
Constructor<?> constructor = clazz.getConstructor(String.class);
String str = (String) constructor.newInstance("hello");

// 获取方法并调用
Method method = clazz.getMethod("length");
int length = (int) method.invoke(str);`,
    tags: ['高级特性', '反射']
  },
  {
    id: '6',
    title: 'HashMap的实现原理是什么？',
    content: '详细描述Java 8中HashMap的底层数据结构、hash算法、扩容机制等。',
    category: 'collection',
    difficulty: 'hard',
    answer: 'Java 8的HashMap底层使用数组+链表+红黑树实现。当链表长度超过8且数组容量大于64时，链表会转为红黑树。hash通过hash(key) ^ (hash >>> 16)计算。当size超过负载因子0.75*capacity时，数组会扩容为原来的2倍。',
    codeExample: `// HashMap的基本使用
HashMap<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.put("b", 2);

// 遍历方式
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`,
    tags: ['集合', '数据结构']
  },
  {
    id: '7',
    title: 'ArrayList和LinkedList的区别',
    content: '对比这两个List实现类的底层结构、性能特点和适用场景。',
    category: 'collection',
    difficulty: 'medium',
    answer: 'ArrayList基于动态数组实现，随机访问快，插入删除慢（需要移动元素）。LinkedList基于双向链表实现，插入删除快，随机访问慢（需要遍历）。ArrayList默认容量10，扩容为1.5倍。',
    codeExample: `// ArrayList
List<String> arrayList = new ArrayList<>();
arrayList.get(0);        // O(1) 快速随机访问
arrayList.add(0, "a");   // O(n) 需要移动元素

// LinkedList
List<String> linkedList = new LinkedList<>();
linkedList.get(0);       // O(n) 需要遍历
linkedList.add(0, "a");  // O(1) 只修改指针`,
    tags: ['集合', 'List']
  },
  {
    id: '8',
    title: '什么是Java的多态？',
    content: '解释多态的概念、实现方式（重载和重写）以及向上转型和向下转型。',
    category: 'oop',
    difficulty: 'medium',
    answer: '多态是指同一操作作用于不同对象会产生不同的结果。实现方式包括方法重载（编译时多态）和方法重写（运行时多态）。向上转型是子类转父类，自动进行；向下转型是父类转子类，需要强制类型转换并可能抛出ClassCastException。',
    codeExample: `class Animal {
    void makeSound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Woof!"); }
}

// 多态示例
Animal animal = new Dog(); // 向上转型
animal.makeSound();        // 运行时调用Dog的方法`,
    tags: ['面向对象', '多态']
  },
  {
    id: '9',
    title: 'synchronized关键字的作用和原理',
    content: '解释synchronized的用法、作用范围以及底层实现原理。',
    category: 'concurrent',
    difficulty: 'hard',
    answer: 'synchronized用于保证多线程环境下的原子性、可见性和有序性。可以修饰方法或代码块。底层通过对象头的Mark Word和monitor机制实现。JDK 6后引入了偏向锁、轻量级锁、重量级锁的锁升级机制来优化性能。',
    codeExample: `// 修饰实例方法
public synchronized void increment() {
    count++;
}

// 修饰代码块
public void decrement() {
    synchronized (this) {
        count--;
    }
}

// 修饰静态方法
public static synchronized void staticMethod() {
    // ...
}`,
    tags: ['并发', '线程安全']
  },
  {
    id: '10',
    title: 'Java内存模型（JMM）是什么？',
    content: '描述Java内存模型的概念、主内存和工作内存的关系，以及volatile、synchronized等关键字在JMM中的作用。',
    category: 'jvm',
    difficulty: 'hard',
    answer: 'JMM定义了线程和主内存之间的抽象关系，规定了共享变量的访问规则。每个线程有自己的工作内存，共享变量存于主内存。需要保证原子性、可见性、有序性。volatile保证可见性和有序性，synchronized保证三者都有。',
    codeExample: `// volatile保证可见性和禁止指令重排序
private volatile boolean flag = false;

public void writer() {
    flag = true; // 写操作会立即刷新到主内存
}

public void reader() {
    if (flag) { // 读操作会从主内存重新读取
        // ...
    }
}`,
    tags: ['JVM', '并发']
  }
];
