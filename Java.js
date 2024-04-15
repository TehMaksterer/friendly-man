document.getElementById('populateButton').addEventListener('click', function(){
  const phrases = ['hello', 'hey', 'yolo']  
  const textarea = document.getElementById('textGoHere');
  const text = phrases.join('\n');
  textarea.value = text;
});