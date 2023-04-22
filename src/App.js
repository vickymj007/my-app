import React from 'react';
import './App.css';




function App() {
  const product = [
    {
      type : "FREE",
      price : "$0",
      user : "Single User",
      storage : "5GP Storage",
      access : ["Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },
    {
      type : "PLUS",
      price : "$9",
      user : "5 Users",
      storage : "50GB Storage",
      access : ["Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },
    {
      type : "PRO",
      price : "$49",
      user : "Unlimited Users",
      storage : "150GB Storage",
      access : ["Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    }
  ]

  return (
    <div className="App">

      {
        product.map((item,index)=>{
          return <CreateCard 
          type={item.type}
          price={item.price}
          user={item.user}
          storage={item.storage}
          access={item.access}
          key={index}
          />
        })
      }
    </div>
  );
}

export default App;

function CreateCard(props) {

  return (
    <div className='card'>
      <div className='header'>
        <p>{props.type}</p>
        <h1>{props.price}<span className='month'>/month</span></h1>
      </div>
      <div className='content'>
        <ul>
          <li><span class="material-symbols-outlined">check</span>{props.user}</li>
          <li><span class="material-symbols-outlined">check</span>{props.storage}</li>
          <li><span class="material-symbols-outlined">check</span>{props.access[0]}</li>
          <li><span class="material-symbols-outlined">check</span>{props.access[1]}</li>
          <li><span class="material-symbols-outlined">check</span>{props.access[2]}</li>
          <li><span class="material-symbols-outlined">check</span>{props.access[3]}</li>
          <li><span class="material-symbols-outlined">check</span>{props.access[4]}</li>
          <li><span class="material-symbols-outlined">check</span>{props.access[5]}</li>
        </ul>
      </div>
      <div className='button'>
        <button>BUTTON</button>
      </div>
    </div>
  );
}
