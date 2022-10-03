import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>

      <ProductTable>
        <thead>
          <tr>
            <th>-</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Value</th>
            <th>-</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4cEC3GQ5JqAUp5_pFDHjL3c0Cgdw4Q8ihw&usqp=CAU'
                alt='shoes'
              />
            </td>

            <td>
              <strong>Nike Low Dunk</strong>
              <span>U$50.00</span>
            </td>

            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} coloor='#7159c1' />
                </button>

                <input type="number" readOnly value={2} />

                <button type='button'>
                  <MdAddCircleOutline size={20} coloor='#7159c1' />
                </button>
              </div>
            </td>

            <td>
              <strong>U$100.00</strong>
            </td>

            <td>
              <button type='button'>
                <MdDelete size={20} color='7159c1' />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finish Shop!</button>

        <Total>
          <span>Total</span>
          <strong>U$250.00</strong>
        </Total>
      </footer>

    </Container>
  );
}
