// ==========================================================================
// Mariam Hegeb — Portfolio
// Handles: the letter-by-letter name reveal, photo uploads into slide
// slots, and the grease-pencil "pick" mark.
// ==========================================================================

(function () {
  'use strict';

  // ---- header name reveal ---------------------------------------------

  var nameEl = document.getElementById('displayName');

  if (nameEl) {
    var fullText = nameEl.textContent;
    nameEl.setAttribute('aria-label', fullText);
    nameEl.textContent = '';

    var wrapper = document.createElement('span');
    wrapper.setAttribute('aria-hidden', 'true');

    Array.prototype.forEach.call(fullText, function (ch, i) {
      var letter = document.createElement('span');
      letter.className = 'letter';
      letter.style.setProperty('--i', i);
      letter.textContent = ch === ' ' ? '\u00A0' : ch;
      wrapper.appendChild(letter);
    });

    nameEl.appendChild(wrapper);
  }

  // ---- photo uploads ------------------------------------------------------

  var slides = document.querySelectorAll('[data-slide]');

  slides.forEach(function (slide) {
    var input = slide.querySelector('[data-upload]');
    var drop = slide.querySelector('.drop');
    var clearBtn = slide.querySelector('[data-clear]');
    var pickBtn = slide.querySelector('[data-pick]');

    input.addEventListener('change', function () {
      var file = input.files && input.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function (e) {
        drop.style.backgroundImage = 'url(' + e.target.result + ')';
        slide.classList.add('has-photo');
      };
      reader.readAsDataURL(file);
    });

    clearBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      drop.style.backgroundImage = '';
      slide.classList.remove('has-photo');
      input.value = '';
    });

    // ---- grease-pencil pick mark -----------------------------------------

    pickBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var isPicked = slide.classList.toggle('is-picked');
      pickBtn.setAttribute('aria-pressed', String(isPicked));
    });
  });
})();