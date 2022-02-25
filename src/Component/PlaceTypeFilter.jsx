import "../CSS/PlaceTypeFilter.css";

export const PlaceTypeFilter = () => {
  return (
    <div>
      <div>
        <div className="main-placetype">
          <div className="checkbox-and-text-div">
            <div>
              <label class="container-placetype">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-text-div">
              <p className="checkbox-text1">Entire place</p>
              <p className="checkbox-text2">Have a place to yourself</p>
            </div>
          </div>
          <div className="checkbox-and-text-div">
            <div>
              <label class="container-placetype">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-text-div">
              <p className="checkbox-text1">Private room</p>
              <p className="checkbox-text2">
                Have your own room and share some common spaces
              </p>
            </div>
          </div>
          <div className="checkbox-and-text-div">
            <div>
              <label class="container-placetype">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-text-div">
              <p className="checkbox-text1">Hotel room</p>
              <p className="checkbox-text2">
                Have a private or shared room in a boutique hotel, hostel, and
                more
              </p>
            </div>
          </div>
          <div className="checkbox-and-text-div">
            <div>
              <label class="container-placetype">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="checkbox-text-div">
              <p className="checkbox-text1">Shared room</p>
              <p className="checkbox-text2">
                Stay in a shared space, like a common room
              </p>
            </div>
          </div>
          <hr className="placetype-line" />
          <div className="div-placetype">
            <button className="button-placetype-clear">Clear</button>
            <button className="button-placetype-save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
