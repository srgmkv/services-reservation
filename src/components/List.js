import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
	return { reservedServices: state.reservedServices }
};

const reservedServiceList = ({ reservedServices }) => (

	<ul>
		{reservedServices.sort((a, b) =>  new Date (`${b.date} ${b.time}`) - new Date (`${a.date} ${a.time}`))
		.map(el => (
			<li key={Math.round(Math.random()*1e8)}>
				{el.serviceType} {el.date} {el.time}
			</li>
		))}
	</ul>
);

const List = connect(mapStateToProps)(reservedServiceList);
export default List;