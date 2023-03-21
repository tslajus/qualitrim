import { useState, useEffect, useRef, useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { motion } from "framer-motion";
import Button from "../Buttons/Button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function MessageForm({ CTA }: { CTA: string }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emptyFieldSubmitted, setEmptyFieldSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const { fadeIn } = useContext(PageContext);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSumbitEmpty = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setEmptyFieldSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setEmptyFieldSubmitted(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [formRef]);

  return (
    <motion.form
      {...fadeIn}
      onSubmit={handleSumbit}
      className="message-form"
      ref={formRef}
    >
      <input
        className={`message-form__element ${
          emptyFieldSubmitted ? "required-field" : ""
        }`}
        onChange={handleChange}
        value={formData.name}
        type="text"
        id="name"
        name="name"
        placeholder="NAME"
        required
      />

      <input
        className={`message-form__element ${
          emptyFieldSubmitted ? "required-field" : ""
        }`}
        onChange={handleChange}
        value={formData.email}
        type="email"
        id="email"
        name="email"
        placeholder="EMAIL"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        required
      ></input>

      <textarea
        className={`message-form__element ${
          emptyFieldSubmitted ? "required-field" : ""
        }`}
        onChange={handleChange}
        value={formData.message}
        id="message"
        name="message"
        placeholder={
          !formSubmitted
            ? "MESSAGE"
            : "Thanks for your message! We'll get back to you soon. Let us know if you have any more questions."
        }
        required
      ></textarea>

      <Button type="submit" onClick={handleSumbitEmpty}>
        {CTA}
      </Button>
    </motion.form>
  );
}

export default MessageForm;
