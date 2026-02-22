1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById return single element, it's select ID only and faster. getElementsByClassName return collection of elements, it's select class name. querySelector return single element, it's select ID and CLASS both. querySelectorAll return collection of elements, it's select ID and CLASS both.


2. How do you create and insert a new element into the DOM?

Ans: At first create element using document.createElement() method then insert text using innerText after then use appendChild() method.



3. What is Event Bubbling? And how does it work?

Ans: Event bubbling is a type of Document Object Model where an event triggered on a nested child element first fires on that element, then bubbles up its parent until reaching the root.



4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a JavaScript technique where a single event listener is attached to a common parent element to manage events for all of its child elements. When an event occurs on a child element, it bubbles up in the DOM tree.



5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() tops the browser's default action and stopPropagation() stops the event from propagating of the Document Object Model tree.
