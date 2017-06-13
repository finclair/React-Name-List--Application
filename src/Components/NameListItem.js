import React, {Component} from 'react';

class NameListItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.person.id,
      name: this.props.person.name,
      e_mail: this.props.person.e_mail,
      phone: this.props.person.phone,
      deletingPerson: props.deletingPerson,
    }
    this.showEditForm = this.showEditForm.bind(this);

  }

  showEditForm(event) {
    event.preventDefault();
    this.props.showEditForm(this.state.id);
  }

  componentWillReceiveProps(newprops) {
    console.log(newprops);
    this.setState({
      id: newprops.person.id,
      name: newprops.person.name,
      e_mail: newprops.person.e_mail,
      phone: newprops.person.phone,
    })
  }

  render() {
    return (
      <div className="row person">
        <div className="name-column">{this.state.name}</div>
        <div className="mail-column">{this.state.e_mail}</div>
        <div className="phone-column">{this.state.phone}</div>
        <div className="buttons-column">
          <button onClick={this.showEditForm} className="button-modify"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
          <button onClick={() => this.state.deletingPerson(this.state.id)} className="button-delete"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        </div>
      </div>
    );
  }    
};

export default NameListItem;