import React from 'react';
import avatar from '../images/avatar.jpg';
import { api } from '../utils/api';

function Main(props) {
	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('');


	return (
		<main className='content'>
			{/* Section Profile */}
			<section className='profile'>
				<div className='profile__avatar-outside'>
					<button
						className='profile__avatar-button'
						type='button'
						aria-label='Изменить аватар'
						onClick={props.onEditAvatar}
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
							onClick={props.onEditProfile}
						></button>
					</div>
					<button
						className='profile__add-button'
						type='button'
						aria-label='Добавить'
						onClick={props.onAddPlace}
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
