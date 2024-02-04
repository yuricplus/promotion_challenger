import '@testing-library/jest-dom';
import React, { useState as useStateMock } from 'react';
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Search from "./page";
import { act } from 'react-dom/test-utils';

jest.mock('next/navigation', () => ({
  useRouter: () => {
    return {
      push: jest.fn()
    }
  },
  useSearchParams: () => {
    return {
      get: jest.fn()
    }
  }
}))



jest.mock('axios', () => {
  return {
    create: () => {
      return {
        get: () => {
          return Promise.resolve({
            data: {
              result: [
                { id: 1, thumbnail: '', title: 'product test', price: 100},
                { id: 2, thumbnail: '', title: 'product test', price: 100}
              ],
              paging: {
                limit: 100,
              }
            }
          })
        },
      }
    }
  }
})


const setState = jest.fn()
describe('Page', () => {

  beforeEach(() => {
    // @ts-ignore
   // useStateMock.mockImplementation((init: any) => [init, setState])
  })
  it('should render loading component', async () => {
    const { container } = render(<Search />)
    
    await waitFor(() => {
      expect(container.querySelector('.content-loading')).toBeTruthy();
    });
  })

  it('should render list of product searched', async () => {
    const { container } = await act(async () => render(<Search />))
    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      expect(container.querySelector('.products-result')).toBeTruthy()
    })
    //
  })

  it('should render click in Pagination', async () => {
    window.scrollTo = jest.fn()
    const { container } = await act(async () => render(<Search />))
    fireEvent.click(screen.getByTestId('2 pagination'));

    await waitFor(() => {
      expect(container.querySelector('.active')).toBeTruthy()
    })
  })
})