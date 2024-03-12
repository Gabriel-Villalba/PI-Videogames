import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getByGenre } from "../redux/actions/actions";
import styles from '../styles/Home.module.css'

// export default function FilterByGenre() {
//   const dispatch = useDispatch();
  
//   const allGenres = useSelector((state) => state.genres);
  
 
//   useEffect(() => {
//     dispatch(getGenres());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     dispatch(getByGenre(e.target.value))

//   };

//   return (
//     <div>
//         <select className={styles.selectors} onChange={(e)=>{handleChange(e)}}>
//         <option disabled selected>Elige género...</option> 
//            {allGenres.map((op, i) =>{
//           return <option value={op.id} key={i}>{op.name}</option>
//         })}
//         </select>
//     </div>
//   )
// }


const FilterByGenre = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(getByGenre(e.target.value));
  };

  return (
    <>
      <select className={styles.selectors} onChange={handleChange}>
        <option disabled selected>Elige género...</option>
        {allGenres.map((op) => (
          <option key={op.id} value={op.id}>
            {op.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterByGenre;