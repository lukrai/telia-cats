import { render } from '@testing-library/react';

import FilterInput from './filter-input';

describe('FilterInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterInput />);
    expect(baseElement).toBeTruthy();
  });
});
