class App extends React.Component {
	clickHandler() {
		alert('works')
	}
	render() {
		return <button onClick={() => this.clickHandler()}>click</button>
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
