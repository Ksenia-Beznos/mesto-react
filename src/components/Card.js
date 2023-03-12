function Card(props) {

function handleClick() {
	props.onCardClick(props.card);
} 

  return (
		<li className='element__item'>
			<img className='element__image' src={props.card.link} alt={props.card.name} onClick={handleClick} />
			<div className='element__mask-group'>
				<h2 className='element__title'>{props.card.name}</h2>
				<div className='element__heart-button-group'>
					<button className='element__heart-button' type='button'></button>
					<span className='element__heart-button-count'>{props.card.likes.length}</span>
				</div>
			</div>
		</li>
	);
}

export default Card;