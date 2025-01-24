import React, { useState } from 'react';

const MultiStepForm = () => {
      const [step, setStep] = useState(1);
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const validateStep = () => {
            switch (step) {
                  case 1:
                        return formData.name.length > 2;
                  case 2:
                        return /\S+@\S+\.\S+/.test(formData.email);
                  case 3:
                        return formData.password.length >= 8;
                  default:
                        return false;
            }
      };

      const nextStep = () => {
            if (validateStep()) {
                  setStep((prev) => Math.min(prev + 1, 4));
            } else {
                  alert('Please fill in valid information');
            }
      };

      const submitForm = () => {
            if (validateStep()) {
                  console.log('Form submitted:', formData);
                  alert('Form submitted successfully!');
            }
      };

      return (
            <div className="space-y-4">
                  {step === 1 && (
                        <div>
                              <h2>Personal Information</h2>
                              <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="border rounded p-2 w-full"
                              />
                        </div>
                  )}
                  {step === 2 && (
                        <div>
                              <h2>Contact Details</h2>
                              <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    type="email"
                                    className="border rounded p-2 w-full"
                              />
                        </div>
                  )}
                  {step === 3 && (
                        <div>
                              <h2>Security</h2>
                              <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Your Password"
                                    type="password"
                                    className="border rounded p-2 w-full"
                              />
                        </div>
                  )}
                  {step === 4 && (
                        <div>
                              <h2>Confirmation</h2>
                              <p>Name: {formData.name}</p>
                              <p>Email: {formData.email}</p>
                              <p>Password: {'*'.repeat(formData.password.length)}</p>
                        </div>
                  )}
                  <div className="flex justify-between">
                        {step > 1 && (
                              <button
                                    onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                                    className="bg-gray-300 px-4 py-2 rounded"
                              >
                                    Previous
                              </button>
                        )}
                        {step < 4 ? (
                              <button
                                    onClick={nextStep}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                              >
                                    Next
                              </button>
                        ) : (
                              <button
                                    onClick={submitForm}
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                              >
                                    Submit
                              </button>
                        )}
                  </div>
            </div>
      );
};

export default MultiStepForm;