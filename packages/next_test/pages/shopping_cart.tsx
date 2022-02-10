import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import commonStyles from '@/styles/common.module.css';
import styles from '@/styles/ShoppingCart.module.css';

type product = {
  name: String;
  price: number;
};

const ShoppingCart: NextPage = ({ products }) => {
  const [total, setTotal] = useState(0);

  const productCards = (products: Array<product>) =>
    products.map((product, index) => {
      const [count, setCount] = useState(0);

      const handleAddBtnClick = () => {
        setCount(count + 1);
        setTotal(total + product.price);
      };

      return (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{count}</td>
          <td>
            <button className={styles.button} onClick={handleAddBtnClick}>
              add
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className={commonStyles.container}>
      <Head>
        <title>shopping_cart - next_test</title>
      </Head>

      <main className={commonStyles.main}>
        <h1 className={commonStyles.title}>shopping_cart</h1>
        <table className={styles.table} cellSpacing={0}>
          <colgroup>
            <col width={200} />
            <col width={200} />
            <col width={200} />
            <col width={200} />
          </colgroup>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{productCards(products)}</tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>total: {total}</td>
            </tr>
          </tfoot>
        </table>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      query: `query Products($active: Boolean) {
                products(active: $active) {
                    name
                    price
                }
            }`,
      variables: { active: true },
    }),
  });
  const json = await res.json();

  return {
    props: {
      products: json.data.products,
    },
  };
};

export default ShoppingCart;
