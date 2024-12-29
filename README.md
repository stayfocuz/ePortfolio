# ePortfolio - Boys Edition

Welcome to the **ePortfolio - Boys Edition** repository! This project demonstrates a complete HTML, CSS, and JavaScript-powered portfolio website with sections for showcasing personal details, projects, and a contact form.

## Features

- **Responsive Design**: Built with Bootstrap 4 for mobile-friendly responsiveness.
- **Home Section**: Features a profile picture and introduction text.
- **About Section**: Highlights skills, interests, and background.
- **Projects Section**: Includes a carousel showcasing three projects with links to their GitHub repositories.
- **Contact Form**: Enables visitors to reach out via a Formspree form.
- **Modal Example**: Demonstrates modal functionality for enhanced interactivity.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Folder Structure](#folder-structure)
4. [Code Explanation](#code-explanation)
5. [Contributing](#contributing)
6. [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eportfolio-boys-edition.git
   ```
2. Navigate to the project directory:
   ```bash
   cd eportfolio-boys-edition
   ```
3. Open the `index.html` file in your browser.

## Usage

### Dependencies
This project uses external libraries and frameworks:
- **Bootstrap 4**: For responsive design and components.
- **jQuery**: Required for Bootstrap's JavaScript components.
- **Popper.js**: Used for tooltips and popovers.

### Viewing the Portfolio
Open `index.html` in any modern web browser. Navigate through the website to explore sections like Home, About, Projects, and Contact.

### Contact Form
Replace `YOUR_FORM_ID` in the `<form>` action attribute with your Formspree endpoint to enable form submissions.

## Folder Structure

```
├── index.html       # Main HTML file
├── style.css        # Custom styles
├── script.js        # Custom JavaScript
├── assets/          # Folder for images (e.g., profile picture, project screenshots)
│   ├── profile.jpg
│   ├── project1.JPG
│   ├── project2.jpeg
│   └── project3.jpeg
```

## Code Explanation

### HTML
- Uses semantic tags (e.g., `<header>`, `<main>`, `<section>`, `<footer>`).
- Implements a Bootstrap carousel for the Projects section.
- Includes a modal as an interactive example.

### CSS
- Custom styles enhance the aesthetics, including rounded profile images and project thumbnails.
- Light background for carousel captions improves readability.

### JavaScript
- Handles modal display.
- Configures carousel auto-sliding.
- Validates contact form inputs to ensure required fields and proper email formatting.

## Contributing

Contributions are welcome! If you would like to improve the project, please:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for visiting my ePortfolio project! Feel free to explore and modify it for your own use.
