import React from 'react'
import Counter from './Counter'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;
beforeEach(() => {
    const component = render(<Counter />)
    getByTestId = component.getByTestId
})

test("header renders with correct text", () => {
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter")
})

test('Counter initially starts with value of 0', () => {
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test('Input countains inital value of 1', () => {
    const inputEl = getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test('add button renders with +', () => {
    const addbtn = getByTestId("add-btn")

    expect(addbtn.textContent).toBe("+")
})

test('subtract button renders with -', () => {
    const subtractbtn = getByTestId("subtract-btn")

    expect(subtractbtn.textContent).toBe("-")
})

test('change value of input works correctly', () => {
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    expect(inputEl.value).toBe("5")
})

test('click on + button adds 1 to counter', () => {
    const addbtn = getByTestId("add-btn")
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(addbtn)

    expect(counterEl.textContent).toBe("1")
})

test('click on - button subtracts 1 to counter', () => {
    const subtractbtn = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
    
    fireEvent.click(subtractbtn)

    expect(counterEl.textContent).toBe("-1")
})

test('changing input value then clicking on add btn works correctly', () => {
    const addbtn = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addbtn)

    expect(counterEl.textContent).toBe("5")

})

test('changing input value then clicking on subtract btn works correctly', () => {
    const subtractbtn = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subtractbtn)

    expect(counterEl.textContent).toBe("-5")

})

test('counter contains correct className', () => {
    const counterEl = getByTestId("counter")
    const inputEl = getByTestId("input")
    const addbtn = getByTestId("add-btn")
    const subtractbtn = getByTestId("subtract-btn")

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addbtn)

    expect(counterEl.className).toBe("")

    fireEvent.click(addbtn)

    expect(counterEl.className).toBe("green")

    fireEvent.click(addbtn)

    expect(counterEl.className).toBe("green")

    fireEvent.click(subtractbtn)
    fireEvent.click(subtractbtn)

    expect(counterEl.className).toBe("")

    fireEvent.click(subtractbtn)
    fireEvent.click(subtractbtn)
    fireEvent.click(subtractbtn)
    fireEvent.click(subtractbtn)

    expect(counterEl.className).toBe("red")

})