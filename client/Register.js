import React, {Component} from 'react'
import './App.css';



class Register extends Component {
    constructor() {
        super();
        this.state = 
        {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleRegister.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleRegister(event) {
        // const newUser = {
        //     name: {
        //         first: this.firstName.value,
        //         last: this.lastName.value
        //     },
        //     password: this.password.value
        // };
        event.preventDefault();
        //this.userAdd(newUser);
        fetch('https://localhost:7243/swagger/index.html/posts',
        {
        method: 'POST',
        body: JSON.stringify({
            Name:this.firstName.value,
            Password: this.password.value 
        
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
			<div className="register">
                <div className='harshama'>
                <h3>הרשמה</h3>
                </div>
				<form onSubmit={this.handleRegister}>
                <input placeholder="שם פרטי*" type="text" value={this.setState.value} ref="firstName" className='inputRegister' onChange={this.handleChange} required/>
					<input placeholder="שם משפחה*" type="text" ref="lastName" className='inputRegister' required/>
					<input placeholder="סיסמה*" type="password" ref="password" className='inputRegister' required/>
					<input type='submit' className="btn main-btn" value='הרשמה'/>

				</form>

</div>

        );
    }




}
export default Register;