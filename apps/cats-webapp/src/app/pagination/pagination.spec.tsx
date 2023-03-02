import { render } from '@testing-library/react';

import Pagination from './pagination';

describe('Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Pagination
        activePage={1}
        setActivePage={jest.fn()}
        isNextButtonDisabled={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
