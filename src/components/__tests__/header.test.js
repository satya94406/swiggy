import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render , screen } from "@testing-library/react";
import AppStore from "../../Utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header comopnent" ,()=>{
  render(
    <BrowserRouter>
        <Provider store={AppStore} >
           <Header/>
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button" , {name : "login"});

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button" , {name : "logout"})


    expect(logOutButton).toBeInTheDocument();
})
