import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          firstName: '',
          lastName: '',
          address: ''
        }
    }
    add=()=>{
      var { firstName, lastName, address } = this.state
      this.props.add({  firstName: firstName, lastName: lastName, address: address  })
    }
    render() { 
        return ( 
          <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                      <label>First Name</label>
                      <input type="input" className="form-control" placeholder="" onChange={(e)=> this.setState({ firstName : e.target.value})}/>
                      <label>Last Name</label>
                      <input type="input" className="form-control" placeholder="" onChange={(e)=> this.setState({ lastName : e.target.value})}/>
                      <label>Address</label>
                      <textarea className="form-control" rows="3" onChange={(e)=> this.setState({ address : e.target.value})}></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={ this.add }>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Modal;