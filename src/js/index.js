var React = require('react');
var ReactDOM= require('react-dom');
import ComponmentHeader from './componments/header';
import ComponmentFooter from './componments/footer';
import BodyIndex from './componments/BodyIndex';

class Index extends React.Component{
	render(){
		return (
			<div>
				<ComponmentHeader />
				<BodyIndex />
				<ComponmentFooter />
			</div>
		)
	}
}
ReactDOM.render(
	<Index />,
	document.getElementById('example')
);