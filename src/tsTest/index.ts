console.log("test");
//首先定义
//sefltPartcial
type SelfPartial<T> = {
  [P in keyof T]?: T[P];
};
type test = {
  name?: string;
  age: number;
};
type b = SelfPartial<test>;

// Partial实现了

//实现pick

type SelfPick<T, D extends keyof T> = {
  [P in D]: T[P];
};

type c = SelfPick<test, "name">;

//pick实现完成

//Exclude
type test2 = "name" | "age" | "gender";
type SelfExclude<T, D> = T extends D ? never : T;
type e = SelfExclude<test2, "name" | "age">;
//exclude实现完成

//实现Omit，排除某个类型
type SelfOmit<T, D extends keyof any> = SelfPick<T, SelfExclude<keyof T, D>>;

type f = SelfOmit<test, 213>;

type y = keyof any;

//readonly
type SelfReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

//required完成
type SelfRequired<T extends object> = {
  [P in keyof T]-?: T[P];
};
type r = SelfRequired<test>;

//数组铺平使用record。
type SelfRecord<K extends keyof any, D> = {
  [P in K]: D;
};

let arr: SelfRecord<string | number, test> = {
  123: { name: "byf", age: 123 },
  34: { age: 333 },
};
