var language = (navigator.language || navigator.userLanguage).substring(0, 2);
if (language != "ru" && language != "uk" && language != "by") {
    window.location.replace("./index.html");
}