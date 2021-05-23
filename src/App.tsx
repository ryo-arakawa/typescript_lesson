import React from "react";
import logo from "./logo.svg";
import "./App.css";

const name = "hello";

let nameChange = "hello";

nameChange = "hello2";

interface NAME {
  first: string;
  last: string | null;
}

// let nameObj: NAME = { first: "Yamada", last: "Taro" };
let nameObj: NAME = { first: "Yamada", last: "null" };

const func1 = (x: number, y:number) => {
  return x + y;
}

// Intersection Types 複数のtypeを結合するもの
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

// この２つの型を結合する

type USER = PROFILE &LOGIN;

const userA: USER = {
  age:30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
