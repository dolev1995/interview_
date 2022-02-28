import React, {Component} from 'react'
import './App.css';

import {Link} from 'react-router-dom'


class ViewProduct extends Component{
    constructor() {
		super();
        this.state ={
            valueSearch: '',
            valueAdd: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}


    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        //GET request from the server
          //alert("מוצר אינו זמין במלאי" + this.state.value);

        event.preventDefault();
        fetch('https://localhost:7243/swagger/index.html/get{id}',
        {
        method: 'GET',
        body: JSON.stringify({
            Id:this.event.value,
        
      })
    })
      .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
      }
      AddProduct(event)
      {
        event.preventDefault();
        //this.userAdd(newUser);
        fetch('https://localhost:7243/swagger/index.html/posts',
        {
        method: 'POST',
        body: JSON.stringify({
            Name:this.event.value,
             
        
      })
    })
      .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
      }

    render() {

		return (
			<div className="view">
                <div className='v'>
                <h3>חיפוש מוצר</h3>
                </div>
				<form onSubmit={this.handleSubmit}>
                <input placeholder="הכנס שם פריט" type="text" value={this.setState.valueSearch}  className='btn main-btn' onChange={this.handleChange} required/>
					<input type='submit' className="btn main-btn" value='חפש מוצר'/>

				</form>

                <label> מוצר שברצונך להוסיף:</label>
                <input placeholder="הכנס שם פריט" type="text"/>
                <button className='btn main-btn' onClick={this.AddProduct}> הכנס</button>

</div>

        );
    }

}
export default ViewProduct;