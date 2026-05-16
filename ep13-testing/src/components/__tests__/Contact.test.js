import { render, screen } from "@testing-library/react"
import Contact from "../Contact.js";
import "@testing-library/jest-dom"


// test("Should laod contact us component", ()=>{
//     render(<Contact/>);

//     const heading = screen.getByRole("heading");

//     expect(heading).toBeInTheDocument();
// });

// test("Should laod input text inside contact us component", ()=>{
//     render(<Contact/>);

//     const button = screen.getByRole("button");

//     //assertion
//     expect(button).toBeInTheDocument();
// });


// test("Should laod input text inside contact us component", ()=>{
//     render(<Contact/>);

//     const inputName = screen.getByPlaceholderText('name');

//     //assertion
//     expect(inputName).toBeInTheDocument();
// });

// test("should load 2input boxes on the contact component", ()=>{
//     render(<Contact/>);

//     // querying
//     const inputBoxes = screen.getAllByRole('textbox');
//     // console.log(inputBoxes.length);

//     // assertion
//     expect(inputBoxes.length).toBe(2)
// })





// we can also group our test cases:
// we can also write "it" instead of test
describe("Contact Us page test case", () =>{
    it("Should laod contact us component", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

it("Should laod input text inside contact us component", ()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");

    //assertion
    expect(button).toBeInTheDocument();
});


it("Should laod input text inside contact us component", ()=>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText('name');

    //assertion
    expect(inputName).toBeInTheDocument();
});

it("should load 2input boxes on the contact component", ()=>{
    render(<Contact/>);

    // querying
    const inputBoxes = screen.getAllByRole('textbox');
    // console.log(inputBoxes.length);

    // assertion
    expect(inputBoxes.length).toBe(2)
})

})