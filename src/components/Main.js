import React from 'react';
import { useState, useEffect } from 'react';
import avatar from '../images/avatar.jpg';

function Main() {
	function handleEditAvatarClick() {
		document.querySelector('.popup_type_avatar').classList.add('popup_opened');
	}

	function handleEditProfileClick() {
		document.querySelector('.popup_type_profile').classList.add('popup_opened');
	}

	function handleAddPlaceClick() {
    document.querySelector('.popup_type_cards').classList.add('popup_opened');
  }

	return (
		<main className='content'>
			{/* Section Profile */}
			<section className='profile'>
				<div className='profile__avatar-outside'>
					<button
						className='profile__avatar-button'
						type='button'
						aria-label='Изменить аватар'
						onClick={handleEditAvatarClick}
					>
						<img className='profile__avatar' src={avatar} alt='Аватар' />
					</button>
				</div>
				<div className='profile__container'>
					<div className='profile__info'>
						<h1 className='profile__title'>Жак-Ив Кусто</h1>
						<p className='profile__subtitle'>Исследователь</p>
						<button
							className='profile__edit-button'
							type='button'
							aria-label='Изменить'
							onClick={handleEditProfileClick}
						></button>
					</div>
					<button
						className='profile__add-button'
						type='button'
						aria-label='Добавить'
						onClick={handleAddPlaceClick}
					></button>
				</div>
			</section>

			{/* Section Card */}
			<section className='elements'>
				<ul className='element'></ul>
			</section>
		</main>
	);
}

export default Main;
