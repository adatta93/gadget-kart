import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateCustomFields } from "../../redux/products/products.action";

function CustomizeFields({ categoryName, fields, updateCustomFields }) {
  const handleChange = (e, key) => {
    updateCustomFields({ ...fields, [key]: e.target.checked });
  };

  const capitalizeFirstLetter = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  const [fieldsForCat, setFieldsForCat] = useState([]);

  useEffect(() => {
    if (categoryName === "mobile") {
      let f = (({ processor, ram, memory, camera, screen, battery }) => ({
        processor,
        ram,
        memory,
        camera,
        screen,
        battery,
      }))(fields);
      setFieldsForCat(f);
    } else if (categoryName === "laptop") {
      let f = (({ processor, ram, memory, screen, weight }) => ({
        processor,
        ram,
        memory,
        screen,
        weight,
      }))(fields);
      setFieldsForCat(f);
    } else if (categoryName === "smartwatch") {
      let f = (({ screen, battery, sensor }) => ({ screen, battery, sensor }))(
        fields
      );
      setFieldsForCat(f);
    } else if (categoryName === "tv") {
      let f = (({ speaker, screen }) => ({ speaker, screen }))(fields);
      setFieldsForCat(f);
    } else if (categoryName === "headphones") {
      let f = (({ connector, microphone, wireless }) => ({
        connector,
        microphone,
        wireless,
      }))(fields);
      setFieldsForCat(f);
    }
  }, [fields, categoryName]);

  return (
    <div className="card">
      <div className="card-header">Customize Fields to Show</div>
      <div className="card-body">
        {Object.keys(fieldsForCat).map((fld) => (
          <div key={fld} className="mb-2">
            <input
              type="checkbox"
              name={fld}
              id={fld}
              className="customize-input"
              checked={fieldsForCat[fld]}
              onChange={(e) => handleChange(e, fld)}
            />
            <label htmlFor={fld} className="customize-label">
              {fld === "ram" ? fld.toUpperCase() : capitalizeFirstLetter(fld)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fields: state.products.customFields,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCustomFields: (fields) => dispatch(updateCustomFields(fields)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeFields);
