document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-option a');
    const logoutButton = document.getElementById('logout');
 
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const contentToLoad = link.getAttribute('data-content');
            loadContent(contentToLoad);
        });
    });

    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '/index.html'; // Redirect to the logout page
    });
    const loadContent = (content) => {
        const contentContainer = document.getElementById('content-container');

        // Clear previous content
        contentContainer.innerHTML = '';

        switch(content) {
            case 'home':
                contentContainer.innerHTML = ` <div class="container">
                <h1>Top Rated Institutions</h1>
            
                <div class="filter">
                    <label for="type">Filter by type:</label>
                    <select id="type">
                        <option value="all">All</option>
                        <option value="school">School</option>
                        <option value="college">College</option>
                        <option value="university">University</option>
                    </select>
                </div>
            
                <input type="text" id="search" placeholder="Search for institution...">
            
                <table id="institutionTable">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- Data will be populated dynamically -->
                    </tbody>
                </table>
            
              
            
                
            </div>`
            
        
                const institutions = [
                    { name: "Era international school", type: "school", rating: 4.5 },
                    { name: "Loya vidyalaya school", type: "school", rating: 4.8 },
                    { name: "Shining Stars", type: "school", rating: 4.9 },
                    { name: "Morning Roots School", type: "school", rating: 4.4 },
                    { name: "LOvely birds", type: "school", rating: 4.1 },
                    { name: " College of arts", type: "College", rating: 4.9},
                    { name: " College of nations", type: "College", rating: 4.3 },
                    { name: "College of Enginnnering ", type: "College", rating: 4.5 },
                    { name: " College of Archivers", type: "College", rating: 4.8},
                    { name: " College of Science", type: "College", rating: 4.7 },
                    { name: " meerut University", type: "University", rating: 4.4 },
                    { name: " Nagpur University", type: "University", rating: 4.3 },
                    { name: "Amaravati university", type: "University", rating: 4.1 },
                    { name: "National University", type: "University", rating: 4 },
                    { name: "Radhe University ", type: "University", rating: 4.7 },
                    

                    

                    
                   
                   
                    
                ];
            
                const institutionTable = document.getElementById('institutionTable');
                const typeFilter = document.getElementById('type');
                const searchInput = document.getElementById('search');
                
            
                
                renderTable(institutions);
            
                
                typeFilter.addEventListener('change', filterInstitutions);
                searchInput.addEventListener('input', filterInstitutions);
            
                function renderTable(data) {
                    const tbody = institutionTable.querySelector('tbody');
                    tbody.innerHTML = '';
                    data.forEach(institution => {
                        const row = `<tr>
                                        <td>${institution.name}</td>
                                        <td>${institution.type}</td>
                                        <td>${institution.rating}</td>
                                    </tr>`;
                        tbody.innerHTML += row;
                    });
                }
            
                function filterInstitutions() {
                    const type = typeFilter.value;
                    const searchTerm = searchInput.value.toLowerCase();
            
                    const filteredData = institutions.filter(institution => {
                        const nameMatches = institution.name.toLowerCase().includes(searchTerm);
                        const typeMatches = (type === 'all' || institution.type === type);
                        return nameMatches && typeMatches;
                    });
            
                    renderTable(filteredData);
                }
            
                
                break;
                case 'support':
                contentContainer.innerHTML = `<div class="support">
                <h1>Support Section</h1>
                <div class="support-form">
                    <h2>Inquiry Here</h2>
                    <p>We are always here to help you.</p>
                    <form id="supportForm">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>`
            document.getElementById('supportForm').addEventListener('submit', function(event) {
                event.preventDefault();
                // Assuming form validation is done here
                alert('Form submitted successfully!');
                // Clear form fields after submission
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            });
            
        break;
            default:
                contentContainer.innerHTML = '<h1>Welcome</h1><p>Please select an option from the menu.</p>';
               
        }
    };

     // Load the home content by default
     loadContent('home');
    });