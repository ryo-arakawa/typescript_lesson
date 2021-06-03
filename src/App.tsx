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

const func1 = (x: number, y: number) => {
  return x + y;
};

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

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

// Union Types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
value = true;
value = 10;

// typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key: "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let KeySports: keyof typeof SPORTS;
KeySports = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性

const comp1 = "test";
let comp2: string = comp1;
// let comp4:"test" = comp3;   これは無理

let funcComp1 = (x: number) => {};
let funcComp2 = (y: string) => {};

// ジェネリクス　Generics
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = {item: "hello"}; エラー
const gen2: GEN<number> = { item: 12 };

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 512;
memory = 256;

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
