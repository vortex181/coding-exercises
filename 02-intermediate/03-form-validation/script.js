const form = document.querySelector('#form');

// هر تابع یا پیام خطا برمی‌گرداند یا رشته‌ی خالی
const rules = {
  name: (v) => '', // TODO
  email: (v) => '', // TODO
  password: (v) => '', // TODO
  confirm: (v, all) => '', // TODO
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // TODO: همه‌ی فیلدها را بررسی کن و خطاها را نشان بده
});
