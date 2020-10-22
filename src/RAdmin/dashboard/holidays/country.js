import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrum from "../breadcrum";
import {
  handleCountryChange,
  countrySaveUpdate,
  getAllCountries,
  setCountryInitialData,
} from "../../adminAction";
import { bannerChoice } from "../../../utilities/constants";
import ImageUploader from "../../../component/uploader";

const CountryType = () => {
  const dispatch = useDispatch();
  const [activetab, setActivetab] = useState("add");

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const country = useSelector((state) => state.AdminReducer.country);
  const countries = useSelector((state) => state.AdminReducer.countries);

  const handleSave = () => {
    dispatch(countrySaveUpdate(country)).then(() => setActivetab("view"));
  };
  return (
    <>
      <Breadcrum title="Country" />
      <div className="wrapper holiday">
        <ul className="tabs">
          <li
            className={activetab === "add" ? "active" : ""}
            onClick={() => setActivetab("add")}
          >
            <span>Add</span>
          </li>
          <li
            className={activetab === "view" ? "active" : ""}
            onClick={() => setActivetab("view")}
          >
            <span>View</span>
          </li>
        </ul>

        <div
          className="tab-container"
          style={{
            display: activetab === "add" ? "block" : "none",
          }}
        >
          <h4>Add Country</h4>
          <div className="tab-row">
            <div className="tab-col-one">Add Country</div>
            <div className="tab-col-two">
              <input
                type="text"
                placeholder="Add Country"
                name="country_name"
                value={country.country_name}
                onChange={(e) => dispatch(handleCountryChange(e))}
              />
              <span>*Country should be unique</span>
            </div>
          </div>

          <div className="tab-row">
            <div className="tab-col-one">Country Banner Image</div>
            <div className="tab-col-two">
              {/* <ImageUploader
                uploadedFiles={country.country_image}
                multiple={false}
                handleImagesChange={(uploadedFiles) =>
                  dispatch(
                    handleCountryChange({
                      target: { name: "country_image", value: uploadedFiles },
                    })
                  )
                }
              /> */}
              <div className="thum-container">
                {country.country_image.map((imageURI) => {
                  return (
                    <div className="thum" key={imageURI}>
                      <img
                        className="photo-uploaded"
                        src={imageURI}
                        alt="Photo uploaded"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="tab-row">
            <div className="tab-col-one">Country Banner Video</div>
            <div className="tab-col-two">
              <input
                type="file"
                name="CountryVideo"
                accept="video/mp4,video/x-m4v"
              />
              <div className="thum-container">
                {/* {country.country_video.map((VideoURI) => {
                  return (
                    <div className="thum" key={VideoURI}>
                      <video width="70" height="70">
                        <source src={VideoURI} />
                      </video>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>

          <div className="tab-row">
            <div className="tab-col-one">Banner </div>
            <div className="tab-col-two">
              {bannerChoice.map((item) => {
                return (
                  <label key={item.text}>
                    <input
                      type="radio"
                      name="is_banner"
                      value={item.value}
                      onChange={(e) =>
                        dispatch(
                          handleCountryChange({
                            target: {
                              name: "is_banner",
                              value: !country.is_banner,
                            },
                          })
                        )
                      }
                    />
                    {item.text}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="tab-row">
            <div className="tab-col-one"></div>
            <div className="tab-col-two">
              <input type="button" value="Add" onClick={handleSave} />
            </div>
          </div>
        </div>

        {/*View part */}
        <div
          className="tab-container"
          style={{
            display: activetab === "view" ? "block" : "none",
          }}
        >
          <h4>View/Delete/Modified Country</h4>

          <div className="tab-row view">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>S. No.</th>
                  <th style={{ width: "75%" }}>Country List</th>
                  <th style={{ width: "10%" }}>Delete</th>
                  <th style={{ width: "10%" }}>Update</th>
                </tr>
              </thead>
              <tbody>
                {(countries || []).map((cont, index) => (
                  <tr key={index}>
                    <td>{cont.id}</td>
                    <td>{cont.country_name}</td>
                    <td>
                      <span>
                        <i className="fa fa-trash"></i>
                      </span>
                    </td>
                    <td>
                      <span
                        onClick={() => {
                          setActivetab("add");
                          dispatch(setCountryInitialData(cont));
                        }}
                      >
                        <i className="fa fa-edit"></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default CountryType;
