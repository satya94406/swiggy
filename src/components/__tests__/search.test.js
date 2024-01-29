import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import {act} from "react-dom/test-utils"
import Body from "../Body";
import MOCK_DATA from "../Mocks/MockResListData.json"
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("should render the body component with screen",
async()=>{
    await act(async()=>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))
});

const searchBtn = screen.getByRole("button",{name:"Search"});;

console.log(searchBtn);
expect(searchBtn).toBeInTheDocument();

