<?php
$servername = "localhost";
$username = "isbarma2";
$password = "triSW9_Plm";
$dbname = "isbarma2_Drushim";

$conn = new mysqli($servername, $username, $password, $dbname);

// בדיקת חיבור
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// שאילתת SQL לקריאת נתונים מטבלת job
$sql = "SELECT job_title, job_description, job_location, job_type, company_name, job_requirements, salary_range FROM job";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $jobs = array();
    while($row = $result->fetch_assoc()) {
        $jobs[] = $row; // הוספת כל שורה כאובייקט למערך $jobs
    }
    echo json_encode($jobs); // החזרת המערך כ JSON
} else {
    echo json_encode(array()); // אם אין תוצאות, החזרת מערך JSON ריק
}

$conn->close();
?>
