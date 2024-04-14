const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_kzhil1e",
          "template_23kddoi",
          form.current,
          "ODGegIOk6W5LuZN6u"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
}
export default Contact;