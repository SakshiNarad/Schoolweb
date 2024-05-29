

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
                contentContainer.innerHTML =  ` <div class="box-container"> 

                <div class="box box1"> 
                    <div class="text"> 
                        <h2 class="topic-heading">Classes</h2> 
                         
                    </div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="Views"> 
                </div> 

                <div class="box box2"> 
                    <div class="text"> 
                        <h2 class="topic-heading">Exams</h2> 
                        
                    </div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="likes"> 
                </div> 

                <div class="box box3"> 
                    <div class="text"> 
                        <h2 class="topic-heading">Books</h2> 
                       
                    </div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="comments"> 
                </div> 

                <div class="box box4"> 
                    <div class="text"> 
                        <h2 class="topic-heading">Teachers</h2> 
                       
                    </div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published"> 
                </div> 
            </div> 

            <div class="report-container"> 
                <div class="report-header"> 
                    <h1 class="recent-Articles">Recent Exams</h1> 
                    <button class="view">View All</button> 
                </div> 

                <div class="report-body"> 
                    <div class="report-topic-heading"> 
                        <h3 class="t-op">Exam Name</h3> 
                        <h3 class="t-op">Total Marks</h3> 
                        <h3 class="t-op">Obtained Marks</h3> 
                        <h3 class="t-op">Grade</h3> 
                    </div> 

                    <div class="items"> 
                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">English Tesr</h3> 
                            <h3 class="t-op-nextlvl">100</h3> 
                            <h3 class="t-op-nextlvl">80</h3> 
                            <h3 class="t-op-nextlvl label-tag">Distinction</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Hindi Test</h3> 
                            <h3 class="t-op-nextlvl">100</h3> 
                            <h3 class="t-op-nextlvl">70</h3> 
                            <h3 class="t-op-nextlvl label-tag">First Class</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Maths</h3> 
                            <h3 class="t-op-nextlvl">100</h3> 
                            <h3 class="t-op-nextlvl">90</h3> 
                            <h3 class="t-op-nextlvl label-tag">Distinction</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Science</h3> 
                            <h3 class="t-op-nextlvl">100</h3> 
                            <h3 class="t-op-nextlvl">70</h3> 
                            <h3 class="t-op-nextlvl label-tag">First Class</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Scocial Studies</h3> 
                            <h3 class="t-op-nextlvl">100</h3> 
                            <h3 class="t-op-nextlvl">60</h3> 
                            <h3 class="t-op-nextlvl label-tag">Second Class</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Volleyball Test</h3> 
                            <h3 class="t-op-nextlvl">500</h3> 
                            <h3 class="t-op-nextlvl">450</h3> 
                            <h3 class="t-op-nextlvl label-tag">Passed</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Music Comp</h3> 
                            <h3 class="t-op-nextlvl">500</h3> 
                            <h3 class="t-op-nextlvl">380</h3> 
                            <h3 class="t-op-nextlvl label-tag">Passed</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Dance Compitation</h3> 
                            <h3 class="t-op-nextlvl">1000</h3> 
                            <h3 class="t-op-nextlvl">200</h3> 
                            <h3 class="t-op-nextlvl label-tag">Fail</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Racing</h3> 
                            <h3 class="t-op-nextlvl">2000</h3> 
                            <h3 class="t-op-nextlvl">1500</h3> 
                            <h3 class="t-op-nextlvl label-tag">Passed</h3> 
                        </div> 

                    </div> 
                </div> 
            </div> 
        </div> 
    </div>  `;
                break;
            case 'about':
                // Load about us content
                contentContainer.innerHTML = `<div class="about">
                        <h2>Our School</h2>
                        <hr>
                        <div id="one">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio pariatur ratione amet, cum consequuntur commodi tenetur, tempore eos quas impedit eveniet corrupti dicta necessitatibus nam praesentium aliquam vero, soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam quam nesciunt. Quam cumque dolorem minus saepe eius nemo, aperiam iste veniam provident aspernatur. Saepe!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corrupti dolor, ratione nesciunt vel nemo distinctio natus laudantium doloribus et?<br><br>Vitae est saepe modi. Molestiae non, quia beatae voluptas distinctio minima earum quidem eligendi dignissimos neque! Voluptas, nemo! Iusto est fugit earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, inventore! Laboriosam inventore maxime, quisquam asperiores voluptatum, aut voluptates architecto ex consequatur fugit odio. Est ex temporibus itaque, molestiae perspiciatis eos in ducimus harum ut? Ducimus blanditiis fugit corrupti nemo, suscipit dignissimos aliquam earum. Officia eius dolores esse fuga quia porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facilis cumque doloremque, perspiciatis totam et esse accusamus velit quo quis! Laudantium explicabo necessitatibus tenetur natus nemo corrupti. Vero incidunt, voluptates repellendus fuga dolorem saepe perspiciatis nihil veniam, placeat explicabo laudantium voluptatibus quis illum earum. Quasi iusto labore quos! Dolorem, quo!</p>
                            <img src="/img/school.jpg" alt="" srcset="" >
                        </div>
                        <div id="two">
                            <img src="/img/Sclass.jpg" alt="" srcset="" >
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio pariatur ratione amet, cum consequuntur commodi tenetur, tempore eos quas impedit eveniet corrupti dicta necessitatibus nam praesentium aliquam vero, soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br><br>Vitae est saepe modi. Molestiae non, quia beatae voluptas distinctio minima earum quidem eligendi dignissimos neque! Voluptas, nemo! Iusto est fugit earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, inventore! Laboriosam inventore maxime, quisquam asperiores voluptatum, aut voluptates architecto ex consequatur fugit odio. Est ex temporibus itaque, molestiae perspiciatis eos in ducimus harum ut? Ducimus blanditiis fugit corrupti nemo, suscipit dignissimos aliquam earum. Officia eius dolores esse fuga quia porro.</p>
                        </div>
                        <div class="more">
                            <h2>School Facilities</h2>
                            <hr>
                            <div id="first">
                                <div class="first">
                                    <img src="/img/libraryf.png" alt="" srcset="">
                                    <div id="get"><h3>library</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem odit natus architecto necessitatibus aliquid, maxime nobis beatae quidem dolor obcaecati.</p>
                                    </div>
                                </div>
                                <div class="sec">
                                    <img src="/img/vanf.png" alt="" srcset="">
                                    <div id="let">
                                    <h3>Van Facility</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem odit natus architecto necessitatibus aliquid, maxime nobis beatae quidem dolor obcaecati.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="second">
                                <div class="first">
                                    <img src="/img/waterf.png" alt="" srcset="">
                                    <div id="get"><h3>Water facility</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem odit natus architecto necessitatibus aliquid, maxime nobis beatae quidem dolor obcaecati.</p>
                                    </div>
                                </div>
                                <div class="sec">
                                    <img src="/img/class.png" alt="" srcset="">
                                    <div id="let">
                                    <h3>Class </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem odit natus architecto necessitatibus aliquid, maxime nobis beatae quidem dolor obcaecati.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'contact':
                contentContainer.innerHTML =  `<center>
                <div class="contact-info">
                 
                  <p class="author">School</p>
                  
                  <p class="author">school06@gmail.com</p>
                    <p class="author"><a href="https://www.school.com" class="logo-name">On google</a></p>
                    <p class="author">Call on this Number for inquiry <br>
                      010-233-851
                    </p>
                </div>
              </center>
             
              <div class="contact-container">
                  <h1 class="h-primary center">Contact Us</h1>
                  <div id="contact-box">
                      <form action="">
                          <div class="form-group">
                              <label for="name">Name:</label>
                              <input type="text" name="name" id="name" placeholder="Enter Your Name">
                          </div>
                          <div class="form-group">
                              <label for="phone">Phone Number:</label>
                              <input type="phone" name="phone" id="phone" placeholder="Enter Your Phone Number">
                          </div>
                          <div class="form-group">
                              <label for="email">Email:</label>
                              <input type="email" name="email" id="email" placeholder="Enter Your Email">
                          </div>
                          <div class="form-group">
                              <label for="message">Message:</label>
                              <textarea name="message" id="message" cols="30" rows="10"></textarea>
                          </div>
                          <button>Submit</button>
                      </form>
                  </div>
              </div>`
              ;
                break;
            case 'attendance':
                contentContainer.innerHTML = `<div class="container">
                <h2>Attendance Record</h2>
                <div class="form-group">
                  <label for="date">Date:</label>
                  <input type="date" id="date">
                </div>
                <div class="form-group">
                  <label for="class">Class:</label>
                  <input type="text" id="class">
                </div>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" id="name">
                </div>
                <div class="form-group">
                  <button id="absentBtn">A</button>
                  <button id="presentBtn">P</button>
                </div>
              </div>`
              document.addEventListener('DOMContentLoaded', function() {
                const dateInput = document.getElementById('date');
                const classInput = document.getElementById('class');
                const nameInput = document.getElementById('name');
                const absentBtn = document.getElementById('absentBtn');
                const presentBtn = document.getElementById('presentBtn');
              
                absentBtn.addEventListener('click', function() {
                  alert('Absent marked');
                });
              
                presentBtn.addEventListener('click', function() {
                  alert('Present marked');
                });
                
              });
              
          
                
                break;
            case 'review':
                contentContainer.innerHTML = `<h1>Our Reviews</h1>
                <div class="review">
                   
                    <div class="custom-card">
                        <div class="img-box">
                            <img src="/img/pic1.jpg" >
                        </div>
                        <div class="custom-content">
                            <h2>Ricky Rao</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ab beatae, nisi quos non placeat. Cumque nisi quasi assumenda fuga asperiores, rerum dignissimos, sit distinctio ad molestiae fugit sed officiis voluptates expedita tenetur minima repellendus quia amet, unde corrupti. Optio ad molestiae praesentium nulla in sint temporibus nobis aut fugiat?</p>
                            <a href=" ">Read More</a>
                        </div>
                    </div>
                    <div class="custom-card">
                        <div class="img-box">
                            <img src="/img/pic2.jpg" >
                        </div>
                        <div class="custom-content">
                            <h2>John Butler</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ab beatae, nisi quos non placeat. Cumque nisi quasi assumenda fuga asperiores, rerum dignissimos, sit distinctio ad molestiae fugit sed officiis voluptates expedita tenetur minima repellendus quia amet, unde corrupti. Optio ad molestiae praesentium nulla in sint temporibus nobis aut fugiat?</p>
                            <a href=" ">Read More</a>
                        </div>
                    </div>
                    <div class="custom-card">
                        <div class="img-box">
                            <img src="/img/pic3.jpg" >
                        </div>
                        <div class="custom-content">
                            <h2>Perry Lady</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ab beatae, nisi quos non placeat. Cumque nisi quasi assumenda fuga asperiores, rerum dignissimos, sit distinctio ad molestiae fugit sed officiis voluptates expedita tenetur minima repellendus quia amet, unde corrupti. Optio ad molestiae praesentium nulla in sint temporibus nobis aut fugiat?</p>
                            <a href=" ">Read More</a>
                        </div>
                    </div>
                    <div class="custom-card">
                        <div class="img-box">
                            <img src="/img/pic1.jpg" >
                        </div>
                        <div class="custom-content">
                            <h2>Reno Pode</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ab beatae, nisi quos non placeat. Cumque nisi quasi assumenda fuga asperiores, rerum dignissimos, sit distinctio ad molestiae fugit sed officiis voluptates expedita tenetur minima repellendus quia amet, unde corrupti. Optio ad molestiae praesentium nulla in sint temporibus nobis aut fugiat?</p>
                            <a href=" ">Read More</a>
                        </div>
                    </div>
                    
                   
                </div>`;
            break;
            case 'query':
                contentContainer.innerHTML = `<h1> Query Section</h1>
                <button id="write-query-btn">Write Your Query</button>
                <button id="previous-queries-btn">Your Previous Queries</button>
            
                <div id="query-form" class="query-form">
                    <div class="form-container">
                        <label for="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required>
            
                        <label for="class">Class:</label>
                        <input type="text" id="class" name="class" required>
            
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
            
                        <button id="send-btn">Send</button>
                    </div>
                </div>
            
                <div id="previous-queries" class="previous-queries">
                    <div class="previous-query">
                        <h3>Query 1: Lorem Ipsum</h3>
                        <p>Query: Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                        <p>Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="previous-query">
                        <h3>Query 2: Dolor Sit Amet</h3>
                        <p>Query: Dolor sit amet, consectetur adipiscing elit?</p>
                        <p>Answer: Dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                </div>`
            
               
                    const writeQueryBtn = document.getElementById('write-query-btn');
                    const previousQueriesBtn = document.getElementById('previous-queries-btn');
                    const queryForm = document.getElementById('query-form');
                    const previousQueries = document.getElementById('previous-queries');
                    const sendBtn = document.getElementById('send-btn');
            
                    writeQueryBtn.addEventListener('click', () => {
                        queryForm.style.display = 'block';
                        previousQueries.style.display = 'none';
                    });
            
                    previousQueriesBtn.addEventListener('click', () => {
                        queryForm.style.display = 'none';
                        previousQueries.style.display = 'block';
                    });
            
                    sendBtn.addEventListener('click', () => {
                        alert('Query sent to teacher');
                        queryForm.style.display = 'none';
                    });
                break;
            default:
                contentContainer.innerHTML = '<h1>Welcome</h1><p>Please select an option from the menu.</p>';
        }
    };

    // Load the home content by default
    loadContent('home');
});









