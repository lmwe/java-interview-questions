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
  },
  {
    id: '11',
    title: 'Spring Boot自动配置原理是什么？',
    content: '详细解释Spring Boot的自动配置机制，包括@SpringBootApplication注解、@EnableAutoConfiguration、spring.factories文件等。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Spring Boot自动配置通过@EnableAutoConfiguration注解，利用SpringFactoriesLoader加载META-INF/spring.factories文件中定义的自动配置类，根据@Conditional条件注解判断是否生效，最终将Bean注册到容器中。',
    codeExample: `// @SpringBootApplication包含了三个注解
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// 自定义自动配置
@Configuration
@ConditionalOnClass(SomeClass.class)
@EnableConfigurationProperties(MyProperties.class)
public class MyAutoConfiguration {
    @Bean
    @ConditionalOnMissingBean
    public MyBean myBean() {
        return new MyBean();
    }
}`,
    tags: ['Spring Boot', '自动配置']
  },
  {
    id: '12',
    title: '什么是微服务？微服务的优缺点是什么？',
    content: '解释微服务架构的概念、特点、与单体架构的区别，以及微服务的优缺点。',
    category: 'advanced',
    difficulty: 'medium',
    answer: '微服务是将应用拆分为多个小型、独立部署的服务，每个服务专注于单一业务功能，通过轻量级通信机制协作。优点：独立部署、技术栈灵活、易于扩展。缺点：运维复杂、分布式事务、服务调用开销。',
    codeExample: `// 简单的Spring Boot微服务
@SpringBootApplication
@RestController
public class UserService {
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        // 从数据库查询用户
        return new User(id, "张三");
    }
}

// 使用Feign调用其他微服务
@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/orders/user/{userId}")
    List<Order> getOrdersByUserId(@PathVariable Long userId);
}`,
    tags: ['微服务', '架构设计']
  },
  {
    id: '13',
    title: 'Redis的数据结构有哪些？应用场景是什么？',
    content: '介绍Redis的主要数据结构及其应用场景，包括String、Hash、List、Set、Sorted Set等。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Redis支持String（缓存、计数器）、Hash（对象存储）、List（消息队列、栈）、Set（去重、交集）、Sorted Set（排行榜）、HyperLogLog（基数统计）、Bitmap（用户签到）、Geo（地理位置）等数据结构。',
    codeExample: `// String - 缓存用户信息
set user:1 "{\"id\":1,\"name\":\"张三\"}"

// Hash - 存储购物车
hset cart:1 product:1001 2
hset cart:1 product:1002 1

// List - 消息队列
lpush queue:order "order001"

// Sorted Set - 排行榜
zadd leaderboard 100 "user1"
zadd leaderboard 200 "user2"`,
    tags: ['Redis', '缓存']
  },
  {
    id: '14',
    title: '什么是Spring Cloud？常用组件有哪些？',
    content: '介绍Spring Cloud的概念、作用以及常用的组件，如Eureka、Ribbon、Feign、Hystrix、Zuul/Gateway等。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Spring Cloud是一套微服务开发工具集，提供服务发现（Eureka/Nacos）、负载均衡（Ribbon）、服务调用（Feign）、熔断器（Hystrix/Sentinel）、网关（Zuul/Gateway）、配置中心（Config）、链路追踪（Sleuth/Zipkin）等功能。',
    codeExample: `// 服务注册与发现
@EnableDiscoveryClient
@SpringBootApplication
public class ServiceApplication { }

// Feign客户端
@FeignClient("user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 网关路由配置
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**`,
    tags: ['Spring Cloud', '微服务']
  },
  {
    id: '15',
    title: 'MySQL索引原理及B+树为什么适合做索引？',
    content: '解释MySQL索引的底层数据结构，以及为什么InnoDB选择B+树而不是B树或红黑树。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'InnoDB使用B+树作为索引结构。B+树的优点：1)节点可以存储更多key，树更矮，IO次数少；2)查询性能稳定；3)叶子节点有链表，范围查询高效；4)全表扫描更快。相比B树，B+树只有叶子节点存数据，非叶子节点只存索引，内存利用率更高。',
    codeExample: `-- 创建索引
CREATE INDEX idx_username ON users(username);

-- 联合索引
CREATE INDEX idx_name_age ON users(name, age);

-- 查看索引
SHOW INDEX FROM users;

-- 使用EXPLAIN分析查询
EXPLAIN SELECT * FROM users WHERE username = '张三';`,
    tags: ['MySQL', '索引']
  },
  {
    id: '16',
    title: 'JVM垃圾回收机制和常用垃圾回收器',
    content: '详细解释JVM垃圾回收的原理、常用算法（标记清除、复制、标记整理、分代收集）以及常用GC器。',
    category: 'jvm',
    difficulty: 'hard',
    answer: 'JVM垃圾回收识别不再被引用的对象并回收内存。常用算法：标记清除（产生碎片）、复制（年轻代，无碎片但需额外空间）、标记整理（老年代）、分代收集（年轻代+老年代）。常用GC器：Serial、Parallel、CMS、G1、ZGC、Shenandoah。',
    codeExample: `// JVM参数配置
-XX:+UseG1GC           # 使用G1收集器
-XX:MaxGCPauseMillis=200 # 最大GC停顿时间
-XX:+HeapDumpOnOutOfMemoryError # OOM时dump堆
-Xms4g -Xmx4g         # 初始和最大堆大小

// 查看GC日志
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:gc.log`,
    tags: ['JVM', 'GC']
  },
  {
    id: '17',
    title: '什么是分布式事务？解决方案有哪些？',
    content: '解释分布式事务的概念、问题，以及常见的解决方案如2PC、3PC、TCC、Saga、本地消息表、Seata等。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '分布式事务是跨多个数据库或服务的事务，需要保证ACID特性。解决方案：2PC（两阶段提交）、3PC（三阶段）、TCC（Try-Confirm-Cancel）、Saga（长期事务）、本地消息表、Seata（AT/TCC/Saga模式）等。',
    codeExample: `// Seata AT模式示例
@GlobalTransactional
public void createOrder(Order order) {
    // 1. 扣库存
    inventoryService.deduct(order.getProductId(), order.getCount());
    // 2. 创建订单
    orderService.create(order);
    // 3. 扣余额
    accountService.debit(order.getUserId(), order.getAmount());
}

// TCC模式
public interface TccService {
    @TwoPhaseBusinessAction(name = "tccAction", commitMethod = "commit", rollbackMethod = "rollback")
    void try(BusinessActionContext context);
    void commit(BusinessActionContext context);
    void rollback(BusinessActionContext context);
}`,
    tags: ['分布式', '事务']
  },
  {
    id: '18',
    title: 'Kafka的架构和原理是什么？',
    content: '介绍Kafka的核心概念（Producer、Consumer、Broker、Topic、Partition、Offset）和架构原理。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Kafka是分布式消息系统，采用发布-订阅模式。核心组件：Producer（生产者）、Consumer（消费者）、Broker（服务器）、Topic（主题）、Partition（分区）、Replica（副本）、Consumer Group（消费组）、Offset（偏移量）。特点：高吞吐、持久化、分布式。',
    codeExample: `// 生产者
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

Producer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("topic", "key", "value"));

// 消费者
@KafkaListener(topics = "topic", groupId = "group")
public void listen(String message) {
    System.out.println("收到消息: " + message);
}`,
    tags: ['Kafka', '消息队列']
  },
  {
    id: '19',
    title: '如何保证接口的幂等性？',
    content: '解释幂等性的概念，以及常见的保证接口幂等性的方案（唯一索引、Token机制、悲观锁、乐观锁、分布式锁等）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: '幂等性指同一请求多次执行产生的结果一致。解决方案：1)唯一索引（防止重复插入）；2)Token机制（防重复提交）；3)数据库乐观锁（version字段）；4)Redis分布式锁；5)状态机（状态只能单向变更）。',
    codeExample: `// 1. Token机制
@GetMapping("/token")
public String getToken() {
    String token = UUID.randomUUID().toString();
    redisTemplate.opsForValue().set(token, "1", 30, TimeUnit.SECONDS);
    return token;
}

@PostMapping("/order")
public String createOrder(@RequestHeader("token") String token, @RequestBody Order order) {
    Boolean exists = redisTemplate.delete(token);
    if (!exists) {
        return "请勿重复提交";
    }
    orderService.create(order);
    return "成功";
}

// 2. 乐观锁
@Update("UPDATE account SET balance = balance - #{amount}, version = version + 1 WHERE id = #{id} AND version = #{version}")
int deduct(@Param("id") Long id, @Param("amount") BigDecimal amount, @Param("version") Integer version);`,
    tags: ['幂等性', '高并发']
  },
  {
    id: '20',
    title: 'ThreadLocal的原理和内存泄漏问题',
    content: '解释ThreadLocal的工作原理、使用场景，以及为什么会产生内存泄漏，如何避免。',
    category: 'concurrent',
    difficulty: 'hard',
    answer: 'ThreadLocal提供线程本地变量，每个线程都有独立副本。原理：Thread内部有ThreadLocalMap，key是ThreadLocal对象（弱引用），value是线程本地值。内存泄漏原因：key是弱引用会被GC回收，但value是强引用，线程不结束value不会回收，需手动调用remove()。',
    codeExample: `// ThreadLocal使用
public class UserContext {
    private static final ThreadLocal<User> USER_THREAD_LOCAL = new ThreadLocal<>();
    
    public static void setUser(User user) {
        USER_THREAD_LOCAL.set(user);
    }
    
    public static User getUser() {
        return USER_THREAD_LOCAL.get();
    }
    
    public static void clear() {
        USER_THREAD_LOCAL.remove(); // 防止内存泄漏！
    }
}

// 在过滤器中使用
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    try {
        User user = getCurrentUser(request);
        UserContext.setUser(user);
        chain.doFilter(request, response);
    } finally {
        UserContext.clear(); // 必须清理！
    }
}`,
    tags: ['并发', 'ThreadLocal']
  },
  {
    id: '21',
    title: '什么是限流？常用的限流算法有哪些？',
    content: '解释限流的概念和作用，以及常见的限流算法（固定窗口、滑动窗口、漏桶、令牌桶）的实现原理。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '限流是限制系统请求速率，防止过载。常用算法：1)固定窗口计数器（简单但有临界问题）；2)滑动窗口（更平滑）；3)漏桶（恒定速率处理）；4)令牌桶（允许突发流量）。常用实现：Guava RateLimiter、Redis + Lua脚本、Sentinel。',
    codeExample: `// Guava RateLimiter
RateLimiter limiter = RateLimiter.create(10.0); // 每秒10个令牌
if (limiter.tryAcquire()) {
    // 处理请求
}

// Redis + Lua 滑动窗口
local key = KEYS[1]
local window = tonumber(ARGV[1])
local limit = tonumber(ARGV[2])
local currentTime = tonumber(ARGV[3])

redis.call('ZREMRANGEBYSCORE', key, 0, currentTime - window)
local count = redis.call('ZCARD', key)
if count < limit then
    redis.call('ZADD', key, currentTime, currentTime)
    redis.call('EXPIRE', key, window + 1)
    return 1
else
    return 0
end`,
    tags: ['限流', '高并发']
  },
  {
    id: '22',
    title: 'Spring中的循环依赖问题及解决方案',
    content: '解释什么是循环依赖，Spring是如何解决循环依赖问题的（三级缓存）。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '循环依赖是A依赖B，B又依赖A的情况。Spring通过三级缓存解决：1)一级缓存（singletonObjects）存完整Bean；2)二级缓存（earlySingletonObjects）存刚实例化的Bean；3)三级缓存（singletonFactories）存ObjectFactory。关键是在Bean完全初始化前就暴露出来让其他Bean注入。',
    codeExample: `// 循环依赖示例
@Service
public class A {
    @Autowired
    private B b;
}

@Service
public class B {
    @Autowired
    private A a;
}

// 三级缓存源码（DefaultSingletonBeanRegistry）
private final Map<String, Object> singletonObjects = new ConcurrentHashMap<>(256);
private final Map<String, Object> earlySingletonObjects = new HashMap<>(16);
private final Map<String, ObjectFactory<?>> singletonFactories = new HashMap<>(16);`,
    tags: ['Spring', '循环依赖']
  },
  {
    id: '23',
    title: '如何进行SQL优化？',
    content: '介绍SQL优化的常用方法和技巧，包括索引优化、SQL语句优化、表结构优化等。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'SQL优化方法：1)建立合适的索引（避免全表扫描）；2)避免SELECT *；3)使用JOIN代替子查询；4)避免在WHERE子句使用函数或表达式；5)使用LIMIT分页；6)EXPLAIN分析执行计划；7)读写分离；8)使用覆盖索引。',
    codeExample: `-- 不好的写法（索引失效）
SELECT * FROM users WHERE YEAR(create_time) = 2024;
SELECT * FROM users WHERE name LIKE '%张%';

-- 好的写法
SELECT * FROM users WHERE create_time >= '2024-01-01' AND create_time < '2025-01-01';
SELECT * FROM users WHERE name LIKE '张%';

-- 使用覆盖索引
CREATE INDEX idx_name_age ON users(name, age);
SELECT name, age FROM users WHERE name = '张三'; -- 不需要回表

-- EXPLAIN分析
EXPLAIN SELECT * FROM users WHERE id = 1;`,
    tags: ['SQL优化', 'MySQL']
  },
  {
    id: '24',
    title: '什么是ZooKeeper？有哪些应用场景？',
    content: '介绍ZooKeeper的概念、特点、数据结构，以及常见的应用场景（分布式锁、配置中心、服务发现、Leader选举）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'ZooKeeper是分布式协调服务，提供类似文件系统的树形数据结构。特点：有序节点、临时节点、Watcher通知、数据一致性。应用场景：分布式锁、配置中心、服务注册发现、Leader选举、分布式队列。',
    codeExample: `// Curator实现分布式锁
InterProcessMutex lock = new InterProcessMutex(client, "/locks/order");
try {
    if (lock.acquire(10, TimeUnit.SECONDS)) {
        // 执行业务
    }
} finally {
    lock.release();
}

// 监听节点变化
client.getData().usingWatcher((CuratorWatcher) event -> {
    System.out.println("节点变化: " + event.getType());
}).forPath("/config");`,
    tags: ['ZooKeeper', '分布式协调']
  },
  {
    id: '25',
    title: '什么是CAP理论？BASE理论？',
    content: '解释CAP理论的三个要素（一致性、可用性、分区容错性），以及BASE理论（Basically Available、Soft state、Eventually consistent）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'CAP理论：分布式系统中一致性（C）、可用性（A）、分区容错性（P）三者不可兼得，只能选两个。CP系统（HBase、MongoDB）优先保证一致性，AP系统（Cassandra、Eureka）优先保证可用性。BASE理论：基本可用、软状态、最终一致，是对CAP的折中。',
    codeExample: `// Redis保证最终一致性（BASE）
// 写入时先缓存，异步同步到数据库
@CachePut(value = "user", key = "#user.id")
public User update(User user) {
    userDao.update(user);
    // 异步消息通知其他节点
    messageQueue.send("user:update", user.getId());
    return user;
}

// 读取时先从缓存读
@Cacheable(value = "user", key = "#id")
public User getById(Long id) {
    return userDao.findById(id);
}`,
    tags: ['CAP', '分布式理论']
  },
  {
    id: '26',
    title: '什么是分库分表？如何实现？',
    content: '解释分库分表的原因、策略（水平分表、垂直分表、水平分库、垂直分库），以及常用中间件（ShardingSphere、MyCat）。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '分库分表解决单库单表数据量过大的问题。策略：1)垂直分表（按列拆分）；2)水平分表（按行拆分，如哈希、范围分表）；3)垂直分库（按业务拆分库）；4)水平分库（数据分散到多个库）。常用中间件：ShardingSphere-JDBC/Proxy、MyCat。',
    codeExample: `// ShardingSphere配置
spring:
  shardingsphere:
    datasource:
      names: ds0,ds1
      ds0:
        jdbc-url: jdbc:mysql://localhost:3306/db0
        username: root
      ds1:
        jdbc-url: jdbc:mysql://localhost:3306/db1
        username: root
    sharding:
      tables:
        t_order:
          actual-data-nodes: ds\${0..1}.t_order_\${0..1}
          database-strategy:
            inline:
              sharding-column: user_id
              algorithm-expression: ds\${user_id % 2}
          table-strategy:
            inline:
              sharding-column: order_id
              algorithm-expression: t_order_\${order_id % 2}`,
    tags: ['分库分表', '数据库']
  },
  {
    id: '27',
    title: '什么是MySQL的事务隔离级别？',
    content: '介绍SQL标准的四个事务隔离级别（读未提交、读已提交、可重复读、串行化）以及InnoDB的默认隔离级别。',
    category: 'advanced',
    difficulty: 'medium',
    answer: '四个隔离级别：1)READ UNCOMMITTED（读未提交）；2)READ COMMITTED（读已提交，Oracle默认）；3)REPEATABLE READ（可重复读，MySQL默认）；4)SERIALIZABLE（串行化）。InnoDB默认REPEATABLE READ，通过MVCC和Next-Key Lock解决幻读问题。',
    codeExample: `-- 设置隔离级别
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- 查询当前隔离级别
SELECT @@tx_isolation;

-- MySQL 8.0+
SELECT @@transaction_isolation;

-- 开启事务
BEGIN;
-- 执行业务操作
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
-- 提交事务
COMMIT;`,
    tags: ['MySQL', '事务']
  },
  {
    id: '28',
    title: '什么是Nginx？如何配置负载均衡？',
    content: '介绍Nginx的功能和特点，以及如何配置Nginx实现反向代理和负载均衡。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Nginx是高性能Web服务器和反向代理服务器。支持反向代理、负载均衡、静态资源服务、SSL/TLS、限流等。负载均衡策略：轮询（默认）、加权轮询、IP hash、least_conn、url_hash等。',
    codeExample: `# Nginx配置
http {
    upstream backend {
        server 192.168.1.10:8080 weight=3;
        server 192.168.1.11:8080 weight=2;
        server 192.168.1.12:8080 backup;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        }
    }
}`,
    tags: ['Nginx', '负载均衡']
  },
  {
    id: '29',
    title: '什么是Docker？Dockerfile常用指令？',
    content: '介绍Docker的概念、核心组件（镜像、容器、仓库），以及Dockerfile常用指令。',
    category: 'advanced',
    difficulty: 'easy',
    answer: 'Docker是容器化平台，将应用和依赖打包成容器。核心概念：Image（镜像）、Container（容器）、Repository（仓库）。Dockerfile常用指令：FROM、RUN、COPY、ADD、WORKDIR、EXPOSE、CMD、ENTRYPOINT、ENV、VOLUME等。',
    codeExample: `# Dockerfile示例
FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENV JAVA_OPTS="-Xmx512m"
ENTRYPOINT ["java", "-jar", "app.jar"]

# 构建镜像
docker build -t myapp:1.0 .

# 运行容器
docker run -d -p 8080:8080 --name myapp myapp:1.0

# Docker Compose
version: '3'
services:
  app:
    build: .
    ports:
      - "8080:8080"
  redis:
    image: redis:6
    ports:
      - "6379:6379"`,
    tags: ['Docker', '容器化']
  },
  {
    id: '30',
    title: '什么是Netty？核心组件有哪些？',
    content: '介绍Netty的概念、特点、应用场景，以及核心组件（EventLoop、Channel、ChannelPipeline、ChannelHandler等）。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Netty是高性能异步事件驱动的网络框架。核心组件：1)EventLoop（事件循环，处理IO事件）；2)Channel（网络操作抽象）；3)ChannelPipeline（责任链模式）；4)ChannelHandler（业务逻辑处理）；5)ByteBuf（字节容器）。应用场景：RPC框架、游戏服务器、消息推送等。',
    codeExample: `// Netty服务器
ServerBootstrap bootstrap = new ServerBootstrap();
bootstrap.group(new NioEventLoopGroup(), new NioEventLoopGroup())
    .channel(NioServerSocketChannel.class)
    .childHandler(new ChannelInitializer<SocketChannel>() {
        @Override
        protected void initChannel(SocketChannel ch) {
            ch.pipeline()
                .addLast(new StringDecoder())
                .addLast(new StringEncoder())
                .addLast(new SimpleChannelInboundHandler<String>() {
                    @Override
                    protected void channelRead0(ChannelHandlerContext ctx, String msg) {
                        System.out.println("收到: " + msg);
                        ctx.writeAndFlush("收到你的消息");
                    }
                });
        }
    });
bootstrap.bind(8080).sync();`,
    tags: ['Netty', '网络编程']
  },
  {
    id: '31',
    title: '什么是MyBatis？#{}和${}的区别是什么？',
    content: '解释MyBatis的概念、特点，以及#{}和${}的区别、使用场景。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'MyBatis是持久层框架，避免JDBC代码。#{}是预编译处理，使用PreparedStatement，能防止SQL注入。${}是字符串替换，直接替换，有SQL注入风险。#{id} → ?，${table} → 直接替换。',
    codeExample: "<!-- #{}预编译，安全 -->\n<select id=\"getUser\" resultType=\"User\">\n    SELECT * FROM user WHERE id = #{id}\n</select>\n\n<!-- ${}字符串替换，需注意SQL注入 -->\n<select id=\"getUsers\" resultType=\"User\">\n    SELECT * FROM ${tableName}\n</select>\n\n<!-- 模糊查询 - 正确做法 -->\n<select id=\"searchUser\" resultType=\"User\">\n    SELECT * FROM user WHERE name LIKE CONCAT('%', #{keyword}, '%')\n</select>",
    tags: ['MyBatis', 'ORM']
  },
  {
    id: '32',
    title: '什么是RESTful API？设计原则是什么？',
    content: '解释RESTful API的概念、设计原则（资源、HTTP方法、状态码、URI设计等）。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'RESTful是基于REST架构风格的API设计。核心原则：1)资源用URI表示；2)用HTTP动词操作（GET查、POST增、PUT改、DELETE删）；3)无状态；4)用HTTP状态码；5)HATEOAS。',
    codeExample: `// RESTful API示例
GET    /users              # 获取用户列表
GET    /users/1            # 获取id为1的用户
POST   /users              # 创建新用户
PUT    /users/1            # 更新用户
DELETE /users/1            # 删除用户
GET    /users/1/orders     # 获取用户的订单列表
POST   /users/1/orders     # 为用户创建订单

// HTTP状态码
200 OK                    // 成功
201 Created               // 创建成功
400 Bad Request           // 请求参数错误
401 Unauthorized          // 未授权
404 Not Found             // 资源不存在
500 Internal Server Error // 服务器错误`,
    tags: ['RESTful', 'API设计']
  },
  {
    id: '33',
    title: '什么是Redis持久化？RDB和AOF的区别？',
    content: '解释Redis持久化的概念、RDB和AOF两种方式的原理、优缺点对比。',
    category: 'advanced',
    difficulty: 'hard',
    answer: 'Redis持久化将内存数据保存到磁盘。RDB是快照式，save/bgsave生成.rdb文件。AOF记录每次写命令，追加到.aof文件，支持重写。RDB快、文件小但可能丢数据。AOF更可靠、文件大。混合模式是推荐方案。',
    codeExample: `# RDB配置
save 900 1          # 900秒内1个修改
save 300 10         # 300秒内10个修改
rdbfilename dump.rdb

# AOF配置
appendonly yes
appendfsync everysec  # 每秒同步
no-appendfsync-on-rewrite yes

# 混合持久化（Redis 4.0+）
aof-use-rdb-preamble yes

# 命令
SAVE       # 同步保存
BGSAVE     # 后台保存
BGREWRITEAOF # AOF重写`,
    tags: ['Redis', '持久化']
  },
  {
    id: '34',
    title: '什么是缓存雪崩、缓存穿透、缓存击穿？如何解决？',
    content: '解释这三个缓存问题的概念、原因及解决方案。',
    category: 'advanced',
    difficulty: 'hard',
    answer: '缓存雪崩：大量key同时过期。解决：过期时间加随机值。缓存穿透：查不存在的数据。解决：布隆过滤器。缓存击穿：热点key过期。解决：互斥锁、永不过期。',
    codeExample: `// 互斥锁解决缓存击穿
public User getUser(Long id) {
    String key = "user:" + id;
    User user = redis.get(key);
    if (user != null) {
        return user;
    }
    String lockKey = "lock:user:" + id;
    if (redis.set(lockKey, "1", "NX", "EX", 10)) {
        try {
            user = db.getUser(id);
            if (user != null) {
                redis.set(key, user, 3600);
            }
            return user;
        } finally {
            redis.del(lockKey);
        }
    } else {
        Thread.sleep(100);
        return getUser(id);
    }
}

// 布隆过滤器
BloomFilter<Long> filter = BloomFilter.create(Funnels.longFunnel(), 1000000, 0.01);
filter.put(userId);
if (filter.mightContain(userId)) {
    // 查询缓存或数据库
}`,
    tags: ['缓存', 'Redis']
  },
  {
    id: '35',
    title: '什么是JVM类加载机制？双亲委派模型？',
    content: '解释JVM类加载过程、类加载器、双亲委派模型的原理和优势。',
    category: 'jvm',
    difficulty: 'hard',
    answer: '类加载过程：加载、验证、准备、解析、初始化。类加载器：Bootstrap、Extension、Application、Custom。双亲委派：先父后子加载。优势：避免重复加载、保证核心类安全。',
    codeExample: `// 类加载器层次
Bootstrap ClassLoader   // 加载JDK核心类
     ↑
Extension ClassLoader  // 加载扩展类
     ↑
Application ClassLoader // 加载应用类
     ↑
Custom ClassLoader

// 打破双亲委派（Tomcat等）
public class MyClassLoader extends ClassLoader {
    @Override
    protected Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
        // 自定义加载逻辑
    }
}

// 查看类加载器
ClassLoader loader = MyClass.class.getClassLoader();
System.out.println(loader);`,
    tags: ['JVM', '类加载']
  },
  {
    id: '36',
    title: '什么是Sentinel？有什么功能？',
    content: '介绍Sentinel的概念、主要功能（限流、熔断、降级）和使用场景。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Sentinel是阿里的流量控制组件。功能：1)流量控制（QPS限流、并发线程数控制）；2)熔断降级（慢调用、异常比例、异常数）；3)系统保护。比Hystrix更强大。',
    codeExample: `// 定义资源
try (Entry entry = SphU.entry("resourceName")) {
    // 业务逻辑
} catch (BlockException ex) {
    // 被限流/熔断
}

// 注解方式
@SentinelResource(value = "hello", blockHandler = "handleBlock")
public String hello() {
    return "Hello";
}

public String handleBlock(BlockException ex) {
    return "被限流了";
}

// 配置规则
FlowRule rule = new FlowRule();
rule.setResource("resource");
rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
rule.setCount(10); // 每秒10次
FlowRuleManager.loadRules(Collections.singletonList(rule));`,
    tags: ['Sentinel', '限流熔断']
  },
  {
    id: '37',
    title: '什么是设计模式？单例模式有几种写法？',
    content: '介绍设计模式概念，单例模式的多种实现方式（饿汉、懒汉、双重检查、枚举、静态内部类）。',
    category: 'oop',
    difficulty: 'medium',
    answer: '设计模式是问题解决方案的总结。单例模式：1)饿汉式（类加载初始化）；2)懒汉式（需要时创建，线程不安全）；3)双重检查（volatile + synchronized）；4)静态内部类（推荐）；5)枚举（最佳）。',
    codeExample: `// 1. 饿汉式
public class Singleton1 {
    private static final Singleton1 INSTANCE = new Singleton1();
    private Singleton1() {}
    public static Singleton1 getInstance() { return INSTANCE; }
}

// 2. 双重检查
public class Singleton2 {
    private static volatile Singleton2 INSTANCE;
    private Singleton2() {}
    public static Singleton2 getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton2.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton2();
                }
            }
        }
        return INSTANCE;
    }
}

// 3. 静态内部类（推荐）
public class Singleton3 {
    private Singleton3() {}
    private static class Holder {
        private static final Singleton3 INSTANCE = new Singleton3();
    }
    public static Singleton3 getInstance() {
        return Holder.INSTANCE;
    }
}

// 4. 枚举（最佳）
public enum Singleton4 {
    INSTANCE;
}`,
    tags: ['设计模式', '单例']
  },
  {
    id: '38',
    title: '什么是Nacos？服务注册与配置中心？',
    content: '介绍Nacos的功能、特点，以及如何实现服务注册发现和配置中心。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'Nacos是阿里开源的注册中心和配置中心。功能：1)服务发现（替代Eureka）；2)配置中心（替代Config）；3)DNS服务。支持AP和CP模式。',
    codeExample: `// 服务注册
@SpringBootApplication
@EnableDiscoveryClient
public class App { }

// 配置文件
spring:
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
      config:
        server-addr: localhost:8848
        file-extension: yaml

// 动态配置
@RefreshScope
@RestController
public class ConfigController {
    @Value("\${app.name}")
    private String appName;
}

// Nacos API
NamingService naming = NamingFactory.createNamingService("localhost:8848");
naming.registerInstance("serviceName", "127.0.0.1", 8080);
Instance instance = naming.selectOneHealthyInstance("serviceName");`,
    tags: ['Nacos', '微服务']
  },
  {
    id: '39',
    title: '什么是MQ？RabbitMQ的架构？',
    content: '介绍消息队列的概念、作用，RabbitMQ的核心组件和工作流程。',
    category: 'advanced',
    difficulty: 'medium',
    answer: 'MQ是消息中间件，解耦、异步、削峰。RabbitMQ架构：Producer → Exchange（交换机）→ Queue（队列）→ Consumer。交换机类型：direct、topic、fanout、headers。',
    codeExample: `// 简单生产者
ConnectionFactory factory = new ConnectionFactory();
factory.setHost("localhost");
Connection connection = factory.newConnection();
Channel channel = connection.createChannel();
channel.queueDeclare("queue", false, false, false, null);
channel.basicPublish("", "queue", null, "Hello".getBytes());

// 简单消费者
channel.basicConsume("queue", true, (tag, delivery) -> {
    String msg = new String(delivery.getBody());
    System.out.println("收到: " + msg);
}, tag -> {});

// Spring Boot
@RabbitListener(queues = "queue")
public void listen(String msg) {
    System.out.println("收到: " + msg);
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue("queue"),
    exchange = @Exchange(value = "exchange", type = "topic"),
    key = "routing.key"
))`,
    tags: ['RabbitMQ', '消息队列']
  },
  {
    id: '40',
    title: '什么是GitFlow工作流？常用Git命令？',
    content: '介绍GitFlow分支管理策略，以及常用Git命令。',
    category: 'basics',
    difficulty: 'easy',
    answer: 'GitFlow是分支管理模型：master（生产）、develop（开发）、feature（功能）、release（发布）、hotfix（热修复）。常用命令：clone、pull、push、add、commit、merge、rebase、stash。',
    codeExample: `# GitFlow流程
git checkout -b feature/new-feature develop  # 新建功能分支
# 开发完成
git checkout develop
git merge --no-ff feature/new-feature
# 准备发布
git checkout -b release/1.0 develop
# 修复bug后合并到master和develop
git checkout master
git merge --no-ff release/1.0
git tag -a 1.0
git checkout develop
git merge --no-ff release/1.0
# 热修复
git checkout -b hotfix/bug master
# 修复后合并到master和develop

# 常用命令
git clone repo
git pull origin main
git add .
git commit -m "message"
git push origin main
git branch new-branch
git checkout new-branch
git merge other-branch
git rebase main
git stash`,
    tags: ['Git', '版本控制']
  }
];
