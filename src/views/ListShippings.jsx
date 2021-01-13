import {React, useEffect, useState } from "react";
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from 'axios';

function ListShippings() {
  const [ orders, setOrder ] = useState([])
    useEffect(() => {
       axios.get('http://localhost:5000/get').then(response => {
         console.log(response.data);
         setOrder(response.data)
       }).catch(err => {
         console.log(err);
       })
    }, []);
  return (
    <MDBContainer>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Color</th>
            <th>Country</th>
            <th>Shopping Cost</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            orders.map(order => {
              return (
                <tr key={ order._id }>
                  <td>{ order.name }</td>
                  <td>{ order.weight }</td>
                  <td>
                    <div style={{width:"50px", height: "30px", background: order.color}}></div>
                  </td>
                  <td>{ order.country }</td>
                  <td>{ order.cost }</td>
              </tr>
              );
            })
          }
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}

export default ListShippings;
