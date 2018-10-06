import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './component/navbar'
import Table from './component/table'
import Modal from './component/modal'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list : []
    }
  }
  componentDidMount(){
    this.getList()
  }
  getList = () => {
    axios.get('http://localhost:3001/guest-book')
    .then(result=>{
      this.setState({
        list : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  search = (keyword) => {
    axios.get(`http://localhost:3001/guest-book/search?q=${keyword}`)
    .then(result=>{
      this.setState({
        list : result.data
      })
    })
    .catch(err=>{
      console.log(err);
      
    })
  }
  addGuest = (newGuest) => {
    var { firstName, lastName, address } = newGuest
    // console.log(firstName);
    
    axios.post('http://localhost:3001/guest-book/add',{
      firstName : firstName,
      lastName : lastName,
      address : address
    })
    .then(guest=>{
      console.log(guest);
      this.getList()
    })
    .catch(err=>{
      console.log(err);
    })
  }
  delete=(id)=>{
    axios.delete(`http://localhost:3001/guest-book/delete/${id}`)
    .then(guest=>{
      this.getList()
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar search={this.search} getList={this.getList}></Navbar>
        <div className="container" style={{paddingTop:'5%'}}>
          <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#modal" style={{marginBottom:'5%'}}>Add Guest</button>
          <Table listGuest={this.state.list} delete={this.delete}></Table>
          <Modal add={this.addGuest}></Modal>
        </div>
      </div>
    );
  }
}

export default App;
