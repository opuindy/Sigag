export const isValidFullName = (name) => {
  // Regex pattern for full name (allowing alphabets, spaces, and hyphens)
  const fullNameRegex = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/;
  return fullNameRegex.test(name);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData, fn) => {
  let valid = true;
  const { name, email } = formData;
  const newErrors = { name: '', email: '' };

  if (!isValidFullName(name)) {
    newErrors.name = 'Please enter full name';
    valid = false;
  }

  if (email.trim() === '') {
    newErrors.email = 'Please enter your email address';
    valid = false;
  } else if (!isValidEmail(email)) {
    newErrors.email = 'Please enter a valid email address.';
    valid = false;
  }

  fn(newErrors);
  return valid;
};

export const validateEmailField = (formData, errors, setErrors) => {
  const { email } = formData;
  const newErrors = { ...errors };

  if (email.trim() === '') {
    newErrors.email = 'Please enter your email.';
  } else if (!isValidEmail(email)) {
    newErrors.email = 'Please enter a valid email address.';
  } else {
    newErrors.email = '';
  }

  setErrors(newErrors);
};

export const validateField = (fieldName, formData, errors, setErrors) => {
  let valid = true;
  const fieldValue = formData[fieldName].trim();
  const newErrors = { ...errors };

  if (fieldValue === '') {
    newErrors[fieldName] = `Please enter your ${
      fieldName === 'name' ? 'full name' : fieldName
    }.`;
    valid = false;
  } else {
    newErrors[fieldName] = '';
  }

  setErrors(newErrors);
  return valid;
};
