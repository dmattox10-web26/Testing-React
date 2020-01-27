import React from 'react'

import { render, fireEvent, wait } from '@testing-library/react'

import StarWarsCharacters from './StarWarsCharacters'

test('renders 10 elements', async () => {
    const { getByTestId }  = render(<StarWarsCharacters />)
    //const characterList = getByTestId('list')

    wait(() => {
        const characterList = getByTestId('list')
        expect(characterList.length === 10)
    })
})

test('renders 10 more elements', async () => {
    const { getByTestId, getByText } = render(<StarWarsCharacters />)

    const nextButton = getByText(/Next/i)

    fireEvent.click(nextButton)

    wait(() => {
        const characterList = getByTestId('list')
        expect(characterList.length === 10)
    })
})

test('renders previous 10 elements', async () => {
    const { getByTestId, getByText } = render(<StarWarsCharacters />)

    const nextButton = getByText(/Next/i)
    const prevButton = getByText(/Previous/i)
    fireEvent.click(nextButton)
    fireEvent.click(prevButton)
    wait(() => {
        const characterList = getByTestId('list')
        expect(characterList.length === 10)
    })
})