

window.addEventListener('scroll', function () {
    let header = document.getElementsByTagName('header');
    if (window.pageYOffset > 50) {
        for (let i = 0; i < header.length; i++) {
            header[i].style.position = 'fixed';
            header[i].style.left = '0';
            header[i].style.right = '0';
            header[i].style.zIndex = '100';
            header[i].style.backgroundColor = '#fff';
            header[i].style.transition = 'all 0.5s';
        }
    } else {
        for (let i = 0; i < header.length; i++) {
            header[i].style.position = 'static';
        }
    }
})


//  go in login page
let loginClass = document.getElementsByClassName('login');

for (let i = 0; i < loginClass.length; i++) {
    loginClass[i].addEventListener('click', function () {
        window.location.href = 'login.html';
    })
};

// go in product page

let pageChange = document.getElementById('login');
pageChange.addEventListener('click', function () {
    window.location.href = 'card.html';
});

let loginBtn = document.getElementById('login');
let email = document.getElementById('inputEmail');
let pass = document.getElementById('inputPassword');
let cPass = document.getElementById('inputPasswordConfirm');
let notMatch = document.getElementById('notMatch');
notMatch.style.display = 'none'

pass.addEventListener('click', function () {
    if (email.value != 'admin@admin.com') {
        email.style.border = '2px solid rgb(250, 54, 54)';
        alert('Email is not Valid');
    } else {
        email.style.border = '1px solid #dee2e6';
    }
});
cPass.addEventListener('click', function () {
    if (pass.value != 123456 || pass.value != '123456') {
        pass.style.border = '2px solid rgb(250, 54, 54)';
        alert('Password is not Correct');
    } else {
        pass.style.border = '1px solid #dee2e6';
    }
})

cPass.addEventListener('keyup', function () {

    if (email.value == 'admin@admin.com' && (pass.value == '123456' || pass.value == 123456) && (pass.value == cPass.value)) {
        loginBtn.removeAttribute('disabled');
        loginBtn.classList.remove('disabled');
    } else {
        loginBtn.setAttribute('disabled', true);
        loginBtn.classList.add('disabled');
    }
    if ((cPass.value == 123456 || cPass.value == '123456') !== (pass.value == 123456 || pass.value == '123456')) {
        notMatch.style.display = 'block';
        cPass.style.border = '2px solid rgb(250, 54, 54)';
    } else {
        cPass.style.border = '1px solid #dee2e6';
        notMatch.style.display = 'none';
    }
});


// card section

function calculate(plus, minus, count, cart) {
    plus.addEventListener('click', function () {
        let value1 = count.value;
        value1 = parseInt(value1);
        let result = Number(value1) + 1;
        count.value = result;
    });
    minus.addEventListener('click', function () {
        let value1 = count.value;
        value1 = parseInt(value1);
        let result = Number(value1) - 1;
        count.value = result;
        if (count.value < 1) {
            cart.style.display = 'none';
        }
    });

}

// cart 1

let plus1 = document.getElementById('plus1');
let minus1 = document.getElementById('minus1');
let count1 = document.getElementById('count1');
let cart1 = document.getElementById('cart1');

let plus2 = document.getElementById('plus2');
let minus2 = document.getElementById('minus2');
let count2 = document.getElementById('count2');
let cart2 = document.getElementById('cart2');

let plus3 = document.getElementById('plus3');
let minus3 = document.getElementById('minus3');
let count3 = document.getElementById('count3');
let cart3 = document.getElementById('cart3');

let plus4 = document.getElementById('plus4');
let minus4 = document.getElementById('minus4');
let count4 = document.getElementById('count4');
let cart4 = document.getElementById('cart4');

calculate(plus1, minus1, count1, cart1);
calculate(plus2, minus2, count2, cart2);
calculate(plus3, minus3, count3, cart3);
calculate(plus4, minus4, count4, cart4);


// total

let price1 = document.getElementById('price1').innerText;
console.log(price1);
let price2 = document.getElementById('price2').innerText;
console.log(price2);
let price3 = document.getElementById('price3').innerText;
console.log(price3);
let price4 = document.getElementById('price4').innerText;
console.log(price4);

let cal = document.getElementById('sub');
cal.innerText = Number(price1) + Number(price2) + Number(price3) + Number(price4);

let taxTex = document.getElementById('grand');
let taxText = taxTex.innerText;
taxText = Number(taxText);
console.log(taxText);

let tax = 15;

taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));

let warning = document.getElementById('error');
let warning2 = document.getElementById('errorp');
warning.style.display = 'none';
warning2.style.display = 'none';
// minus

minus1.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1400;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }

});
minus2.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1500;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
});
minus3.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1200;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorP').style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }

});
minus4.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) - 1300;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
});

// plus

plus1.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1400;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
});
plus2.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1500;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
});
plus3.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1200;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
});
plus4.addEventListener('click', function () {
    cal.innerText = Number(cal.innerText) + 1300;
    taxTex.innerText = parseInt(cal.innerText * (1 + tax / 100));
    if (cal.innerText == 0 || cal.innerText == '0') {
        document.getElementById('order').setAttribute('disabled', true);
        document.getElementById('order').classList.add('disabled');
        warning.style.display = 'block';
        warning2.style.display = 'block';
    } else {
        warning.style.display = 'none';
        warning2.style.display = 'none';
    }
});


