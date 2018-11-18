import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {pokemon: []};
      }
      componentDidMount(){
        axios.get('http://localhost:4000/api/pokemon')
          .then(response => {
            this.setState({ pokemon: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }

      componentDidUpdate(prevProps) {
        axios.get('http://localhost:4000/api/pokemon')
          .then(response => {
            this.setState({ pokemon: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      tabRow(){
        return this.state.pokemon.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
      }
  
      render() {
        return (
          <div>
            <h3 align="center">My Pokemon!</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Typing</th>
                  <th>Base Stat Total</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        );
      }
    }