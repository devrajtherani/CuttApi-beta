function toggleLightMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const h1 = document.querySelector('h1');
    const main = document.querySelector('main');
    const sections = document.querySelectorAll('section');
    const h2 = document.querySelectorAll('h2');
    const p = document.querySelectorAll('p');
    const code = document.querySelectorAll('code');
    const pre = document.querySelectorAll('pre');
    const ul = document.querySelectorAll('ul');
    const footer = document.querySelector('footer');
    const a = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('.copy-button');
    const beta = document.querySelector('.fa-flask');
    const toggle = document.querySelector('.toggle-button');
    const toggle1 = document.querySelector('.toggle-button-icon');
  
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    h1.classList.toggle('light-mode');
    main.classList.toggle('light-mode');
    sections.forEach((section) => section.classList.toggle('light-mode'));
    h2.forEach((heading) => heading.classList.toggle('light-mode'));
    p.forEach((paragraph) => paragraph.classList.toggle('light-mode'));
    code.forEach((codeBlock) => codeBlock.classList.toggle('light-mode'));
    pre.forEach((preBlock) => preBlock.classList.toggle('light-mode'));
    ul.forEach((list) => list.classList.toggle('light-mode'));
    footer.classList.toggle('light-mode');
    a.forEach((link) => link.classList.toggle('light-mode'));
    buttons.forEach((button) => button.classList.toggle('light-mode'));
    beta.classList.toggle('light-mode');
    toggle.classList.toggle('light-mode');
    toggle1.classList.toggle('light-mode');
  }

  function copyCode(codeId) {
    const codeBlock = document.getElementById(codeId);
    const textarea = document.createElement('textarea');
    textarea.value = codeBlock.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    const copyButton = document.querySelector('.copy-button-' + codeId.split('-')[1]);
    const originalContent = copyButton.innerHTML;
  
    // Replace the button content with the Font Awesome tick icon
    copyButton.innerHTML = '<i class="fas fa-check"></i>';
  
    // Restore the button content after 5 seconds
    setTimeout(function () {
      copyButton.innerHTML = originalContent;
    }, 5000);
  }
  // JavaScript code
window.addEventListener('scroll', function() {
  var mainOffset = document.querySelector('main').offsetTop;
  var betaIconContainer = document.querySelector('.beta-icon-container');
  var toggleButtonContainer = document.querySelector('.toggle-button-container');
  
  if (window.pageYOffset >= mainOffset) {
    betaIconContainer.classList.add('hide');
    toggleButtonContainer.classList.add('hide');
  } else {
    betaIconContainer.classList.remove('hide');
    toggleButtonContainer.classList.remove('hide');
  }
});

  