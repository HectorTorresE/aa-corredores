(function () {
  const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  function msg(key) {
    const lang = document.documentElement.lang === "en" ? "en" : "es";
    const pack = (window.dict && window.dict[lang]) || {};
    return pack[key] || key;
  }

  function isValidEmail(value) {
    const v = String(value || "").trim();
    if (!v || v.length > 254) return false;
    if (v.includes("..") || v.startsWith(".") || v.endsWith(".")) return false;
    return EMAIL_RE.test(v);
  }

  function isValidPhone(value) {
    const raw = String(value || "").trim();
    if (!raw) return false;
    if (!/^[+\d(][\d\s().\-/]*$/.test(raw)) return false;
    const digits = raw.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) return false;
    // RD / US-Canada NANP: 10 digits, or 11 starting with 1
    if (digits.length === 11 && digits[0] !== "1") return false;
    if (digits.length === 10 || digits.length === 11) {
      const local = digits.length === 11 ? digits.slice(1) : digits;
      // area code cannot start with 0 or 1
      if (local[0] === "0" || local[0] === "1") return false;
    }
    return true;
  }

  function ensureErrorEl(field) {
    let err = field.querySelector(".field-error");
    if (!err) {
      err = document.createElement("p");
      err.className = "field-error";
      err.setAttribute("role", "alert");
      field.appendChild(err);
    }
    return err;
  }

  function setError(input, message) {
    const field = input.closest(".field");
    if (!field) return;
    const err = ensureErrorEl(field);
    input.classList.toggle("is-invalid", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
    err.textContent = message || "";
    err.hidden = !message;
  }

  function clearError(input) {
    setError(input, "");
  }

  function validateEmailInput(input) {
    const v = input.value.trim();
    if (!v) {
      setError(input, msg("form.err.emailRequired"));
      return false;
    }
    if (!isValidEmail(v)) {
      setError(input, msg("form.err.emailInvalid"));
      return false;
    }
    clearError(input);
    return true;
  }

  function validatePhoneInput(input) {
    const v = input.value.trim();
    if (!v) {
      setError(input, msg("form.err.phoneRequired"));
      return false;
    }
    if (!isValidPhone(v)) {
      setError(input, msg("form.err.phoneInvalid"));
      return false;
    }
    clearError(input);
    return true;
  }

  function wireForm(form) {
    if (!form) return;
    form.setAttribute("novalidate", "");

    const email = form.querySelector('input[name="email"]');
    const phone = form.querySelector('input[name="phone"]');
    const name = form.querySelector('input[name="name"]');
    const message = form.querySelector('textarea[name="message"]');

    if (email) {
      email.setAttribute("required", "");
      email.setAttribute("maxlength", "254");
      email.setAttribute("inputmode", "email");
      email.addEventListener("blur", () => validateEmailInput(email));
      email.addEventListener("input", () => {
        if (email.classList.contains("is-invalid")) validateEmailInput(email);
      });
    }
    if (phone) {
      phone.setAttribute("required", "");
      phone.setAttribute("inputmode", "tel");
      phone.setAttribute("autocomplete", "tel");
      phone.setAttribute("placeholder", msg("form.phonePlaceholder"));
      phone.addEventListener("blur", () => validatePhoneInput(phone));
      phone.addEventListener("input", () => {
        if (phone.classList.contains("is-invalid")) validatePhoneInput(phone);
      });
    }
    if (name) {
      name.setAttribute("required", "");
      name.setAttribute("minlength", "2");
      name.setAttribute("maxlength", "100");
    }
    if (message) {
      message.setAttribute("required", "");
      message.setAttribute("minlength", "10");
      message.setAttribute("maxlength", "2000");
    }

    form.addEventListener("submit", (e) => {
      const okEmail = email ? validateEmailInput(email) : true;
      const okPhone = phone ? validatePhoneInput(phone) : true;
      let okName = true;
      let okMessage = true;

      if (name) {
        const v = name.value.trim();
        if (v.length < 2) {
          setError(name, msg("form.err.nameRequired"));
          okName = false;
        } else clearError(name);
      }
      if (message) {
        const v = message.value.trim();
        if (v.length < 10) {
          setError(message, msg("form.err.messageRequired"));
          okMessage = false;
        } else clearError(message);
      }

      if (!okEmail || !okPhone || !okName || !okMessage) {
        e.preventDefault();
        const firstBad = form.querySelector(".is-invalid");
        if (firstBad) firstBad.focus();
      } else if (phone) {
        // normalize phone digits for cleaner inbox (keep user-friendly +E.164-ish)
        const digits = phone.value.replace(/\D/g, "");
        phone.value = digits.length === 10 ? `+1${digits}` : digits.startsWith("1") ? `+${digits}` : `+${digits}`;
      }
    });
  }

  document.querySelectorAll("form.contact-form").forEach(wireForm);

  // refresh phone placeholder when language changes
  window.refreshFormValidationCopy = function () {
    document.querySelectorAll('form.contact-form input[name="phone"]').forEach((phone) => {
      phone.setAttribute("placeholder", msg("form.phonePlaceholder"));
    });
  };
})();
