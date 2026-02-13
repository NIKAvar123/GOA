//! PROPS
// props = თვისებები

//* props გამოიყენება იმისთვის რომ მშობელმა ელემენტმა შვილ ელემენტს გადასცეს რაიმე

function Child({name, age, country}) {

    return <div>name: {name}
        age: {age}
        country: {country}
    </div>
};

// function App() {
//     return (
//         <div>
//             <Child name='Nika' age="14" country="Georgia"  />
//         </div>
//     )
// }


///props არის read only



