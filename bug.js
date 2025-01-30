```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: setting state directly inside the useEffect
    // without a cleanup function will cause infinite re-renders.
    setCount(count + 1); 
  }, []); // Empty dependency array means this runs only once after the component mounts

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```