import { render } from '@testing-library/react';

import ShoppingCart from '@/pages/shopping_cart';

describe('ShoppingCart', () => {
  it('render products', () => {
    const products = [
        { name: 'prod 1', price: 100 },
        { name: 'prod 2', price: 200 },
        { name: 'prod 3', price: 300 }
    ];

    const { container } = render(<ShoppingCart products={products} />);

    expect(container).toMatchSnapshot();
  });
});
