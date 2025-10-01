export interface Topic {
  id: string;
  title: string;
  description?: string;
  subtopics?: Topic[];
  blogs?: Blog[];
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  type: "blog" | "interview";
}

export const topics: Topic[] = [
  {
    id: "react",
    title: "React.js",
    description: "Learn React.js from basics to advanced concepts",
    subtopics: [
      {
        id: "react-basics",
        title: "React Fundamentals",
        blogs: [
          {
            id: "react-lifecycle",
            title: "React Component Lifecycle",
            description:
              "Understanding the lifecycle of React components and how they work",
            content:
              "1. What are the different phases of React component lifecycle?\nAnswer: React components go through three main phases:\n- Mounting: When component is created and inserted into DOM (constructor, getDerivedStateFromProps, render, componentDidMount)\n- Updating: When component re-renders due to props/state changes (getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate)\n- Unmounting: When component is removed from DOM (componentWillUnmount)\n\n2. How do lifecycle methods differ in class and functional components?\nAnswer: Class components use explicit lifecycle methods like componentDidMount, while functional components use the useEffect Hook to handle lifecycle events. useEffect combines the functionality of several lifecycle methods into a single API.\n\n3. What is the purpose of useEffect and how does it relate to lifecycle methods?\nAnswer: useEffect is a Hook that handles side effects in functional components. It combines the functionality of:\n- componentDidMount (empty dependency array)\n- componentDidUpdate (with dependencies)\n- componentWillUnmount (cleanup function)\nIt allows you to perform side effects like data fetching, subscriptions, or DOM mutations.",
            date: "2025-10-01",
            tags: ["react", "lifecycle", "components"],
            type: "interview",
          },
          {
            id: "react-hooks-fundamentals",
            title: "Essential React Hooks",
            description: "Common interview questions about React Hooks",
            content:
              "1. What are React Hooks and why were they introduced?\nAnswer: React Hooks are functions that allow you to 'hook into' React state and lifecycle features from functional components. They were introduced to:\n- Enable state and other React features in functional components\n- Avoid the complexity of class components\n- Make it easier to reuse stateful logic between components\n- Eliminate the confusion around 'this' keyword\n\n2. Explain the rules of Hooks\nAnswer: There are two main rules:\n- Only call Hooks at the top level (not inside loops, conditions, or nested functions)\n- Only call Hooks from React function components or custom Hooks\nThese rules ensure that Hooks maintain their state correctly between re-renders.\n\n3. What's the difference between useState and useRef?\nAnswer:\n- useState: Triggers re-render when value changes, used for reactive state\n- useRef: Persists value between renders without causing re-renders, ideal for:\n  - Storing mutable values\n  - Accessing DOM elements directly\n  - Storing previous values\n\n4. How does useCallback help with performance?\nAnswer: useCallback memoizes functions between re-renders:\n- Prevents unnecessary re-renders of child components that receive functions as props\n- Useful when passing callbacks to optimized child components that rely on reference equality\n- Should be used alongside React.memo for child components\n- Only needed for performance optimization, not required for functionality",
            date: "2025-10-01",
            tags: ["react", "hooks", "frontend"],
            type: "interview",
          },
        ],
      },
      {
        id: "react-advanced",
        title: "Advanced React Concepts",
        blogs: [
          {
            id: "react-performance",
            title: "React Performance Optimization",
            description: "Key concepts for optimizing React applications",
            content:
              "1. What techniques can you use to optimize React performance?\nAnswer: Key optimization techniques include:\n- Using React.memo for component memoization\n- Implementing useMemo for expensive calculations\n- Using useCallback for function memoization\n- Code splitting with React.lazy and Suspense\n- Virtual list for rendering large lists (react-window/react-virtualized)\n- Proper key usage in lists\n- Debouncing and throttling event handlers\n\n2. How does React.memo work and when should you use it?\nAnswer: React.memo is a higher-order component that memoizes component renders:\n- It prevents re-rendering if props haven't changed\n- Performs a shallow comparison of props by default\n- Can accept a custom comparison function\nUse it when:\n- Component re-renders frequently with same props\n- Component has expensive render calculations\n\n3. What is code splitting in React and how do you implement it?\nAnswer: Code splitting is a technique to split your code into smaller chunks and load them on demand:\n- Implemented using dynamic imports with React.lazy\n- Commonly used with React Router for route-based splitting\nExample:\n```jsx\nconst MyComponent = React.lazy(() => import('./MyComponent'));\n```\n\n4. Explain the concept of React Suspense\nAnswer: Suspense is a React feature that allows components to 'suspend' rendering while they load:\n- Works with React.lazy for code splitting\n- Provides fallback UI while components load\n- Will support data fetching in future React versions\n- Helps create better loading states and transitions",
            date: "2025-10-01",
            tags: ["react", "performance", "advanced"],
            type: "interview",
          },
          {
            id: "react-state-management",
            title: "State Management in React",
            description:
              "Different approaches to managing state in React applications",
            content:
              "1. Compare Redux, Context API, and other state management solutions\nAnswer: Different solutions have different use cases:\n- Redux:\n  - Best for large applications with complex state\n  - Provides centralized state management\n  - Great dev tools and middleware ecosystem\n- Context API:\n  - Built into React\n  - Good for passing data through component tree\n  - Simpler setup, but less powerful than Redux\n- Zustand:\n  - Modern, lightweight alternative\n  - Simple API with hooks\n  - Good performance\n- Recoil:\n  - Facebook's state management solution\n  - Atomic model of state management\n  - Good for complex state dependencies\n\n2. When should you use global state vs local state?\nAnswer: Choose based on scope and usage:\nLocal State (useState):\n- Form inputs\n- UI state (toggles, modals)\n- Component-specific data\n\nGlobal State:\n- User authentication\n- Theme settings\n- Shopping cart\n- Shared data used by many components\n\n3. What are the best practices for state management in large applications?\nAnswer:\n- Keep state as local as possible\n- Use proper state normalization\n- Implement proper error handling\n- Follow immutability principles\n- Use appropriate tools for different state types\n- Implement proper loading states\n- Consider using state machines for complex flows\n\n4. How do you handle complex state updates?\nAnswer: Several approaches:\n- Use reducers (useReducer) for complex state logic\n- Implement proper immutability patterns\n- Break down complex states into smaller, manageable pieces\n- Use state machines for complex workflows\n- Implement optimistic updates for better UX\n- Use appropriate middleware for side effects",
            date: "2025-10-01",
            tags: ["react", "state-management", "redux"],
            type: "interview",
          },
        ],
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master JavaScript programming",
    subtopics: [
      {
        id: "js-fundamentals",
        title: "JavaScript Core Concepts",
        blogs: [
          {
            id: "js-closures",
            title: "Closures and Scope",
            description: "Deep dive into JavaScript closures and scope chain",
            content:
              "1. What is a closure and how does it work?\nAnswer: A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. It consists of:\n- The function itself\n- The environment in which the function was created\nExample:\n```javascript\nfunction outer(x) {\n  return function(y) {\n    return x + y; // x is from outer scope\n  };\n}\n```\n\n2. Explain lexical scope in JavaScript\nAnswer: Lexical scope means that variable accessibility is determined by:\n- Where variables and blocks of scope are authored in the code\n- Nested functions have access to variables declared in their outer scope\n- Inner scope can access outer scope variables\n- Outer scope cannot access inner scope variables\n\n3. What are the practical applications of closures?\nAnswer: Closures are used for:\n- Data privacy (creating private variables/methods)\n- Factory functions\n- Partial application and currying\n- Event handlers and callbacks\n- Module pattern implementation\n- Memoization and caching\n\n4. How do closures affect memory management?\nAnswer: Closure considerations:\n- They retain access to their outer scope variables\n- Can lead to memory leaks if not handled properly\n- Variables in closure scope aren't garbage collected\n- Important to null out references when closure is no longer needed\n- Useful for implementing memory-efficient caching",
            date: "2025-10-01",
            tags: ["javascript", "closures", "scope"],
            type: "interview",
          },
          {
            id: "js-this-keyword",
            title: "Understanding 'this' Keyword",
            description: "Complex scenarios involving 'this' binding",
            content:
              "1. How does 'this' binding work in different contexts?\nAnswer: 'this' binding depends on the context:\n- Global context: refers to global object (window in browsers)\n- Method context: refers to the object owning the method\n- Function context: depends on how function is called\n- Constructor context: refers to the newly created instance\n- Event handler context: usually refers to the element that triggered the event\n\n2. What are the ways to change 'this' binding?\nAnswer: There are several methods:\n- call(thisArg, ...args): calls function with specified 'this' and arguments\n- apply(thisArg, [args]): similar to call but takes array of arguments\n- bind(thisArg): creates new function with fixed 'this'\nExample:\n```javascript\nfunction greet() { return `Hello, ${this.name}`; }\nconst person = { name: 'John' };\nconst boundGreet = greet.bind(person);\n```\n\n3. How does arrow function affect 'this'?\nAnswer: Arrow functions have special 'this' behavior:\n- They don't have their own 'this' binding\n- 'this' value is inherited from enclosing scope\n- Can't be changed with call/apply/bind\n- Great for callbacks in class methods\n- Not suitable for methods that need their own 'this'\n\n4. Common pitfalls with 'this' keyword\nAnswer: Common issues include:\n- Losing 'this' in callbacks\n- Method reference without proper binding\n- Using 'this' in regular functions inside methods\n- Confusion in event handlers\nSolutions:\n- Use arrow functions\n- Explicit binding with bind\n- Store 'this' in variable (const self = this)\n- Use class fields with arrow functions",
            date: "2025-10-01",
            tags: ["javascript", "this", "context"],
            type: "interview",
          },
        ],
      },
      {
        id: "js-advanced",
        title: "Advanced JavaScript",
        blogs: [
          {
            id: "js-async",
            title: "Asynchronous JavaScript",
            description: "Promises, async/await, and event loop",
            content:
              "1. Explain the event loop in JavaScript\nAnswer: The event loop is JavaScript's mechanism for executing asynchronous code:\n- Call Stack: Executes synchronous code\n- Web APIs: Handles async operations (setTimeout, fetch, etc.)\n- Callback Queue: Holds completed async operations\n- Microtask Queue: Higher priority than Callback Queue, used by Promises\nProcess:\n1. Execute synchronous code from Call Stack\n2. Check Microtask Queue\n3. Check Callback Queue\n4. Push callbacks to Call Stack when empty\n\n2. How do Promises work internally?\nAnswer: Promises are objects representing async operations:\n- States: pending, fulfilled, rejected\n- Internal properties: [[PromiseState]] and [[PromiseResult]]\n- Methods: then(), catch(), finally()\nExecution flow:\n1. Promise executor runs immediately\n2. resolve/reject change state and result\n3. then/catch handlers added to microtask queue\n4. Handlers execute when main stack is clear\n\n3. What are the advantages of async/await over Promises?\nAnswer:\n- More readable, synchronous-looking code\n- Better error handling with try/catch\n- Easier debugging (better stack traces)\n- Simpler chaining of async operations\n- Avoid callback hell and .then() chains\n- Better handling of loops and conditional logic\n\n4. How to handle concurrent async operations?\nAnswer: Several patterns available:\n- Promise.all(): Parallel execution, fails if any promise fails\n```javascript\nawait Promise.all([fetch1(), fetch2()])\n```\n- Promise.race(): Returns first resolved/rejected promise\n- Promise.allSettled(): Waits for all promises regardless of status\n- Promise.any(): Returns first fulfilled promise\n- Custom implementations for specific needs\n- Rate limiting and batching for API calls",
            date: "2025-10-01",
            tags: ["javascript", "async", "promises"],
            type: "interview",
          },
          {
            id: "js-prototypes",
            title: "Prototypes and Inheritance",
            description: "Object-oriented programming in JavaScript",
            content:
              "1. How does prototypal inheritance work?\nAnswer: Prototypal inheritance is JavaScript's mechanism for object inheritance:\n- Objects have an internal [[Prototype]] link to another object\n- Properties/methods are looked up through prototype chain\n- If property not found, check prototype recursively\n- Object.create() creates object with specified prototype\nExample:\n```javascript\nconst parent = { greet() { return 'Hello!' } };\nconst child = Object.create(parent);\nchild.greet(); // Finds method on parent\n```\n\n2. What's the difference between __proto__ and prototype?\nAnswer: Key differences:\n- __proto__:\n  - Internal property of all objects\n  - Points to object's prototype\n  - Used in lookup chain\n  - Deprecated for Object.getPrototypeOf()\n\n- prototype:\n  - Property of constructor functions\n  - Contains properties/methods for instances\n  - Used only on constructor functions\n  - Sets [[Prototype]] of new instances\n\n3. Explain the class syntax in JavaScript\nAnswer: Classes in JavaScript are syntactic sugar over prototypes:\n- class keyword introduces cleaner syntax\n- constructor method initializes instances\n- Methods are added to prototype automatically\n- static methods belong to class itself\n- extends keyword for inheritance\nExample:\n```javascript\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\n```\n\n4. Implementing inheritance patterns in JavaScript\nAnswer: Multiple patterns available:\n- Classical inheritance using class/extends\n```javascript\nclass Dog extends Animal {\n  bark() { return 'Woof!'; }\n}\n```\n- Prototypal inheritance with Object.create()\n- Composition over inheritance\n```javascript\nconst withSpeak = (state) => ({\n  speak: () => `${state.name} speaks`\n});\n```\n- Mixin pattern\n- Factory functions with closures\n- Functional inheritance patterns",
            date: "2025-10-01",
            tags: ["javascript", "oop", "inheritance"],
            type: "interview",
          },
        ],
      },
    ],
  },
];
