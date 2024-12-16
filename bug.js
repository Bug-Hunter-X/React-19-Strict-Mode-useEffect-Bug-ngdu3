```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is the problematic line, which causes issues in React 19 due to strict mode changes.
    console.log('Component rendered!');
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```