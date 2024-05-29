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
                contentContainer.innerHTML =  `            <div class="box-container"> 

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
                        <h2 class="topic-heading">Activities</h2> 
                        
                    </div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="comments"> 
                </div> 

                <div class="box box4"> 
                    <div class="text"> 
                        <h2 class="topic-heading">Assesments</h2> 
                      
                    </div> 
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published"> 
                </div> 
            </div> 

            <div class="report-container"> 
                <div class="report-header"> 
                    <h1 class="recent-Articles">Recent Results Of My Classes</h1> 
                    <button class="view">View All</button> 
                </div> 

                <div class="report-body"> 
                    <div class="report-topic-heading"> 
                        <h3 class="t-op">Class</h3> 
                        <h3 class="t-op">Total Students</h3> 
                        <h3 class="t-op">Passed</h3> 
                        <h3 class="t-op">Passing Percentage</h3> 
                    </div> 

                    
                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Class 4</h3> 
                            <h3 class="t-op-nextlvl">750</h3> 
                            <h3 class="t-op-nextlvl">550</h3> 
                            <h3 class="t-op-nextlvl label-tag">85%</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Class 5</h3> 
                            <h3 class="t-op-nextlvl">1800</h3> 
                            <h3 class="t-op-nextlvl">1700</h3> 
                            <h3 class="t-op-nextlvl label-tag">90%</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Class 6</h3> 
                            <h3 class="t-op-nextlvl">2000</h3> 
                            <h3 class="t-op-nextlvl">1900</h3> 
                            <h3 class="t-op-nextlvl label-tag">95%</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Class 7</h3> 
                            <h3 class="t-op-nextlvl">1.2k</h3> 
                            <h3 class="t-op-nextlvl">580</h3> 
                            <h3 class="t-op-nextlvl label-tag">70%</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Class 8</h3> 
                            <h3 class="t-op-nextlvl">2200</h3> 
                            <h3 class="t-op-nextlvl">1800</h3> 
                            <h3 class="t-op-nextlvl label-tag">80%</h3> 
                        </div> 

                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Class 9</h3> 
                            <h3 class="t-op-nextlvl">2000</h3> 
                            <h3 class="t-op-nextlvl">1500</h3> 
                            <h3 class="t-op-nextlvl label-tag">75%</h3> 
                        </div> 
                        <div class="item1"> 
                            <h3 class="t-op-nextlvl">Class 10</h3> 
                            <h3 class="t-op-nextlvl">1000</h3> 
                            <h3 class="t-op-nextlvl">1000</h3> 
                            <h3 class="t-op-nextlvl label-tag">100%</h3> 
                        </div> 

                    </div> 
                </div> 
            </div> 
        </div> 
    </div> `;
                break;
            case 'about':
                // Load about us content
                contentContainer.innerHTML = `
                    <div class="about">
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
                contentContainer.innerHTML = `<h2> Today's My Classes Attendance Record</h2>
                <table id="attendanceTable">
                  <tr>
                    <th>Class</th>
                    <th>Total Students</th>
                    <th>Present Students</th>
                    <th>Absent Students</th>
                  </tr>
                  ${generateRows()}
                </table>
                `;
                
                function generateRows() {
                    const students = [
                        {  class: 4, total: 55, present: 45, absent: 10 },
                        {  class: 5, total: 60, present: 50, absent: 10 },
                        {  class: 6, total: 55, present: 52, absent: 3 },
                        {  class: 7, total: 70, present: 65, absent: 5 },
                        {  class: 8, total: 50, present: 44, absent: 6 },
                        {  class: 9, total: 90, present: 79, absent: 11 },
                        {  class: 10, total: 80, present: 76, absent: 4 },
                       
                        
                    ];
                
                    let rowsHtml = "";
                    students.forEach(student => {
                        rowsHtml += `
                        <tr>
                            
                            <td>${student.class}</td>
                            <td>${student.total}</td>
                            <td>${student.present}</td>
                            <td>${student.absent}</td>
                        </tr>
                        `;
                    });
                    return rowsHtml;
                }
                
                document.body.innerHTML = htmlContent;
                ;
        
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
                    <div class="custom-card">
                        <div class="img-box">
                            <img src="/img/pic2.jpg" >
                        </div>
                        <div class="custom-content">
                            <h2>Jack Deo</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ab beatae, nisi quos non placeat. Cumque nisi quasi assumenda fuga asperiores, rerum dignissimos, sit distinctio ad molestiae fugit sed officiis voluptates expedita tenetur minima repellendus quia amet, unde corrupti. Optio ad molestiae praesentium nulla in sint temporibus nobis aut fugiat?</p>
                            <a href=" ">Read More</a>
                        </div>
                    </div>
                    <div class="custom-card">
                        <div class="img-box">
                            <img src="/img/pic3.jpg" >
                        </div>
                        <div class="custom-content">
                            <h2>Jolly Ben </h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ab beatae, nisi quos non placeat. Cumque nisi quasi assumenda fuga asperiores, rerum dignissimos, sit distinctio ad molestiae fugit sed officiis voluptates expedita tenetur minima repellendus quia amet, unde corrupti. Optio ad molestiae praesentium nulla in sint temporibus nobis aut fugiat?</p>
                            <a href=" ">Read More</a>
                        </div>
                    </div>
                   
                </div>`;
                break;
            case 'query':
                contentContainer.innerHTML =`<div id="container" class="query"></div>`

                
                    const students = [
                        { name: 'John Doe', query: 'What is the syllabus for the upcoming exam?' },
                        { name: 'Jane Smith', query: 'How can I improve my essay writing skills?' },
                        { name: 'Alex Johnson', query: 'When will the project submission deadline be announced?' },
                        { name: 'Emily Davis', query: 'Can we get additional resources for the programming assignment?' },
                        { name: 'Michael Brown', query: 'Are there any extra credit opportunities this semester?' }
                    ];
            
                    const container = document.getElementById('container');
                    let innerHTML = '';
            
                    students.forEach(student => {
                        innerHTML += `
                            <div class="square">
                                <h2>${student.name}</h2>
                                <p>${student.query}</p>
                                <button class="btn-reply">Reply</button>
                                <div class="reply-form">
                                    <label for="answer-${student.name}">Write your answer:</label>
                                    <input type="text" id="answer-${student.name}" name="answer" style="width: 100%; margin-top: 5px; padding: 8px;">
                                    <button class="btn-send">Send</button>
                                </div>
                            </div>
                        `;
                    });
            
                    container.innerHTML = innerHTML;
            
                    container.addEventListener('click', function(event) {
                        if (event.target.classList.contains('btn-reply')) {
                            const replyForm = event.target.nextElementSibling;
                            replyForm.style.display = replyForm.style.display === 'none' || replyForm.style.display === '' ? 'block' : 'none';
                        }
            
                        if (event.target.classList.contains('btn-send')) {
                            alert('Reply sent successfully');
                            const replyForm = event.target.closest('.reply-form');
                            replyForm.style.display = 'none';
                        }
                    });
                break;
            
            default:
                contentContainer.innerHTML = '<h1>Welcome</h1><p>Please select an option from the menu.</p>';
        }
    };
    

    // Load the home content by default
    loadContent('home');
});
