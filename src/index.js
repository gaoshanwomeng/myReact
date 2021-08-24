import React from 'MyReact';

const element1 = {
    type: "div",
    props: {
        children: [
            { 
                type: "input", 
                props: { 
                    value: "test imput", 
                    type: "text" 
                } 
            },
            {
                type: "a",
                props: {
                    href: "/bar",
                    children: [
                        {
                            type: "TEXT_ELEMENT",
                            props: { nodeValue: "test a" }
                        }
                    ]
                }
            },
            {
                type: "span",
                props: {
                    children: [
                        {
                            type: "TEXT_ELEMENT",
                            props: { nodeValue: "test span" }
                        }
                    ]
                }
            }
        ]
    }
};  

// console.log(element1);
// React.render(element1, document.getElementById("root"));

const element2 = React.createElement(
    'div',
    { },
    React.createElement( 
        'input', 
        { 
            value: "test input", 
            type: "text" 
        },
    ),
    React.createElement( 
        'a', 
        { 
            href: "/bar"  
        },
        React.createElement( "TEXT_ELEMENT", { nodeValue: "test a" })
    ),
    React.createElement( 
        'span', 
        { },
        React.createElement( "TEXT_ELEMENT", { nodeValue: "test span" })
    ),
);

// console.log(element2);
// React.render(element2, document.getElementById('root'));

// jsx语法支持
const element3 =  (
    <div id="container">
        <input value="foo" type="text" />
        <a href="/bar">bar</a>
        <span onClick={e => alert("Hi")}>click me</span>
    </div>
)

console.log(element3);
React.render(element3, document.getElementById("root"))

// 函数式组件和hooks
/**
 * Function components are differents in two ways:
 *  1. the fiber from a function component doesn’t have a DOM node
 *  2. the children come from running the function instead of getting them directly from the props
*/
function Counter(){
    const [state, setState] = React.useState(1);
    return (
        <div id="container">
            <h1 onClick={() => setState(c => c + 1)}>
                Count: {state}
            </h1>
        </div>
        
    )
}

const element4 = <Counter/>
// = const element = React.createElement(Counter, { xxxxxx })

console.log(element4);
// React.render(element4, document.getElementById("root"))