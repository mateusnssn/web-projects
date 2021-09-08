
var number = document.getElementById(`number`);
console.log(number.innerHTML)


const fn = {
      reset: () => {
            n = number.innerHTML;
            number.innerHTML = '';
            console.log(n);
            return Number(n);
      },

      more: () => {
            n = fn.reset();
            n++;
            number.innerHTML = n;
      },

      minus: () => {
            n = fn.reset();
            n--;
            number.innerHTML = n;
      }
}
