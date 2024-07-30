
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form.SurveyPage");
        const submitButton = document.querySelector(".SurveyPage-Button");
        const image = document.createElement("img");

        image.src = "../img/galery.png"; // Укажите здесь URL вашей картинки
        image.style.display = "none"; // Скрываем картинку по умолчанию
        image.id = "success-image"; // Присваиваем ID для картинки

        form.parentElement.appendChild(image); // Добавляем картинку после формы

        submitButton.addEventListener("click", function(event) {
            event.preventDefault(); // Предотвращаем отправку формы

            // Здесь можно добавить логику проверки формы и отправки данных, если нужно

            form.style.display = "none"; // Скрываем форму
            image.style.display = "block"; // Показываем картинку
        });
    });
