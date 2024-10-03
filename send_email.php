<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "We are here"
    $name = $_POST['firstname']; // Make sure the name matches your HTML form
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "info@de-opportunities.kz";
    $subject = "Новое сообщение с контактной формы";
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";

    // Use mail function in PHP
    if (mail($to, $subject, $body)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Ошибка отправки сообщения.";
    }
}
?>