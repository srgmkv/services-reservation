import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { serviceList: state.serviceList }
};

const ServicesBlock = ({ serviceList }) => {

	return (
		<div className="services-block">
			{serviceList.map(el => (
				<div className="service-item" key={Math.round(Math.random() * 1e8)}>
					<p>{el.type}</p>
					<p>{el.price} &#x20bd;</p>
					<p>{el.company.name}</p>
				</div>
			))
			}
		</div>
	)

}


export default connect(mapStateToProps)(ServicesBlock);
