import { useState, useEffect, useRef } from "react";
import Button from "../Buttons/Button";

type Props = {
  CTA: string;
};

function MessageForm({ CTA }: Props) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emptyFieldSubmitted, setEmptyFieldSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleEmptyFields = () => {
    setEmptyFieldSubmitted(true);
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
    <form onSubmit={handleSumbit} className="message-form" ref={formRef}>
      <input
        className={`message-form__element ${
          emptyFieldSubmitted ? "required-field" : ""
        }`}
        type="text"
        id="name"
        name="name"
        placeholder="NAME"
        required
      ></input>

      <input
        className={`message-form__element ${
          emptyFieldSubmitted ? "required-field" : ""
        }`}
        type="email"
        id="email"
        name="email"
        placeholder="EMAIL"
        required
      ></input>

      <textarea
        className={`message-form__element ${
          emptyFieldSubmitted ? "required-field" : ""
        }`}
        id="message"
        name="message"
        placeholder="MESSAGE"
        required
      ></textarea>
      <Button type="submit" onClick={handleEmptyFields}>
        {CTA}
      </Button>
    </form>
  );
}

export default MessageForm;
