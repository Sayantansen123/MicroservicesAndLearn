import React, { useEffect, useState } from 'react'

const UseStateEx = () => {
  const [count, setCount] = useState(0);
  const [tap, setTap] = useState("");
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [data, setData] = useState(null);

  //tapping the button triggers the useeffect
  useEffect(() => {
    setTap(`button tapped ${count} times`)
    console.log("button tapped")
  }, [count])


  //always getting the value of scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    //we need to remove listener so when compnent is un mount we can stop the processs
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  //fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);
    
    return () => {
      clearInterval(interval);
      console.log("Cleaned Up!");
    };
  }, []);
 

  return (
    <div className='flex w-screen py-[40px] flex-col items-center gap-2 h-[900px] relative'>
      <span>{count}</span>
      <span>{tap}</span>
      <button onClick={() => setCount(count + 1)}> ++++</button>

      <span className='fixed left-0 top-0 '>scroll position{scrollY}</span>

      <div className=''>
        <h2>Fetched Data:</h2>
        {data ? <div>{JSON.stringify(data.title)}</div> : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default UseStateEx
