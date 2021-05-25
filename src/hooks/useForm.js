import { useState } from "react";
import PropTypes from "prop-types";

export const useForm = (initialState = {}) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () => {
      setValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

  return [values, handleInputChange, reset];
};

useForm.propTypes = {
  values: PropTypes.any.isRequired,
  handleInputChange: PropTypes.func,
  reset: PropTypes.func,
};
