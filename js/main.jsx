class App extends React.Component {
  render() {
    return (
       <div>
         <h1>Hello JSX and the World!</h1>
         <p>Writing some React</p>
         <form>
		<label>
			Name:
			<input type="text" name="name" />
		</label>
			<input type="submit" value="Submit" />
		</form>
       </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);