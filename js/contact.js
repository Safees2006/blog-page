// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {


    contactForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            // =========================
            // GET VALUES
            // =========================

            const name =
                document.getElementById("name")
                    .value.trim();


            const email =
                document.getElementById("email")
                    .value.trim();


            const subject =
                document.getElementById("subject")
                    .value.trim();


            const message =
                document.getElementById("message")
                    .value.trim();


            // =========================
            // ERROR ELEMENTS
            // =========================

            const nameError =
                document.getElementById("nameError");


            const emailError =
                document.getElementById("emailError");


            const subjectError =
                document.getElementById("subjectError");


            const messageError =
                document.getElementById("messageError");


            const successMessage =
                document.getElementById(
                    "successMessage"
                );


            // =========================
            // CLEAR OLD ERRORS
            // =========================

            nameError.textContent = "";

            emailError.textContent = "";

            subjectError.textContent = "";

            messageError.textContent = "";

            successMessage.textContent = "";


            let isValid = true;


            // =========================
            // NAME VALIDATION
            // =========================

            if (name === "") {

                nameError.textContent =
                    "Name is required.";

                isValid = false;

            }


            // =========================
            // EMAIL VALIDATION
            // =========================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                emailError.textContent =
                    "Email is required.";

                isValid = false;

            }

            else if (
                !emailPattern.test(email)
            ) {

                emailError.textContent =
                    "Please enter a valid email.";

                isValid = false;

            }


            // =========================
            // SUBJECT VALIDATION
            // =========================

            if (subject === "") {

                subjectError.textContent =
                    "Subject is required.";

                isValid = false;

            }


            // =========================
            // MESSAGE VALIDATION
            // =========================

            if (message === "") {

                messageError.textContent =
                    "Message is required.";

                isValid = false;

            }


            // =========================
            // SUCCESS
            // =========================

            if (isValid) {

                successMessage.textContent =
                    "Your message has been sent successfully!";

                contactForm.reset();

            }

        }
    );

}