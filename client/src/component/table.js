import React, { Component } from 'react';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">lalal</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listGuest.map((guest, index)=>{
              return  <tr key={index}>
                        <th> { index + 1 } </th>
                        <td> { guest.firstName + ' ' + guest.lastName} </td>
                        <td> { guest.address } </td>
                        <td style={{width:'20%'}}>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoP4omitQlSODfxThwqpuBFaRQFBBMxdUvxpUtCHaTLrM0WHFYA" alt="update" style={{ width: "15%", cursor: "pointer" }}/> |
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAW5ILBay083LUo9colDIGtq-oyYdc5TCB1rsVSC-lb0yMenNv" alt="delete" style={{ width: "15%", paddingLeft: "2%", cursor: "pointer" }} onClick={()=>{this.props.delete(guest.id)}}/>                          
                        </td>
                      </tr>
            })}

          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;