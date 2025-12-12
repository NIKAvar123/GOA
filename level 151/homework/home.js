//! PROPS
// props = თვისებები

//* props გამოიყენება იმისთვის რომ მშობელმა ელემენტმა შვილ ელემენტს გადასცეს რაიმე

function Child({name, age, country}) {

    // const {name, age, country} = props;

    return <div>name: {name}
        age: {age}
        country: {country}
    </div>
};

function App() {
    return (
        <div>
            <Child name='Giga' age="15" country="Georgia"  />
        </div>
    )
}