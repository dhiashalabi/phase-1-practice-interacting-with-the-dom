const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const restartButton = document.createElement('button');
restartButton.textContent = 'restart';

let count = 0;
let intervalId = setInterval(() => {
    if (pauseButton.textContent === 'pause') {
        count++;
        counter.textContent = count;
    }
}, 1000);

minusButton.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

plusButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

heartButton.addEventListener('click', () => {
    const likesList = document.querySelector('.likes');
    const existingLike = likesList.querySelector(`li[data-num="${count}"]`);
    if (existingLike) {
        const likeCount = existingLike.querySelector('.like-count');
        const newCount = parseInt(likeCount.textContent) + 1;
        likeCount.textContent = newCount;
    } else {
        const newLike = document.createElement('li');
        newLike.dataset.num = count;
        newLike.innerHTML = `${count} has been liked <span class="like-count">1</span> time`;
        likesList.appendChild(newLike);
    }
});

pauseButton.addEventListener('click', () => {
    if (pauseButton.textContent === 'pause') {
        clearInterval(intervalId);
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'resume';
    } else {
        intervalId = setInterval(() => {
            count++;
            counter.textContent = count;
        }, 1000);
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = 'pause';
    }
});

restartButton.addEventListener('click', () => {
    clearInterval(intervalId);
    count = 0;
    counter.textContent = count;
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
    pauseButton.textContent = 'pause';
    restartButton.remove();
});

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const newComment = document.createElement('div');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
    }
});
