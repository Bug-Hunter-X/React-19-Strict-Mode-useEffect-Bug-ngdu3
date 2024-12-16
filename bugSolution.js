```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This condition makes the effect run only on the initial mount.
    if (count === 0) {
      console.log('Component mounted!');
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```