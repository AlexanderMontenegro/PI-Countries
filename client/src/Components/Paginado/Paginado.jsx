import React from 'react';
import style from "./Paginado.module.css"

const Paginado = ({ currentPage, totalPages, onChangePage }) => {
 const handlePreviousPage = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
    }
  };

  return (
    <div className={style.text}>
      <button className={style.select} onClick={handlePreviousPage} disabled={currentPage === 1}>Previo</button>
      <span>Pagina {currentPage} al {totalPages}</span>
      <button className={style.select} onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
    </div>
  );
};

export default Paginado;