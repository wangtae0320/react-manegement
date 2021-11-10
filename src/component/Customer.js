import React from 'react';

class Customer extends React.Component {
    render() {
        return(
            <div>
                <CustmoerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender}/>
            </div>
        )
    }
}

class CustmoerProfile extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render () {
        return  (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
            </div>
        )
    }
}

export default Customer;