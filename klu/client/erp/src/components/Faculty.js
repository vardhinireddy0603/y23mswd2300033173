// src/components/Faculty.js
import React from 'react';

function Faculty() {
  return (
    <table>
      <thead>
        <tr>
          <th>Faculty ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>MURALI MOHAN</td>
          <td>CSIT</td>
          <td>PHD</td>
        </tr>
        <tr>
          <td>02</td>
          <td>RAVITEJA</td>
          <td>CSE</td>
          <td>PHD</td>
        </tr>
        <tr>
          <td>03</td>
          <td>SURESH REDDY</td>
          <td>CSE</td>
          <td>PHD</td>
        </tr>
        <tr>
          <td>04</td>
          <td>RAGAVENDRA SAI</td>
          <td>CSE</td>
          <td>PHD</td>
        </tr>
        <tr>
          <td>05</td>
          <td>VEERASWAMI</td>
          <td>CSE</td>
          <td>PHD</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Faculty;