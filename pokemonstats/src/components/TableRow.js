import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:4000/api/pokemon/'+this.props.obj.number)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload();
    }

  render() {
    return (
        <tr>
          <td>
            <img src={this.props.obj.imageLink} />
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.number}
          </td>
          <td>
            {this.props.obj.typing}
          </td>
          <td>
            {this.props.obj.baseStatTotal}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.number} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;