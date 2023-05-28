import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


 export interface IState{
  people:{
    name:string;
    age:number;
    url:string;
    note?:string;
  }[]
}
function App() {
  const [people,setPeople] = useState<IState['people']>([
    {
    name:'Ye',
    age:42,
    url:'https://media.npr.org/assets/img/2021/10/19/kanyewest_wide-96a94105571576fccf8dac36615998c2ddf87634.jpg',
    note:'do not talk about Kim'
  }])


  
  return (
    <div className="App">
     <h1>People invited to my party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
