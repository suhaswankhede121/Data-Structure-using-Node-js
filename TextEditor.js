class TextEditor {
    constructor() {
      this.text = '';
      this.clipboard = [];
    }
  
    insertText(newText) {
      this.text += newText;
    }
  
    cutText(startIndex, endIndex) {
      const cutText = this.text.slice(startIndex, endIndex);
      this.clipboard.push(cutText);
      this.text = this.text.slice(0, startIndex) + this.text.slice(endIndex);
    }
  
    copyText(startIndex, endIndex) {
      const copiedText = this.text.slice(startIndex, endIndex);
      this.clipboard.push(copiedText);
    }
  
    pasteText(index) {
      if (this.clipboard.length === 0) {
        return;
      }
      const pastedText = this.clipboard[this.clipboard.length - 1];
      this.text = this.text.slice(0, index) + pastedText + this.text.slice(index);
    }
  }
  const textEditor = new TextEditor();

  textEditor.insertText(' Message :- The quick brown fox jumps over the lazy dog.');
  
  textEditor.cutText(4, 9);

  console.log("Cut Operation")
  console.log(textEditor.text); // 'The brown fox jumps over the lazy dog.'
  console.log(textEditor.clipboard); // ['quick']
  console.log("Copy Operation")
  textEditor.copyText(10, 15);
  console.log(textEditor.clipboard); // ['quick', 'brown']
  console.log("Paste Operation")
  textEditor.pasteText(26);
  console.log(textEditor.text); // 'The brown fox jumps over the quick dog.'
  console.log(textEditor.clipboard); // ['quick', 'brown']
    