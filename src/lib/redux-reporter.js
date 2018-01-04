let reporter = store => next => action => {
    console.log('__ACTION__', action);

    try {
        return next(action)
    } catch (e) {
        e.action = action;
        console.error('__ERROR__', e);
        return e;
    }

}

export default reporter;


// document.getElementById('btn1').onclick = function () { alert(this.className); }


// let first;
// let second;

// document.getElementById('btn1').onclick = function () { first = this.className }
// document.getElementById('btn2').onclick = function () { second = this.className }

// { first === second ? alert('You Win') : alert('whoops, guess again') }