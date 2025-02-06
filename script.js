const messages = [
    "You Sure My Everyhing??",
    "Double double Sure My Love??",
    "Pyeaseeee?",
    "Really Really Pyeaseee",
    "Sayy Yess Yess Babyy",
    "I Will Cry Like a Baby",
    "I Will Bee saddd",
    "You want me to be sad?",
    "Last Try My Lovee",
    "Say Yess Pyeasee"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}