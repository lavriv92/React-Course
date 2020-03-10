export default class FormValidator {
  static isRequired = (value, parameter) => {
    return parameter && !!value;
  };

  static minLength = (value, parameter) => {
    return value && value.length >= parameter;
  };

  static maxLength = (value, parameter) => {
    return value && value.length <= parameter;
  };
}
