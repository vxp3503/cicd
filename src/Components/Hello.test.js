import { getByRole, getByText, render, screen } from '@testing-library/react';
import Hello from "./Hello"

describe("Hello",()=>{
    test("Weather application is running or not",()=>{
        render(<Hello/>)
        const hello_world=screen.getByText('Welcome')
        expect(hello_world).toBeInTheDocument();
    })
    // test("check whether response is coming or not",async ()=>{
    //     render(<Hello/>)
    //     const status_code=await screen.findAllByRole(`listitem`)
    //     expect(status_code).not.toHaveLength(0);
    // })

    
    getByRole
})