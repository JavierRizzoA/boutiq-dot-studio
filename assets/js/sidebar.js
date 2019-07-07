var sections = [
  'welcome',
  'our-services',
  'why-choose-us',
  'portfolio',
  'get-to-know-us',
  'contact-us'
];

sections.reverse();

function handleSidebarScroll() {
  if(window.innerWidth >= 1250) {
    $('.sidebar').style.display = 'block';
    if($('.sidebar').offsetTop + window.scrollY > $('section.contact').offsetTop
      + $('section.contact').clientHeight - $('.sidebar').clientHeight) {
      $('.sidebar').style.display = 'none';
    }
  } else {
    $('.sidebar').style.display = 'none';
  }
  $$('.sidebar li').forEach(function(el) {
    el.classList.remove('active');
    if(el.parentElement.parentElement.offsetTop + el.offsetTop + window.scrollY
      > $('section.contact').offsetTop) {
      el.style.color = '#FFF';
    } else {
      if(el.classList.contains('blue')) {
        el.style.color = '#044FFF';
      } else {
        el.style.color = '#000';
      }
    }
  });

  var activated = false;
  sections.forEach(function(section) {
    if(!activated) {
      if(window.scrollY + 100 >= $('#' + section).offsetTop) {
        $('.' + section + '-link').classList.add('active');
        activated = true;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleSidebarScroll();
});

window.addEventListener('scroll', function() {
  handleSidebarScroll();
});
