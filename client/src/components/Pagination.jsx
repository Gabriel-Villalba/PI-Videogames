
// import styles from '../styles/Pagination.module.css'

// export function Pagination({ vgsPerPage, totalVgs, paginate }) {
//   let pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalVgs / vgsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className={styles.containerPages}>
//       <div className={styles.buttonsGroup}>
//         {pageNumbers.map((page, index) => (
//           <button key={index} onClick={() => paginate(page)} className={styles.buttonPage}>
//             {page}
//           </button>
//         ))}
//         </div>
//     </nav>
//   );
// }

// export default Pagination;

import styles from '../styles/Pagination.module.css';

export function Pagination({ vgsPerPage, totalVgs, currentPage, paginate }) {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalVgs / vgsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.containerPages}>
            <div className={styles.buttonsGroup}>
                {currentPage > 1 && (
                    <button onClick={() => paginate(currentPage - 1)} className={styles.buttonPage}>
                        prev
                    </button>
                )}
                {pageNumbers.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(page)}
                        className={`${styles.buttonPage} ${page === currentPage ? styles.activePage : styles.pageActive}`}
                    >
                        {page}
                    </button>
                ))}
                {currentPage < pageNumbers.length && (
                    <button onClick={() => paginate(currentPage + 1)} className={styles.buttonPage}>
                        next
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Pagination;
