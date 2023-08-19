import React, { useState, useRef } from "react";
import './Contact.css'
import emailjs from 'emailjs-com'
import ok from "../assets/ok.svg"
import './ApplicationForm.css'

export default function ApplicationForm() {

    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [university, setUniversity] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
          const reader = new FileReader();
          reader.onload = (event) => {
              setFile(event.target.result);
          };
          reader.readAsDataURL(selectedFile);
      }
    };

    const sendEmail = (e) => {
      e.preventDefault();

      // Replace these values with your own User ID, Service ID, and Template ID from EmailJS
      const emailJSUserId = "cnVadq1cGJ3a_h7zg";
      const serviceId = "service_hvg2hoa";
      const templateId = "template_gtxyr0g";
    
      // Set the email parameters using the states
      const emailParams = {
        to_email: email,
        from_name: fullname,
        message: message,
      };
    
      if (file) {
        emailParams.attachment = file;
      }

      // Send the email using the EmailJS API
      emailjs
        .send(serviceId, templateId, emailParams, emailJSUserId)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setIsEmailSent(true);
          // You can add a success message or perform any other actions here
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setIsEmailSent(false);
          // You can display an error message to the user if the email fails to send
        });
    }

    return (
      <div className="bg-[#F6F9FC] px-10 md:px-20 py-10">
        <div className="flex flex-col md:flex-row md:gap-x-8 justify-around items-center">
          <div className="hidden md:flex flex-col bg-white gap-y-5 drop-shadow-xl transform hover:scale-105 transition-transform duration-300 leftItem justify-start rounded-2xl px-10 py-20 md:basis-1/3">
            <p className="text-center font-alliance text-[#00A6B2] text-xl">What we are looking for:</p>
            <div className="flex flex-col gap-y-2">
              <p className="text-2xl font-alliance text-[#00A6B2]">Engineers:</p>
              <p className="font-alliance text-[#29363D]">Work on projects and leverage your technical skills to build products for your clients.</p>
              <p className="font-alliance text-[#29363D]">Profile:</p>
              <ul class="list-disc ml-10">
                <li className="font-alliance text-[#29363D]">Studying STEM degree</li>
                <li className="font-alliance text-[#29363D]">Internship / Placement Experience</li>
                <li className="font-alliance text-[#29363D]">Software Engineering / Data Analytics skills</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-2xl font-alliance text-[#00A6B2]">Project Managers:</p>
              <p className="font-alliance text-[#29363D]">Handle client relationships and ensure that we are achieving each project milostone.</p>
              <p className="font-alliance text-[#29363D]">Profile:</p>
              <ul class="list-disc ml-10">
                <li className="font-alliance text-[#29363D]">Studying STEM / Business degree</li>
                <li className="font-alliance text-[#29363D]">Internship / Placement Experience</li>
                <li className="font-alliance text-[#29363D]">Technical & Product Development skills</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-grow bg-white drop-shadow-xl rounded-2xl md:basis-2/3 gap-y-3 pl-10 pr-10 md:pr-20 py-10">
            {isEmailSent ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-5 md:gap-y-5">
                <img src={ok} height="50px" width="50px"/>
                <p className="text-xl font-alliance">Thank you for your email! We will be in touch soon!</p>
              </div>
            ) : (
              <>
                <div className="">
                  <p className="text-3xl font-sfprodisplay font-semibold py-2">Application Form</p>
                  <p className="text-gray-500 font-alliance">
                    Fill the information below and we will get back to you promptly!
                  </p>
                  <section class="bg-white">
                    <div class="py-5">
                      <form action="#" class="space-y-5">
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-alliance text-gray-900"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="fullname"
                            class="block mb-2 text-sm font-alliance text-gray-900"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="fullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Let us know your first and last name"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="fullname"
                            class="block mb-2 text-sm font-alliance text-gray-900"
                          >
                            University
                          </label>
                          <input
                            type="text"
                            id="university"
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}
                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Let us know where you are currently studying"
                            required
                          />
                        </div>
                        <label
                          for="fullname"
                          class="block mb-2 text-sm font-alliance text-gray-900"
                        >
                          Your CV:
                        </label>
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" onChange={handleFileChange}/>
                            </label>
                        </div> 

                        <button
                          type="submit"
                          onClick={sendEmail}
                          class="py-3 px-5 text-sm font-medium text-center text-white rounded-sm bg-[#DE4321] sm:w-fit hover:bg-[#DE4321] focus:ring-4 focus:outline-none focus:ring-primary-300"
                        >
                          Send message
                        </button>
                      </form>
                    </div>
                  </section>
                </div>
                
              </>
            )}
            
          </div>
        </div>
      </div>

    );
  }

  