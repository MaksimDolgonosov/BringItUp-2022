export default class Forms {
    constructor(form) {
        this.form = document.querySelector(form);
        this.message = {
            loading: "Идет отправка...",
            sucsess: "Отправлено! Спасибо, мы скоро с вами свяжемся!",
            error: "Ошибка, что то пошло не так! Попробуйте позже."
        };
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }

    checkInputs() {

        document.querySelectorAll("[name='email']").forEach(email => {
            email.addEventListener("input", e => {
                email.value = email.value.replace(/[а-я]/ig, "");
            });
        });
    }

    phoneMask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();

            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };

        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }

        let inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });

    }

    sendForm(form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            
            let formData = new FormData(form);
            let div = document.createElement("h3");
            div.classList.add("animated", "fadeIn");
            div.style.cssText = `
            margin-top: 15px;
            font-size: 18px;
            margin-bottom: 0;
            text-align: center;
            color: black;`;
            div.textContent = this.message.loading;
            form.insertAdjacentElement("afterend", div);
            this.postData("assets/question.php", formData)
                .then(data => {
                    console.log(data);
                    form.reset();
                    div.textContent = this.message.sucsess;
                })
                .catch(() => {
                    div.textContent = this.message.error;
                })
                .finally(() => {
                    setTimeout(() => {
                        div.remove();
                    }, 4000);
                });

        });
    }


    init() {
        this.sendForm(this.form);
        this.checkInputs();
        this.phoneMask();
    }
}