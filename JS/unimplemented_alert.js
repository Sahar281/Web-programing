document.addEventListener('DOMContentLoaded', function() {
    const unimplementedLinks = document.querySelectorAll('a[title="לא מומש"]');
    unimplementedLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('דף זה עדיין לא מומש.');
        });
    });
});
