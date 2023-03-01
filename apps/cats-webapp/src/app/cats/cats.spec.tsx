import { render } from '@testing-library/react';

import Cats from './cats';

describe('Cats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cats />);
    expect(baseElement).toBeTruthy();
  });
});
