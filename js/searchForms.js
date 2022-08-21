const forms = document.querySelectorAll('form.search-form');

if (forms.length > 0) {
    forms.forEach(function (e) {
        let categories = e.querySelectorAll('input[name=category]');
        let category = null;
/*
        let prices = e.querySelectorAll('')
*/
        categories.forEach(function (e) {
            if (e.checked ) {
                category = e;
            }
            e.addEventListener('click', function () {
                if (e.checked ) {
                    category = e;
                }
                console.log(category.attributes)
            })
        })
    })
}