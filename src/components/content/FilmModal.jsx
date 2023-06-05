import React from "react";

function FilmModal() {
  return (
    <>
      <div className='modal-background'>
        <div id='popup1' className='modal-container'>
          <div className='btn-close-modal'>
            <button onClick={() => setOpenModal(false)}>&times;</button>
          </div>

          <img src={playerItem.img} />
          <h2>{playerItem.name}</h2>
          <p className='title'>{playerItem.club}</p>

          <p className='content'>{playerItem.info}</p>
        </div>
      </div>
    </>
  );
}

export default FilmModal;
