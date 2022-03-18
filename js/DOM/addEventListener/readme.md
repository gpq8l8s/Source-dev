## addEventListener
---

#### How `addEventListener` works
![addEventListener](./bubbling-capture.jpeg)

> If `addEventListener` is added on the parent element and clicked, it will go through all the child elements and execute the event. It is called "bubbling" which means event will be executed again from child to parent element.


#### `stopPropagation()`
![stopPropagation](./stopPtopagation.jpeg)

> If I don't want my element does bubble everywhere through all the child element, can use `stopPropagation()`
