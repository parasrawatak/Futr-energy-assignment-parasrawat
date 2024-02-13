const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.keywords.trim()) {
      errors.keywords = "Keywords are required";
    }
  
    if (!formData.duration.trim() || isNaN(formData.duration) || formData.duration <=0) {
      errors.duration = "Invalid duration";
    }
  
    if (!formData.category1.trim() && !formData.category2.trim()) {
      errors.category1 = "At least one category is required";
      errors.category2 = "At least one category is required";
    }

    const currentDate = new Date();
    const selectedDate = new Date(formData.date);
    if (!formData.date.trim() || isNaN(selectedDate) || selectedDate <= currentDate) {
      errors.date = "Invalid date or should be greater than the current date";
    }
  
    
    if (!formData.minPrice.trim() || isNaN(formData.minPrice) && formData.minPrice>=0) {
      errors.minPrice = "Min price should be greater than zero!";
    }
  
   
    if (formData.maxPrice.trim() && (isNaN(formData.maxPrice) || formData.maxPrice <= 0 && formData.maxPrice>=formData.minPrice)) {
      errors.maxPrice = "Max price should be greater than min price!";
    }
  
    return errors;
  };
  
  export default validateForm;
  