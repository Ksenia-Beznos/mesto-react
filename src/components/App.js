import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
	return (
		<div className='page'>
			<Header />
			<Main />
			<Footer />

			<PopupWithForm title='Редактировать профиль' name='profile' children='Сохранить' />
			<PopupWithForm title='Новое место' name='cards' children='Создать' />
			<PopupWithForm title='Обновить аватар' name='avatar' children='Сохранить'/>
			<PopupWithForm title='Вы уверены?' name='cards-delete' children='Да'/>

			<ImagePopup />
			
			{/* Section popup Profile */}
			{/* <div className='popup popup_type_profile'>
				<div className='popup__container'>
					<button
						className='popup__close-icon popup__close-icon_type_profile'
						type='button'
						aria-label='Закрыть'
					></button>
					<h2 className='popup__heading'>Редактировать профиль</h2>
					<form className='popup__form popup__form_type_profile' name='profile__form' noValidate>
						<input
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
						</button>
					</form>
				</div>
			</div> */}


			{/* Section popup Card */}
			{/* <div className='popup popup_type_cards'>
				<div className='popup__container'>
					<button
						className='popup__close-icon popup__close-icon_type_cards'
						type='button'
						aria-label='Закрыть'
					></button>
					<h2 className='popup__heading'>Новое место</h2>
					<form className='popup__form popup__form_type_cards' name='profile__form-cards' noValidate>
						<input
							id='title-input'
							className='popup__input popup__input_type_title'
							type='text'
							name='titleInput'
							placeholder='Название'
							required
							minLength='2'
							maxLength='30'
						/>
						<span className='title-input-error popup__input-error'></span>
						<input
							id='link-input'
							className='popup__input popup__input_type_link'
							type='url'
							name='linkInput'
							placeholder='Ссылка на картинку'
							required
						/>
						<span className='link-input-error popup__input-error'></span>
						<button className='popup__submit-button' type='submit' name='submit' aria-label='Сохранить'>
							Создать
						</button>
					</form>
				</div>
			</div>
			 */}


			{/* Section popup Card Confirm Delete */}
			{/* <div className='popup popup_type_cards-delete'>
				<div className='popup__container'>
					<button className='popup__close-icon' type='button' aria-label='Закрыть'></button>
					<form className='popup__form' name='cardDelete' noValidate>
						<h2 className='popup__heading popup__heading_type_cards-delete'>Вы уверены?</h2>
						<button className='popup__submit-button' type='submit' aria-label='Подтвердить'>
							Да
						</button>
					</form>
				</div>
			</div> */}


			{/* Section popup Avatar */}
			{/* <div className='popup popup_type_avatar'>
				<div className='popup__container'>
					<button className='popup__close-icon' type='button' aria-label='Закрыть'></button>
					<h2 className='popup__heading'>Обновить аватар</h2>
					<form className='popup__form popup__form_type_avatar' name='profile__form-avatar' noValidate>
						<input
							id='link-input-avatar'
							className='popup__input popup__input_type_link'
							type='url'
							name='linkInputAvatar'
							placeholder='Ссылка на картинку'
							required
						/>
						<span className='link-input-avatar-error popup__input-error'></span>
						<button
							className='popup__submit-button popup__submit-button_type_avatar'
							type='submit'
							name='submitAvatar'
							aria-label='Сохранить'
						>
							Сохранить
						</button>
					</form>
				</div>
			</div> */}

			{/* Section Template Owner */}
			<template id='template-element-owner'>
				<li className='element__item'>
					<img className='element__image' />
					<div className='element__mask-group'>
						<h2 className='element__title'></h2>
						<div className='element__heart-button-group'>
							<button className='element__heart-button' type='button'></button>
							<span className='element__heart-button-count'>0</span>
						</div>
						<button className='element__trash-button' type='button'></button>
					</div>
				</li>
			</template>
			{/* Section Template User */}
			<template id='template-element'>
				<li className='element__item'>
					<img className='element__image' />
					<div className='element__mask-group'>
						<h2 className='element__title'></h2>
						<div className='element__heart-button-group'>
							<button className='element__heart-button' type='button'></button>
							<span className='element__heart-button-count'>0</span>
						</div>
					</div>
				</li>
			</template>
		</div>
	);
}

export default App;
