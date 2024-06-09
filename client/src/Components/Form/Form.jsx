import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  getCountries,
  createActivity,
  getActivities,
  deleteActivities,
} from "../../Redux/Actions/actions";
import validate from "./validate";
import style from "./Form.module.css";
import soundFile from "../audio/Crear.mp3";
import { Link } from "react-router-dom";

const reload = () => {
  window.location.reload(false);
};

const Form = () => {
  const dispatch = useDispatch();
  const countriesName = useSelector((state) => state.countries);
  const countriesorden = countriesName.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const theActivities = useSelector((state) => state.activities);
  const activitiesorden = theActivities.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelectCountries = (event) => {
    setInput({
      ...input,
      countryId: [...input.countryId, event.target.value],
    });
    setErrors(
      validate({
        ...input,
        countryId: [...input.countryId, event.target.value],
      })
    );
  };

  const handleSubmit = (event) => {
    handleButtonClick();
    event.preventDefault();
    const errorSave = validate(input);
    const existName = theActivities.find(
      (activity) => activity.name.toLowerCase() === input.name.toLowerCase()
    )
      ? 1
      : 0;
    if (existName === 1) alert("Activity name already exists");
    else if (Object.values(errorSave).length !== 0)
      alert("You must fulfill all the required conditions");
    else {
      dispatch(createActivity(input));
      alert("Activity Created!");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
      });
      reload();
    }
  };

  const [delAct, setDelAct] = useState("");

  const handleSelectDelete = (event) => {
    setDelAct(event.target.value);
  };


  const handleSubmitDelete = (event) => {
    handleButtonClick();
    event.preventDefault();
    if (delAct.length <= 0) alert("You must select an activity to delete");
    else {
      dispatch(deleteActivities(delAct));
      alert("Activity Deleted!");
      setDelAct("");
      reload();
    }
  };

  




  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(deleteActivities());
  }, [dispatch]);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  return (
    <div className={style.contenedor}>
      <div className={style.formContainer}>
        <p className={style.titulo}>Crear Actividad</p>
        <form onSubmit={handleSubmit}>
          <div className={style.formField}>
            <div className={style.unidos}>
              <label className={style.label}>Nombre: </label>
              <input
                className={style.formInputt}
                onChange={handleChange}
                type="text"
                value={input.name}
                name="name"
                placeholder="Nombre de Actividad"
              />
            </div>
            {errors.name && <p className={style.formError}>{errors.name}</p>}
          </div>

          <div className={style.formField}>
            <label className={style.label}>Dificulltad: </label>
            <select
              className={style.formInput}
              onChange={handleChange}
              name="difficulty"
              value={input.difficulty}
            >
              <option value="" disabled>
                Seleccion
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.difficulty && (
              <p className={style.formError}>{errors.difficulty}</p>
            )}
          </div>

          <div className={style.formField}>
            <label className={style.label}>Duracion: </label>
            <select
              className={style.formInput}
              onChange={handleChange}
              name="duration"
              value={input.duration}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="1">1 hs</option>
              <option value="2">2 hs</option>
              <option value="3">3 hs</option>
              <option value="4">4 hs</option>
              <option value="5">5 hs</option>
              <option value="6">6 hs</option>
              <option value="7">7 hs</option>
              <option value="8">8 hs</option>
              <option value="9">9 hs</option>
              <option value="10">10 hs</option>
              <option value="11">11 hs</option>
              <option value="12">12 hs</option>
              <option value="13">13 hs</option>
              <option value="14">14 hs</option>
              <option value="15">15 hs</option>
              <option value="16">16 hs</option>
              <option value="17">17 hs</option>
              <option value="18">18 hs</option>
              <option value="19">19 hs</option>
              <option value="20">20 hs</option>
              <option value="21">21 hs</option>
              <option value="22">22 hs</option>
              <option value="23">23 hs</option>
              <option value="24">24 hs</option>
            </select>
            {errors.duration && (
              <p className={style.formError}>{errors.duration}</p>
            )}
          </div>

          <div className={style.formField}>
            <label className={style.label}>Temporada: </label>
            <select
              className={style.formInput}
              onChange={handleChange}
              name="season"
              value={input.season}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="Summer">Verano</option>
              <option value="Autumn">Otoño</option>
              <option value="Winter">Invierno</option>
              <option value="Spring">Primavera</option>
            </select>
            {errors.season && (
              <p className={style.formError}>{errors.season}</p>
            )}
          </div>

          <div className={style.formFieldP}>
            <label className={style.labelP}>Pais: </label>
            
            <select
              className={style.formInputP}
              onChange={handleSelectCountries}
              value={input.countryId}
              multiple
            >
              
              {countriesorden.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>

            {errors.countryId && (
              <p className={style.formError}>{errors.countryId}</p>
            )}
            <div>
              <ul className={style.elegidos}>
                <p>
                  {input.countryId.map((countrieId_input) =>
                    countriesName.map((countrie_state) => {
                      if (countrie_state.id === countrieId_input) {
                        return countrie_state.name + ", ";
                      }
                    })
                  )}
                </p>
              </ul>
            </div>
          </div>

          <div>
            <button
              className={style.reload}
              type="submit"
              disabled={
                input.name === "" ||
                input.difficulty === "" ||
                input.duration === "" ||
                input.season === "" ||
                input.countryId.length < 0 ||
                errors.name ||
                errors.difficulty ||
                errors.duration ||
                errors.season ||
                errors.countryId
              }
            >
              Crear
            </button>
            <audio
              ref={audioRef}
              src={soundFile}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </form>
      </div>

      <div className={style.formContainerdel}>
        <div>
          <p className={style.titulo}>Eliminar Actividad</p>
          <form onSubmit={handleSubmitDelete}>
            <div className={style.formField}>
              <div>
                <select
                  className={style.formInputdel}
                  onChange={handleSelectDelete}
                  value={delAct}
                >
                  <option value="" disabled>
                    Actividad
                  </option>
                  {activitiesorden &&
                    activitiesorden.map((activity) => {
                      return (
                        <option key={activity.name} value={activity.name}>
                          {activity.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>

            <p className={style.elegidos}>Actividad a Eliminar: {delAct}</p>

            <div>
              <button
                className={style.reload}
                type="submit"
                disabled={delAct === ""}
              >
                Eliminar
              </button>
              <audio
                ref={audioRef}
                src={soundFile}
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          </form>
        </div>
        <div className={style.acceso}>
          <div>
            <button className={style.reloadd} onClick={reload}>
              Actualizar
            </button>
          </div>
          <div>
            <Link to="/home">
              <button className={style.reloadd}>Inicio</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
