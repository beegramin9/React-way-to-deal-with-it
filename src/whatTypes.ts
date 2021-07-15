/* 객체는 어떻게 넣을까?
Interface를 통해서, React의 PropTypes와 비슷
유일한 문제는 Interface는 JS가 읽지 못한다.
그래서 Class 사용 */
interface Human {
    name :string,
    age: number,
    gender: string
}

class HumanClass {
    /* property와 각각의 permission을 선언해줘야 함 */
    public name :string;
    /* public은 클래스 밖에서도 이 변수를 사용할 수 있음
    private은 클래스 밖으로 나가면 이 변수를 사용할 수 없음 */
    public age: number;
    public gender: string;
    /* 생성자 */
    constructor(name:string, age:number, gender?:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}
const lynn = new HumanClass('Lynn',18,'female')


const person = {
    name :"Nicoloas",
    age: 24,
    gender: "male"
}

const name = "Nicoloas",
    age = 24,
    gender = "male"

    /* 파라미터에 ?를 쓰면, 선택적이라는 것 */
const sayHi = (name:string, age:number, gender?:string) : string => {
    // console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
    return `Hello ${name}, you are ${age}, you are a ${gender}`
    
}
/* void는 뭐냐?
함수의 return값의 type을 아무것도 정해주지 않았을 때 void  */



/* TS vs JS
JS에서는 파라미터를 하나 빼먹어도 모르고 컴파일 한다음에 에러를 띄우지만
TS는 컴파일 하기 전에 이미 2개밖에 안 들어왔다는 걸 알고 컴파일도 못 하게 함 
게다가 정확히 뭘 빼먹었는지도 알려줌*/
console.log(sayHi(name, age))
console.log(sayHi("Wontae", 444, "male"))

const hiObj = (person : Human) => {
    /* TS는 person이 Human interface와 똑같은 구조를 가졌는지
    체크하고 맞으면 OK */
    return `Hello ${name}, you are ${age}, you are a ${gender}`
    
}
console.log(hiObj(person))
console.log(hiObj(lynn))


export {};