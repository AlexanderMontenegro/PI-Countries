import Card from "../Card/Card";
import style from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { getCountries, getActivities, countryFilter, orderByName } from "../../Redux/Actions/actions";
import SearchBar from "../SearchBar/SearchBar";
import Paginado from '../Paginado/Paginado';
import soundFile from "../audio/search.mp3";

const reload = () => {
  window.location.reload(false);
}

const Home = () => {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const allActivities = useSelector(state => state.activities);

  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 8;

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = countries?.slice(indexOfFirstElement, indexOfLastElement);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const [continentFilter, setContinentFilter] = useState("All");
  const [activityFilter, setActivityFilter] = useState("All");
  const [orderBy, setOrderBy] = useState("");

  const handleFilterContinent = (event) => {
    setContinentFilter(event.target.value);
  }

  const handleFilterActivity = (event) => {
    setActivityFilter(event.target.value);
  }

  const handleFilter = () => {
    handleButtonClick();
    setCurrentPage(1);
    const filters = {
      continent: continentFilter,
      activity: activityFilter,
    };
    dispatch(countryFilter(filters));
    setOrderBy("");
  };

  const handleOrderByName = (event) => {
    const selectedValue = event.target.value;
    setOrderBy(selectedValue);
    dispatch(orderByName(selectedValue));
  };

  const totalPages = Math.ceil(countries?.length / elementsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  useEffect(() => {
    if (isPlaying) {
      // Lógica para manejar cuando el audio está en reproducción
      console.log("Audio is playing...");
    }
  }, [isPlaying]);

  return (
    <div>
      <SearchBar handleFilter={handleFilter} onPageChange={handlePageChange} />

      <div className={style.home}>
        <div className={style.costado}>
          <div className={style.filterContainer}>
            <h1 className={style.title}>Filtros</h1>
            <div>
              <h3 className={style.subtitle}>Continentes</h3>
              <select className={style.select} onChange={handleFilterContinent} value={continentFilter}>
                <option value="All">Todos los continentes</option>
                <option value="Africa">África</option>
                <option value="Antarctic">Antártida</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Americas">Américas</option>
                <option value="Oceania">Oceanía</option>
              </select>
            </div>

            <div>
              <h3 className={style.subtitle}>Actividades</h3>
              <select className={style.select} onChange={handleFilterActivity} value={activityFilter}>
                <option value="All">Todas las actividades</option>
                {allActivities && allActivities.map((activity) => (
                  <option key={activity.id} value={activity.name}>{activity.name}</option>
                ))}
              </select>
            </div>

            <button className={style.reload} type="button" onClick={handleFilter}>Aplicar</button>
            <audio ref={audioRef} src={soundFile} onEnded={() => setIsPlaying(false)} />
          </div>

          <div className={style.orderContainer}>
            <h1 className={style.title}>Ordenar</h1>
            <h3 className={style.subtitle}>Según</h3>
            <select className={style.select} onChange={handleOrderByName} value={orderBy}>
              <option value="" disabled>Ordenar por...</option>
              <option value="ascName">Nombres A - Z</option>
              <option value="descName">Nombres Z - A</option>
              <option value="ascPopulation">Popularidad Bajo-Alto</option>
              <option value="descPopulation">Popularidad Alto-Bajo</option>
            </select>
          </div>

          <button className={style.reload} onClick={reload}>Recargar</button>
        </div>

        <div className={style.container}>
          {currentElements.length !== 0 ?
            currentElements.map(({ id, name, flag_img, continent }) => (
              <Card
                key={id}
                id={id}
                name={name}
                flag_img={flag_img}
                continent={continent}
              />
            ))
            : (<p className={style.mensaje}>No Se Encuentra ...</p>)
          }
          <div className={style.espacio}></div>
          <div className={style.pag}>
            <Paginado
              currentPage={currentPage}
              totalPages={totalPages}
              onChangePage={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
