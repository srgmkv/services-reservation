import React from 'react';

const ReservedServices = ({ items, onClick }) => {
	return (
		<div className="reserved-services-list">
			<div id="reserved-list-header">My reservations</div>
			
				{items
					.map(el => (
						<div className="reserved-item" id={el.id}
						
							key={el.id}>
								
								<div className="date"><div>{el.time}</div><div>{el.date.replace(/-/gi, '.')}</div></div>
								<div className="type"><div>{el.serviceType}</div></div>
								<div className="company"><div>{el.company}</div></div>

							<div className="cancel" onClick={() => onClick(el)}><div>cancel</div></div>
						</div>
						
					))}
			
		</div>
	)
}

export default ReservedServices;