                        1.Add at least 3 Project features
 
 ****Component-based Architecture:
React is known for its component-based architecture. One can break one's user interface into reusable and self-contained components.Each component can have its state, props, and lifecycle methods, making it easier to manage and maintain your application's UI.Reusable components promote code reusability and maintainability, which can significantly speed up development.


***Virtual DOM for Efficient Rendering:
React utilizes a virtual DOM (Document Object Model) to efficiently update the user interface.When there's a change in the application state, React creates a virtual representation of the updated DOM, compares it with the previous one, and calculates the minimal set of DOM operations needed to update the actual DOM.
This approach minimizes the number of direct DOM manipulations, resulting in better performance and a smoother user experience.


***State Management with Hooks:
React introduced Hooks in version 16.8, which provide a more flexible way to manage component state and side effects.
The useState hook allows you to manage state variables within functional components, eliminating the need for class-based components for state management.
Other hooks like useEffect enable you to handle side effects, such as data fetching and subscriptions, in a clean and 
 
 
 
 
                2.Discuss how you managed the state in your assignment project?
 
 Ans: I have used React's useState hook to manage state in my project

 ***cards State:
I use the useState hook to initialize cards as an empty array. This state is used to store and manage the data related to these cards.For updating state I used
 the setcards function. When I pass in the new value, and React takes care of re-rendering the component with the updated state.


 ***selectedcard State:
Similar to cards, I have initialized it using the useState hook.
When a user interacts with my application and selects a card, I use the  setselectedcard function to update this state.

***remaining State:
I have initialized it with an initial value of 0.
This state might be used to display information related to how many items are left or to keep track of some numerical data in your application.

***totalhour State:
Totalhour represent a cumulative count of hours or some duration in my project.
Like the other states, it's initialized using the useState hook.I use the settotalhour function to update this state when necessary.
 
  