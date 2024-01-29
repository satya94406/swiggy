import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("contact us all test cases",()=>{

    test("should load contact us page", ()=>{
        render(<Contact/>);
    
        const heading = screen.getByText("submit");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("should load contact us page", ()=>{
        render(<Contact/>);
    
        const heading = screen.getByText("submit");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("should load contact us page", ()=>{
        render(<Contact/>);
    
        const heading = screen.getAllByRole("textbox");
    
        expect(heading.length).toBe(2)
    });
    
    test("should load contact us page", ()=>{
        render(<Contact/>);
    
        const heading = screen.getByPlaceholderText("name");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("should load contact us page", ()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("button");
    
        expect(heading).toBeInTheDocument();
    });

   
})

