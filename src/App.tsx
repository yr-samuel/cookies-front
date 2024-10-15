import './App.css';

const App = () => {
  const onHttpRequest = async () => {
    const response = await fetch('https://cookies-ma9i.onrender.com/same-site-none');
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="content">
      <a
        href="https://cookies-ma9i.onrender.com/same-site-strict"
      >
        same-site-strict
      </a>
      <a
        href="https://cookies-ma9i.onrender.com/same-site-lax"
      >
        same-site-lax
      </a>
      <button
        onClick={onHttpRequest}
      >
        same-site-none
      </button>
    </div>
  );
};

export default App;
