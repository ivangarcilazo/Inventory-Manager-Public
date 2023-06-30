/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Form from '../../Components/Form/Form'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ContextAuth } from '../../Components/Context/ContextAuth'

jest.mock('react-router-dom')

const mockState = {
    dispatch:jest.fn
}

describe('Correct Login Form funcionality',()=>{
    test('Fields cannot be empty of login form', async()=>{
        render(
            <ContextAuth.Provider value={mockState}>
                <Form />
            </ContextAuth.Provider>
        )
        // Arrange
        const buttonSubmit = screen.queryByText('Login');
        // Act
        fireEvent.click(buttonSubmit)
        // Assert
        await waitFor(()=>{
            const errorElement = screen.queryByText('Fields cannot be empty.');
            expect(errorElement).toBeInTheDocument();
        })
    })
    test('Show error when password is wrong', async()=>{
        render(
            <ContextAuth.Provider value={mockState}>
                <Form />
            </ContextAuth.Provider>
        )
        // Arrange
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok:false,
                json:()=>Promise.resolve({message:'Wrong password'})
            })
        );
        const email = screen.getByTestId('email')
        const password = screen.getByTestId('password')
        const buttonSubmit = screen.queryByText('Login');
        // Act
        fireEvent.change(email, {target:{value:'adminExclusive@gmail.com'}})
        fireEvent.change(password, {target:{value:'Wrong password 123 '}})
        fireEvent.click(buttonSubmit)
        // Assert
        await waitFor(()=>{
            const errorElement = screen.queryByText('Wrong password');
            expect(errorElement).toBeInTheDocument();
        })
    })
    test('Show error when email user does not exist', async()=>{
        render(
            <ContextAuth.Provider value={mockState}>
                <Form />
            </ContextAuth.Provider>
        )
        // Arrange
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok:false,
                json:()=>Promise.resolve({message:'This user doesn`t exist'})
            })
        );
        const email = screen.getByTestId('email')
        const password = screen.getByTestId('password')
        const buttonSubmit = screen.queryByText('Login');
        // Act
        fireEvent.change(email, {target:{value:'thisUserDoesNotExist@gmail.com'}})
        fireEvent.change(password, {target:{value:'-'}})
        fireEvent.click(buttonSubmit)
        // Assert
        await waitFor(()=>{
            const errorElement = screen.queryByText('This user doesn`t exist');
            expect(errorElement).toBeInTheDocument();
        })
    })
})