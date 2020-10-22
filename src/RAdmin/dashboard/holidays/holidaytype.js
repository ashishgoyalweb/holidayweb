import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrum from "../breadcrum";
import {
  handleHolidayChange,
  holidaySaveUpdate,
  getAllHolidayTypes,
  setHolidayInitialData,
} from "../../adminAction";
import { bannerChoice } from "../../../utilities/constants";
import ImageUploader from "../../../component/uploader";

const HolidayType = () => {
  const dispatch = useDispatch();
  const [activetab, setActivetab] = useState("add");

  useEffect(() => {
    dispatch(getAllHolidayTypes());
  }, [dispatch]);

  const holiday = useSelector((state) => state.AdminReducer.holiday);
  const holidays = useSelector((state) => state.AdminReducer.holidays);

  const handleSave = () => {
    dispatch(holidaySaveUpdate(holiday)).then(() => setActivetab("view"));
  };

  return (
    <>
      <Breadcrum title="Holidays Type" />
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
          <h4>Add Holiday Package</h4>
          <div className="tab-row">
            <div className="tab-col-one">Add Holiday Type</div>
            <div className="tab-col-two">
              <input
                type="text"
                placeholder="Add holiday type"
                name="holiday_name"
                value={holiday.holiday_name}
                onChange={(e) => dispatch(handleHolidayChange(e))}
              />
              <span>*Holiday type should be unique</span>
            </div>
          </div>

          <div className="tab-row">
            <div className="tab-col-one">Holiday Banner Image</div>
            <div className="tab-col-two">
              {/* <ImageUploader
                uploadedFiles={holiday.holiday_image}
                multiple={false}
                handleImagesChange={(uploadedFiles) =>
                  dispatch(
                    handleHolidayChange({
                      target: { name: "holiday_image", value: uploadedFiles },
                    })
                  )
                }
              /> */}
            </div>
          </div>

          <div className="tab-row">
            <div className="tab-col-one">Country Banner Video</div>
            <div className="tab-col-two">
              <input
                type="file"
                name="holidayTypeVideo"
                accept="video/mp4,video/x-m4v"
              />
              <div className="thum-container">
                {/* {holiday.holiday_video.map((VideoURI) => {
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
                      name="holidayBanner"
                      value={item.value}
                      onChange={(e) =>
                        dispatch(
                          handleHolidayChange({
                            target: {
                              name: "is_banner",
                              value: !holiday.is_banner,
                            },
                          })
                        )
                      }
                    />{" "}
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

        {/* View part start here */}
        <div
          className="tab-container"
          style={{
            display: activetab === "view" ? "block" : "none",
          }}
        >
          <h4>View/Delete/Modified Holiday Type</h4>

          <div className="tab-row view">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>S. No.</th>
                  <th style={{ width: "75%" }}>Holiday Type</th>
                  <th style={{ width: "10%" }}>Delete</th>
                  <th style={{ width: "10%" }}>Update</th>
                </tr>
              </thead>
              <tbody>
                {(holidays || []).map((hol, index) => (
                  <tr key={index}>
                    <td>{hol.id}</td>
                    <td>{hol.holiday_name}</td>
                    <td>
                      <span>
                        <i className="fa fa-trash"></i>
                      </span>
                    </td>
                    <td>
                      <span
                        onClick={() => {
                          setActivetab("add");
                          dispatch(setHolidayInitialData(hol));
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
export default HolidayType;
