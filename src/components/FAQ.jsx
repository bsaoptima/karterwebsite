import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";

export const TabsFAQ = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className="overflow-hidden px-4">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

const Heading = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="mb-5 text-lg lg:text-xl text-center font-alliance font-semibold text-[#00A6B2]">Let's answer some questions</p>
        <p className="font-alliance mb-8 text-4xl md:text-6xl font-semibold md:px-80 text-center">Commonly Asked Questions</p>
      </div>
    </>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-[#02BECC] text-slate-50"
              : "border-slate-600 bg-transparent text-slate-400"
          }`}
          key={tab}
        >
          <span className="relative z-10">{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "backIn",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-[#00A6B2] to-[#02BECC]"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <AnimatePresence mode="wait">
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
        open ? "bg-slate-800" : "bg-slate-900"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-4"
      >
        <span
          className={`text-left text-lg font-medium transition-colors ${
            open ? "text-slate-50" : "text-slate-400"
          }`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: {
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl transition-colors ${
              open ? "text-slate-50" : "text-slate-400"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-400"
      >
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const TABS = ["General", "Tech Services", "Recruiting"];

const QUESTIONS = {
  "General": [
    {
      question: "What is Karter?",
      answer:
      "Karter is a company that helps businesses hire part-time top student developers from UK universities. We also provide services and build products for start-ups."
    },
    {
      question: "What type of services are you offering?",
      answer:
        "Our main activity is to build MVPs for start-ups, we also assist them into hiring students to join their teams.",
    },
    {
      question: "Why would I hire students?",
      answer:
        "Starting a company is very risky and it has become way too expensive to build an MVP for an idea that might not work. As a founder you need to work fast, test many ideas and be able to pivot. Our students are going to join big tech companies and become tomorrow's industry leaders. You get access to top talent while it's undervalued which will save you a ton of money.",
    },
    {
      question: "How many clients have you helped?",
      answer:
        "We have helped 8 founders and business owners through 10 project the past year. We have built web apps, internal software and data pipelines.",
    },
    {
      question: "Can I hire students from Karter?",
      answer:
        "Yes of course! Our expertise in finding talent amongst students allows us to provide only the best for our clients. We can fill all your requirements as our talent pool is immense.",
    },
  ],
  "Tech Services": [
    {
      question: "What are your areas of experise?",
      answer:
        "Thanks to our talent pool, we can cover many areas. That being said, our expertise lies in: Web & Mobile applications, Data Engineering & Analysis, Automations.",
    },
    {
      question: "What are the steps to get started?",
      answer:
        "1) You reach out to us and explain what you are looking to achieve. 2) We form a team and come up with a proposal and a quote. 3) We start working. 4) You are now happy.",
    },
    {
      question: "How does Karter always deliver top quality?",
      answer:
        "We open accessible communication channels with our clients in order to continuously capture feedback and requests to implement in real-time. For UI/UX, we have access to premium component libraries to deliver top designs in all projects. Each product we build is put to the test and since our code is robust and reliable, you won't have to worry about it breaking down.",
    },
    {
      question: "What about price/costs?",
      answer:
        "We have a fixed hourly rate for our developers based on their skillset (software, data or automation). We will ask for your budget, only to tailor our solution and make sure we can fit as many features as possible while remaining cost effective.",
    },
    {
      question: "How is Karter better for start-ups than other agencies?",
      answer:
        "You get to work with students. This means that you will work with talent that has an incredible drive to produce and overdeliver while saving a lot of money. Other agency can't scale and will do everything to inflate project price & duration. We don't need to do that.",
    },
  ],
  "Recruiting": [
    {
      question: "Who is the perfect client for this service?",
      answer:
        "Our recruiting services are perfect for young start-ups looking to get started without having to spend a lot of capital. We have a network of top performers that you can leverage to build your companies.",
    },
    {
      question: "How do you find these students?",
      answer:
        "We have close relationships with UK universities and student societies which allow us to get a steady stream of talent flowing in Karter. We interview and thoroughly review each candidate and only hire the top 5% that have proven experiences (internships, placements, etc.).",
    },
    {
      question: "Is there an advantage to targeting specific universities?",
      answer:
        "Each university is unique and you can map their specialities on their students. Some have better developers and some have better designers. We help you navigate through all of this in order to form the best team possible for your business.",
    },
    {
      question: "Does it make sense for my company?",
      answer:
        "Hiring through Karter means that you get access to top talent in just a few clicks that can work remotely and that will be dedicated to your company. Thanks to our structure, you do not have to take massive legal commitments and can re-allocate talent as you wish whenever you want.",
    },
  ],
};