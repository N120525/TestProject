(function () {
    const SELECTOR =
      'td[title=""]'; 
    const CODE_SELECTOR =
      'td[title=""]'; 
    const BUTTON_SELECTOR =
      'input[type="button"][value=""]';
  
    function workerNode() {
      document.querySelectorAll("tbody tr").forEach((row) => {
        if (
          row.querySelector(SELECTOR) &&
          row.querySelector(CODE_SELECTOR)
        ) {
          row.remove();
        }
      });
    }
  
    function disableButton() {
      document.querySelectorAll(BUTTON_SELECTOR).forEach((btn) => {
        btn.disabled = true;
      });
    }
  
    function runLogic() {
      workerNode();
      disableButton();
    }
  
    runLogic();
  
    let timeout;
    const observer = new MutationObserver(() => {
      clearTimeout(timeout);
      timeout = setTimeout(runLogic, 200);
    });
  
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  })();