import React from 'react';
import './style.css';

const formConfig = [
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    options: [
      { label: 'India', value: 'india' },
      { label: 'USA', value: 'usa' },
      { label: 'Other', value: 'other' },
    ],
    validation: { required: true },
  },
  {
    name: 'customCountry',
    label: 'Enter Country Name',
    type: 'text',
    dependsOn: 'country',
    showIf: 'other',
  },
  {
    name: 'state',
    label: 'State (India)',
    type: 'select',
    dependsOn: 'country',
    showIf: 'india',
    options: [
      { label: 'Maharashtra', value: 'maharashtra' },
      { label: 'Rajasthan', value: 'rajasthan' },
      { label: 'Gujarat', value: 'gujarat' },
    ],
  },
  {
    name: 'usaState',
    label: 'State (USA)',
    type: 'select',
    dependsOn: 'country',
    showIf: 'usa',
    options: [
      { label: 'California', value: 'california' },
      { label: 'Texas', value: 'texas' },
      { label: 'Florida', value: 'florida' },
    ],
  },
  {
    name: 'postalCode',
    label: 'Postal Code',
    type: 'text',
    dependsOn: ['state', 'usaState'],
    showIf: (values) => values.state || values.usaState,
    validation: {
      required: true,
      pattern: /^[0-9]{4,8}$/,
      message: 'Postal code must be 4–8 digits',
    },
  },
];

export default function App() {
  const [formValues, setFormValues] = React.useState({});
  const [errors, setErrors] = React.useState({});

  function fieldVisibility(field) {
    if (!field.dependsOn) return true;
    if (typeof field.showIf === 'function') return field.showIf(formValues);
    const dependency = Array.isArray(field.dependsOn)
      ? field.dependsOn[0]
      : field.dependsOn;
    return formValues[dependency] === field.showIf;
  }

  function handleChange(name, value) {
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function validateForm() {
    const newErrors = {};

    formConfig.map((field) => {
      const validation = field.validation;
      const value = formValues[field.name];

      if (!validation) return;
      if (validation.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (validation.pattern && value && !validation.pattern.test(value)) {
        newErrors[field.name] = validation.message || 'Invalid Input';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) console.log(errors);
  }

  console.log(formValues);

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => {
        if (!fieldVisibility(field)) return null;

        return (
          <div>
            {field.type === 'select' ? (
              <select
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((op) => {
                  return (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  );
                })}
              </select>
            ) : (
              <input
                type="text"
                placeholder={field.label}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
            {errors[field.name] && (
              <div style={{ color: 'red' }}>{errors[field.name]}</div>
            )}
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
