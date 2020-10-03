<!DOCTYPE html>

<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];

  $to = "james.phelps1995@live.com";

  $body = "";

  $body .= "From: ".$name. "\r\n";
  $body .= "Email: ".$visitor_email. "\r\n";
  $body .= "Message ".$message. "\r\n";

  mail($to,$subject,$body);

?>

<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/styles.css">
  <!-- google fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Baskervville&family=Nunito:wght@300;400;700&display=swap" rel="stylesheet">
  <title>Lindsey's Beauty Salon</title>
</head>

<body>
  <div class="hamburger-navs">
    <ul>
      <li><a href="index.html" class="active">Home</a></li>
      <li><a href="location.html">Location</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>
  <div class="header-main">
    <div class="title">
      <a href="index.html" class="logo">L . Beauty Salon</a>
      <img src="img/menu-icon.svg" class="menu-icon">
      <nav>
        <ul>
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="location.html">Location</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <header>
    <div class="container">
      <div class="hero-content">
        <h1>Booking</h1>
        <div>
          <p class="booking-hero">Please fill out the form to book a place at the Beauty Room or simply call 07951579333. Or Email: lindsey@lindseysbeautyroom.co.uk</p><br />
        </div>
      </div>
    </div>
  </header>
  <main class="booking-bg">

    <form action="mailto:james.phelps1995@live.com" method="post">
      <li>
        <label for="name">Full Name:</label>
        <input type="text" name="name">
      </li>
      <li>
        <label for="email">Email:</label>
        <input type="email" name="email">
      </li>
      <li>
        <label for="subject">Treatment(s):</label>
        <select id="treatment" name="subject">
          <option value="" disabled selected>Select your option</option>
          <option value="Waxing">Waxing</option>
          <option value="Tanning">Tanning</option>
          <option value="Lashes & Brows">Lashes & Brows</option>
          <option value="Body Treatments">Body Treatments</option>
          <option value="Derminological">Derminological</option>
          <option value="Manicure">Manicure</option>
        </select>
      </li>
      <li>
        <label for="message">Message:</label>
        <textarea placeholder="Please say if you want multiple treatments in here, as well as any other information" name="message"></textarea>
      </li>
      <input class="form-btn" type="submit" value="Send">
    </form>

  </main>
  <footer>
    <div class="footer-container">
      <div class="logo">Lindsey's Beauty Salon</div>
      <div class="footer-links">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Location</a></li>
        </ul>
      </div>
      <div class="hash-footer-links">
        <ul>
          <li><a href="">Waxes</a></li>
          <li><a href="">Spray Tan</a></li>
          <li><a href="">Lashes & Brows</a></li>
          <li><a href="">Body Treatments</a></li>
          <li><a href="">Derminological</a></li>
          <li><a href="">Hands & Feet</a></li>
        </ul>
      </div>
      <div class="footer-contacts">
        <ul>
          <li><a href="">FaceBook</a></li>
          <li><a href="">01789 740663</a></li>
          <li><a href="">07951579333</a></li>
        </ul>
      </div>
      <div class="misc-footer">
        <p>© 2020 Lindsey’s Beauty Salon </p>
        <p>Made by James Phelps</p>
      </div>
    </div>
  </footer>

  <script src="js/booking.js"></script>
</body>

</html>
