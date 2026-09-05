import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Please fill out all fields before sending.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        'service_6xuklrf',
        '7tpIKYn0imszCa0Ok',
        {
          from_name: form.name,
          to_name: "Mihir Bari",
          from_email: form.email,
          to_email: "barimihir23@gmail.com",
          message: form.message,
        },
        '7tpIKYn0imszCa0Ok'
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus({
            type: "error",
            message: "Something went wrong while sending. Please email me directly at barimihir23@gmail.com",
          });
        }
      );
  };

  return (
    <div
      className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#100d25]/85 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-glass'
      >
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00f0ff] mb-2'>
          <span>Let's Collaborate</span>
        </div>
        <h3 className={styles.sectionHeadText}>Get In Touch.</h3>
        <p className='mt-2 text-secondary text-sm'>
          Interested in discussing Model Context Protocol integrations, AI agent architectures,
          or full-stack engineering opportunities? Drop me a message below.
        </p>

        {status && (
          <div
            className={`mt-6 p-4 rounded-xl text-sm font-medium border flex items-center gap-3 ${
              status.type === "success"
                ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                : "bg-rose-950/40 border-rose-500/40 text-rose-300"
            }`}
          >
            <span>{status.type === "success" ? "✓" : "⚠"}</span>
            <span>{status.message}</span>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium text-sm mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Alex Johnson"
              className='bg-[#151030]/80 py-3.5 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] focus:shadow-[0_0_15px_rgba(145,94,255,0.3)] transition-all font-medium text-sm'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium text-sm mb-2'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. alex@company.com"
              className='bg-[#151030]/80 py-3.5 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] focus:shadow-[0_0_15px_rgba(145,94,255,0.3)] transition-all font-medium text-sm'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium text-sm mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, ideas, or opportunities..."
              className='bg-[#151030]/80 py-3.5 px-5 placeholder:text-secondary/60 text-white rounded-xl outline-none border border-white/10 focus:border-[#915EFF] focus:shadow-[0_0_15px_rgba(145,94,255,0.3)] transition-all font-medium text-sm resize-none'
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#915EFF] to-[#7000ff] hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] transition-all duration-300 disabled:opacity-50'
          >
            {loading ? "Sending Message..." : "Send Message 🚀"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
