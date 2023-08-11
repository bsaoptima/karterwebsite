import React, { useState, useRef } from "react";
import './Contact.css'
import emailjs from 'emailjs-com'
import ok from "../assets/ok.svg"

export default function ContactPage() {

    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [message, setMessage] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);

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
      <div className="bg-[#F1F1F1] px-10 md:px-20 py-10">
        <div className="flex flex-col md:flex-row rounded items-center bg-white">
          <div className="hidden md:flex flex-col contactItem2 h-[600px] items-stretch md:basis-1/3">
            {/* Content of the first element goes here */}
          </div>
          <div className="flex flex-col flex-grow md:basis-2/3 gap-y-3 pl-10 pr-10 md:pr-20 md:py-0 py-10">
            {isEmailSent ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-5 md:gap-y-5">
                <img src={ok} height="50px" width="50px"/>
                <p className="text-xl font-alliance">Thank you for your email! We will be in touch soon!</p>
              </div>
            ) : (
              <>
                <div className="">
                  <p className="text-3xl font-alliance font-bold">Get in touch</p>
                  <p className="text-gray-500 font-alliance">
                    Our team will get back in less than 2 hours!
                  </p>
                  <section class="bg-white">
                    <div class="py-5">
                      <form action="#" class="space-y-8">
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
                        <div class="sm:col-span-2">
                          <label
                            for="message"
                            class="block mb-2 text-sm font-alliance text-gray-900"
                          >
                            Your message
                          </label>
                          <textarea
                            id="message"
                            rows="6"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a comment..."
                          ></textarea>
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

  