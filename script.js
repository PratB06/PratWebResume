document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', (event) => {
        const projectId = event.target.dataset.project;
        // Here, you can create a modal to show more details about the project,
        // or redirect to another page for that project.
        alert(`Learn more about: ${projectId}`);
    });
});
