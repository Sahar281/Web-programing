<?php
$servername = "localhost";
$username = "isbarma2";
$password = "triSW9_Plm";
$dbname = "isbarma2_Drushim";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set character set to utf8
$conn->set_charset("utf8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $job_title = $_POST["job-title"];
    $job_description = $_POST["job-description"];
    $job_location = $_POST["job-location"];
    $job_type = $_POST["job-type"];
    $company_name = $_POST["company-name"];
    $job_requirements = $_POST["job-requirements"];
    $salary_range = $_POST["salary-range"];

    $sql = "INSERT INTO job (job_title, job_description, job_location, job_type, company_name, job_requirements, salary_range)
            VALUES ('$job_title', '$job_description', '$job_location', '$job_type', '$company_name', '$job_requirements', '$salary_range')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to thank you page
        header("Location: thank_you.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
