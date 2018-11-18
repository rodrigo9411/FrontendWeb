import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangePokemonName = this.onChangePokemonName.bind(this);
        this.onChangePokemonNo = this.onChangePokemonNo.bind(this);
        this.onChangePokemonTyping = this.onChangePokemonTyping.bind(this);
        this.onChangePokemonBaseStats = this.onChangePokemonBaseStats.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            name: '',
            number: '',
            typing:'',
            baseStatTotal:'',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/pokemon/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  name: response.data.name, 
                  number: response.data.number,
                  typing: response.data.typing, 
                  baseStatTotal: response.data.baseStatTotal});
            })
            .catch(function (error) {
                console.log(error);
            })
      }

      onChangePokemonName(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangePokemonNo(e) {
        this.setState({
          number: e.target.value
        })  
      }
      onChangePokemonTyping(e) {
        this.setState({
          typing: e.target.value
        })
      }
  
      onChangePokemonBaseStats(e) {
          this.setState({
            baseStatTotal: e.target.value
          })
        }
        

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      number: this.state.number,
      typing: this.state.typing,
      baseStatTotal: this.state.baseStatTotal
    };
    axios.put('http://localhost:4000/api/pokemon/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangePokemonName}
                      />
                </div>
                <div className="form-group">
                    <label>Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.number}
                      onChange={this.onChangePokemonNo}
                      />
                </div>
                <div className="form-group">
                    <label>Typing: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.typing}
                      onChange={this.onChangePokemonTyping}
                      />
                </div>
                <div className="form-group">
                    <label>Base Stats Total: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.baseStatTotal}
                      onChange={this.onChangePokemonBaseStats}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Pokemon" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
