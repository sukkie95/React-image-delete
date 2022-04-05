import {useEffect, useState} from 'react';

const App = () => {
const[buttonName, setButtonName] = useState(true)
const[users, setUsers] = useState([
  {name: 'summer', id:1, url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},
  {name: 'spring', id:2, url: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="},
  {name: 'autumn', id:3, url: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg"},

])
function hideText(){
  setButtonName(!buttonName)
}

function deleteUser(e){
    const filteredArr = users.filter(user=> 
      user.id !== e
      )

      setUsers(filteredArr)
}

  return (
    
    <div className='App'>
      <button onClick={hideText}>{buttonName ? 'Hide' : 'Show'}</button>
     {buttonName &&  users.map(user=>(
       <ul key={user.id}>
         <li>{user.name}</li>
         <li><img src={user.url} alt="img" /></li>
         <li><button disabled={false} onClick={()=> deleteUser(user.id)}>Delete</button></li>
       </ul>

     ))}
    </div>
  );
}

export default App;

