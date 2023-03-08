import React from 'react';
import { useState, useEffect } from 'react';

function PopupWithForm(props) {
	<div className={`popup popup_type_${props.name}`}>
		<div className='popup__container'>
			<button
				className={`popup__close-icon popup__close-icon_type_${props.name}`}
				type='button'
				aria-label='Закрыть'
			></button>
			<h2 className='popup__heading'>{props.title}</h2>

			<form className={`popup__form popup__form_type_${props.name}}`} name={props.name} noValidate>
						{/* <input
							id='name-input'
							className='popup__input popup__input_type_name'
							type='text'
							name='nameInput'
							placeholder='Имя'
							required
							minLength='2'
							maxLength='40'
						/>
						<span className='name-input-error popup__input-error'></span>
						<input
							id='text-input'
							className='popup__input popup__input_type_job'
							type='text'
							name='jobInput'
							placeholder='О себе'
							required
							minLength='2'
							maxLength='200'
						/>
						<span className='text-input-error popup__input-error'></span>
						<button className='popup__submit-button' type='submit' aria-label='Сохранить'>
							Сохранить
						</button> */}
					</form>
		</div>
	</div>;
}

export default PopupWithForm;
