const forms = document.querySelectorAll('form.search-form');

if (forms.length > 0) {
    forms.forEach(function (e) {
        let categories = e.querySelectorAll('input[name=category]');
        let activeCategory = null;
        let categoryBlocks = e.querySelectorAll('[data-category]');

        if (categories.length > 0) {
            categories.forEach(function (e) {
                if (e.checked) {
                    activeCategory = e.value
                    setCategoryBlocks(activeCategory)
                }
                e.addEventListener('click', function () {
                    if (e.checked) {
                        activeCategory = e.value
                        setCategoryBlocks(activeCategory)
                    }
                })
            })
        }

        function setCategoryBlocks(category) {
            let activeCategoryBlocks = e.querySelectorAll(`[data-category=${category}]`);
            categoryBlocks.forEach(function (e) {
                e.parentElement.classList.add('d-none')
            })
            activeCategoryBlocks.forEach(function (e) {
                e.parentElement.classList.remove('d-none')
                e.parentElement.classList.add('d-flex')
            })
        }
    })
}