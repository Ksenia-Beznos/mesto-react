import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onOpenImagePopup }) {
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api
			.getInitialCards()
			.then((res) => {
				setCards(res);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		api
			.getUserInfo()
			.then((res) => {
				const currentUser = res;
				setUserName(currentUser.name);
				setUserDescription(currentUser.about);
				setUserAvatar(currentUser.avatar);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<main className='content'>
			{/* Section Profile */}
			<section className='profile'>
				<div className='profile__avatar-outside'>
					<button className='profile__avatar-button' type='button' aria-label='Изменить аватар' onClick={onEditAvatar}>
						<img className='profile__avatar' src={userAvatar} alt='Аватар' />
					</button>
				</div>
				<div className='profile__container'>
					<div className='profile__info'>
						<h1 className='profile__title'>{userName}</h1>
						<p className='profile__subtitle'>{userDescription}</p>
						<button
							className='profile__edit-button'
							type='button'
							aria-label='Изменить'
							onClick={onEditProfile}
						></button>
					</div>
					<button className='profile__add-button' type='button' aria-label='Добавить' onClick={onAddPlace}></button>
				</div>
			</section>

			{/* Section Card */}
			<section className='elements'>
				<ul className='element'>
					{cards.map((card) => {
						return <Card key={card._id} card={card} onCardClick={onOpenImagePopup} />;
					})}
				</ul>
			</section>
		</main>
	);
}

export default Main;
