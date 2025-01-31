#Q1: State vs Props
● Props: Immutable data passed from parent to child components (Akin to stateless
widgets in Flutter)
● State: Mutable data managed within a component, can change over time (Akin to
stateful widgets in Flutter)
// Props Example
interface UserProps {
name: string;
age: number;
}
const UserDisplay = ({ name, age }) => {
return (
<div>{name} is {age} years old</div>
)
};
// State Example
const Counter = () => {
const [count, setCount] = useState(0);
return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

#Q2: JSX
JSX is a syntax extension for JavaScript that allows writing HTML-like code in React. It enables:
● Declarative UI rendering
● Embedding JavaScript expressions
● Improved readability and component structure
const element = <h1>Hello, {userName}</h1>;

#Q4: Lifting State Up
Lifting state up involves moving shared state to a common ancestor component to manage and
pass down as props, enabling state synchronization across components.

const ParentComponent = () => {
const [sharedState, setSharedState] = useState(initialValue);
return (
<>
<ChildA state={sharedState} setState={setSharedState} />
<ChildB state={sharedState} />
</>
);
};

#Q5: Context API
Context allows data to be passed through the component tree without prop drilling.
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });
const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');
const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};

#Q6: React Portals
Portals allow rendering children into a different part of the DOM tree, which is useful for modals,
tooltips, and floating elements.
const Modal = ({ children }) => {
return ReactDOM.createPortal(
children,
document.getElementById('modal-root')
);
};
