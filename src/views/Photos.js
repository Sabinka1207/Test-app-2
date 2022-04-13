import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getPhotos } from "../services/API";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [canDoSubmit, setCanDoSubmit] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    const requestedID = e.target.request.value;
    if (currentNumber !== requestedID) {
      const { data } = await getPhotos(requestedID);
      setPhotos(data);
      setCurrentNumber(requestedID);
      e.target.request.value = "";
    }
  };

  const changeHandler = (e) => {
    const currentText = e.target.value;
    setCanDoSubmit(currentText === currentNumber ? false : true);
  };

  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="photo-container">
        <form
          className="searchForm"
          onSubmit={submitHandler}
          onChange={changeHandler}
        >
          <button type="submit" className="submitBtn" disabled={!canDoSubmit}>
            <span>Get Photos</span>
          </button>

          <input
            className="searchFormInput"
            id="requestInput"
            name="request"
            type="text"
            autoComplete="off"
            autoFocus
            pattern="^0*(?:[1-9][0-9]?|100)$"
            title="Please choose 1-100"
            placeholder="1-100"
          />
        </form>
        {photos.length ? (
          <ul className="imageList">
            {photos.map((item) => {
              return (
                <li key={item.id} className="imageItem">
                  <img src={item.thumbnailUrl} alt={item.title} />
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Photos;
