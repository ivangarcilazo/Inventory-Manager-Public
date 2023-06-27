import '@testing-library/jest-dom'
import CompaniesList from '../pages/Home/Components/CompaniesList'
import { prettyDOM, render } from '@testing-library/react'

describe('Companies list component, add, delete, update',()=>{
    test('add request',()=>{
        const view = render(<CompaniesList />)
        console.log(prettyDOM(view))
    })
})