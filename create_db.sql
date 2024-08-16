CREATE TABLE IF NOT EXISTS job (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(255) NOT NULL,
    job_description TEXT NOT NULL,
    job_location VARCHAR(255) NOT NULL,
    job_type VARCHAR(50) NOT NULL
    company_name VARCHAR(50) NOT NULL
    job_requirements TEXT NOT NULL,
    salary_range VARCHAR(255) NOT NULL,
) CHARACTER SET utf8 COLLATE utf8_general_ci;
