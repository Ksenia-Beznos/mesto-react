import React from 'react';

function PopupWithForm(props) {
	return (
		<div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
			<div className='popup__container'>
				<button
					className={`popup__close-icon popup__close-icon_type_${props.name}`}
					type='button'
					aria-label='Закрыть'
					onClick={props.onClose}
				></button>
				<h2 className='popup__heading'>{props.title}</h2>

				<form className={`popup__form popup__form_type_${props.name}}`} name={props.name} noValidate>
					{props.children}
					<button className='popup__submit-button' type='submit' aria-label={props.label}>
						{props.button}
					</button>
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;
