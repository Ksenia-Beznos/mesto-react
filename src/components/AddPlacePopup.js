import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

const [name, setName] = useState('');
const [link, setLink] = useState('');

	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeLink(e) {
		setLink(e.target.value);
	}

function handleSubmit(e) {
	e.preventDefault();
	onAddPlace({
		name,
    link
	});
}

	return (
		<PopupWithForm
			title='Новое место'
			name='cards'
			button='Создать'
			label='Создать'
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
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
				onChange={handleChangeName}
			/>
			<span className='title-input-error popup__input-error'></span>
			<input
				id='link-input'
				className='popup__input popup__input_type_link'
				type='url'
				name='linkInput'
				placeholder='Ссылка на картинку'
				required
				onChange={handleChangeLink}
			/>
			<span className='link-input-error popup__input-error'></span>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
