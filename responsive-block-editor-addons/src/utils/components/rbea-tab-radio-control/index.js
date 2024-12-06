import { useState, Fragment } from '@wordpress/element';
import { RadioControl } from '@wordpress/components';

const RbeaTabRadioControl = ({ label, value, onChange, options, help, hasIcon = false, optionHasBorder = false, defaultValue = ''}) => {
  // Store the currently selected option in state
  if(defaultValue==='')
  {
    defaultValue = options[0].value;
  }
  const [activeOption, setActiveOption] = useState(value);

  // Handle the option change
  const handleChange = (value) => {
    setActiveOption(value); // Update the active option
    onChange(value); // Trigger the onChange handler
  };

  return (
    <Fragment>
      <div className={hasIcon ? "rbea-tab-radio-control-wrapper-with-icon" : "rbea-tab-radio-control-wrapper"}>
        <label>{label}</label>
        <div className="rbea-tab-radio-options .components-flex">
          {options.map((option) => (
            <div
              key={option.value}
              className={`rbea-tab-radio-option ${
                activeOption === option.value ? 'is-active' : ''
              }`}
              onClick={() => handleChange(option.value)}
            >
              {option.icon ? <div className={`${optionHasBorder ? 'rbea-tab-radio-option-border': 'rbea-tab-radio-option-icon'}`}>{option.icon}</div> : option.label}
            </div>
          ))}
        </div>
        <p className='rbea-tab-radio-options-help-text'>{help}</p>
      </div>
    </Fragment>
  );
};

export default RbeaTabRadioControl;
