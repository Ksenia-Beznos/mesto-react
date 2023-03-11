import React from 'react';

function ImagePopup() {
  <div className='popup popup_type_image'>
		<figure className='popup__container-image'>
			<img className='popup__photo' />
			<figcaption className='popup__figcap'></figcaption>
			<button className='popup__close-icon popup__close-icon_type_image' type='button' aria-label='Закрыть'></button>
		</figure>
	</div>;
}

export default ImagePopup;
