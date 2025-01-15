const swiperEl = document.querySelector('swiper-container');

const params = {
    injectStyles: [`
        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            opacity: 1;
            background: rgba(0, 0, 0, 1);
            transition: background 0.3s ease;
        }
        .swiper-pagination-bullet-active {
            background: #007aff;
        }
    `],
    speed: 800, // Smooth transition between slides
    autoplay: {
        delay: 3000, // Delay between auto-slides (3 seconds)
        disableOnInteraction: false, // Keep autoplay running even after interaction
    },
    loop: true, // Enable infinite looping of slides
    pagination: {
        clickable: true, // Enable click on bullets
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
};

// Assign the parameters to the Swiper container
Object.assign(swiperEl, params);

// Initialize Swiper
swiperEl.initialize();

        $(document).ready(function () {
            $('.brand_slider').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                cssEase: 'linear',
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                swipeToSlide: true,
                centerMode: true,
                focusOnSelect: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });

    // list 

    const listItems = document.querySelectorAll('#service-list_hero li');

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            listItems.forEach(li => li.classList.remove('active'));
    
            // Add 'active' class to the clicked item
            this.classList.add('active');
    
            // Update dynamic content
            document.getElementById('dynamic-title').textContent = this.textContent.trim();
            document.getElementById('dynamic-content').textContent = this.getAttribute('data-content');
        });
    });
    
    
    const listItem = document.querySelectorAll('#service-list_cuts li');
    
    listItem.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            listItem.forEach(li => li.classList.remove('active_cuts'));
    
            // Add 'active' class to the clicked item
            this.classList.add('active_cuts');
    
            // Update dynamic content
            document.getElementById('dynamic-title_cuts').textContent = this.textContent.trim();
            document.getElementById('dynamic-content_cuts').textContent = this.getAttribute('data-content');
        });
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        const testimonials = document.querySelectorAll(".testimonial");
        const dots = document.querySelectorAll(".dots .dots_stand"); // Correct the selector
        let currentIndex = 0;
        let interval;
      
        function showTestimonial(index) {
          // Update testimonial visibility
          testimonials.forEach((testimonial, i) => {
            if (i === index) {
              testimonial.classList.add("active");
            } else {
              testimonial.classList.remove("active");
            }
          });
      
          // Update active dot
          dots.forEach((dot, i) => {
            if (i === index) {
              dot.classList.add("active");
              dot.style.backgroundColor = "#B88371"; // Highlight active dot
            } else {
              dot.classList.remove("active");
              dot.style.backgroundColor = "#937F78"; // Reset inactive dot color
            }
          });
      
          currentIndex = index;
        }
      
        function nextTestimonial() {
          currentIndex = (currentIndex + 1) % testimonials.length;
          showTestimonial(currentIndex);
        }
      
        // Set up interval for auto-sliding
        function startAutoSlide() {
          interval = setInterval(nextTestimonial, 5000);
        }
      
        // Stop auto-sliding
        function stopAutoSlide() {
          clearInterval(interval);
        }
      
        // Event listener for dot clicks
        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            stopAutoSlide(); // Stop auto-slide when user interacts
            showTestimonial(index);
            startAutoSlide(); // Restart auto-slide
          });
        });
      
        // Initialize
        showTestimonial(currentIndex);
        startAutoSlide();
      });
      