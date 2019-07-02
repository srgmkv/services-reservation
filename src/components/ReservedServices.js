import React from 'react';

// Компонент отображает представление списка забронированных улсуг
const ReservedServices = ({ items, onClick }) => {
	return (
		<div className="reserved-services-list">
			<div id="reserved-list-header">My reservations</div>

			{items
				.map(el => (
					<div className="reserved-item" id={el.id}
						key={el.id}>
						<div className="date"><div>{el.time}</div><div>{el.date.replace(/-/gi, '.')}</div></div>
						<div className="type">{el.serviceType}</div>
						<div className="company">{el.company}</div>
						<div className="cancel" onClick={() => onClick(el)}>cancel</div>
					</div>

				))}

		</div>
	)
}

export default ReservedServices;