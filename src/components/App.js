import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

	const [currentUser, setCurrentUser] = useState('');
	useEffect(() => {
		api
			.getUserInfo()
			.then((res) => {
				setCurrentUser(res);
			})
			.catch((err) => console.log(err));
	}, []);

	const [selectedCard, setSelectedCard] = useState({});

	const handleCardClick = (card) => {
		setSelectedCard(card);
		setIsImagePopupOpen(true);
	};

	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
	};

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	};

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsImagePopupOpen(false);
	}

	const [cards, setCards] = useState([]);

	useEffect(() => {
		api
			.getInitialCards()
			.then((res) => {
				setCards(res);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleCardLike(card) {
		// Снова проверяем, есть ли уже лайк на этой карточке
		console.log(card)
		const isLiked = card.likes.some((i) => i._id === currentUser._id);
		// Отправляем запрос в API и получаем обновлённые данные карточки
		api
			.changeLikeCardStatus(card._id, isLiked)
			.then((newCard) => {
				setCards((elements) => elements.map((element) => (element._id === card._id ? newCard : element)));
			})
			.catch((err) => console.log(err));
	}

	function handleCardDelete(card) {
		api
			.removeCard(card._id)
			.then(() => {
				const newCards = cards.filter((element) => (element._id !== card._id ? element : ''));
				setCards(newCards);
			})
			.catch((err) => console.log(err));
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='page'>
				<Header />
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onOpenImagePopup={handleCardClick}
					onCardLike={handleCardLike}
					cards={cards}
					onDeleteCard={handleCardDelete}
				/>

				<Footer />

				{/* Форма Profile */}
				<PopupWithForm
					title='Редактировать профиль'
					name='profile'
					button='Сохранить'
					label='Сохранить'
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
				>
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
				</PopupWithForm>

				{/* Форма Cards */}
				<PopupWithForm
					title='Новое место'
					name='cards'
					button='Создать'
					label='Создать'
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				>
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
				</PopupWithForm>

				{/* Форма Avatar */}
				<PopupWithForm
					title='Обновить аватар'
					name='avatar'
					button='Сохранить'
					label='Сохранить'
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
				>
					<input
						id='link-input-avatar'
						className='popup__input popup__input_type_link'
						type='url'
						name='linkInputAvatar'
						placeholder='Ссылка на картинку'
						required
					/>
					<span className='link-input-avatar-error popup__input-error'></span>
				</PopupWithForm>

				{/* Форма Delete-card */}
				<PopupWithForm title='Вы уверены?' name='cards-delete' button='Да' label='Да' />

				<ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
