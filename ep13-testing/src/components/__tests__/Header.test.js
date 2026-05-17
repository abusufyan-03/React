import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import { Provider } from 'react-redux';
import appStore from "../../utils/appStore.js";
import Header from '../Header.js';
import { BrowserRouter } from "react-router"


it("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // 1. Get ALL buttons that match the name "login" (returns an array)
    const loginButtons = screen.getAllByRole('button'); 
    
    // 2. Assert that the first button in that array is present in the document
    expect(loginButtons[0]).toBeInTheDocument();
    
});

/* 
Above test will fail cause our header component uses redux and jest is not aware of, it only knows so far jsx, js so we need to wrap up our Header with Provider compoent just like we did in Header component
*/