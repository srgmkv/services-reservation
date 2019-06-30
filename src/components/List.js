import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
	return { reservedServices: state.reservedServices }
};

const reservedServiceList = ({ reservedServices }) => (
<div className="reserved-services-list">
	<div id="reserved-list-header">My reservations</div>
	
		{reservedServices.sort((a, b) =>  new Date (`${b.date} ${b.time}`) - new Date (`${a.date} ${a.time}`))
		.map(el => (
			<div className="reserved-item"
			key={Math.round(Math.random()*1e8)}>
				{el.serviceType} {el.date} {el.time}
			</div>
		))}
	
	</div>
);

const List = connect(mapStateToProps)(reservedServiceList);
export default List;