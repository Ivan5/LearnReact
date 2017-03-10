{/*Compnente Mensaje*/}
var GreeterMessage = React.createClass({
  render:function(){
    var name= this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});
{/*Compnente Formulario*/}
var GreeterForm = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();

    var updates={};
    var name= this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0){
      this.refs.name.value = '';
      updates.name = name;
    }
    if(message.length > 0){
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render:function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});
{/*Compnente contenedor*/}
var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name: 'React',
      message: 'this is the default message'
    };
  },
  getInitialState: function(){
    return{
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
      {/*Se llama al componente del mensaje*/}
        <GreeterMessage name={name} message={message}/>
    {/*Se llama al componente del formulario*/}
      <GreeterForm onNewData={this.handleNewName}/>
      </div>
    );
  }
});
var name = 'Ivan';
ReactDOM.render(
  <Greeter name={name} message="Message form prop"/>,
  document.getElementById('app')
);
