const listenerBlock = (selector, callback) => {
  const initialTargetNode = document.querySelector(selector);
  if (initialTargetNode) {
    return callback(initialTargetNode);
  }

  const mutationObserver = new MutationObserver((mutations, observer) => {
    mutations.forEach(({ addedNodes }) =>
      addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const targetNode = node.querySelector(selector);
          if (targetNode) {
            observer.disconnect();
            return callback(targetNode);
          }
        }
      })
    );
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
};

listenerBlock('.eapps-pricing-table-toggle-inner', (toggleContainer) => {
  const toggleNameBlocks = Array.from(
    toggleContainer.querySelectorAll('.eapps-pricing-table-toggle-item-name')
  );

  const searchParams = new URLSearchParams(window.location.search);
  const toggleParams = searchParams.get('toggle');

  if (toggleParams) {
    const targetToggle = toggleNameBlocks.find(
      (block) => block.innerText.toLowerCase() === toggleParams.toLowerCase()
    );

    if (targetToggle) {
      targetToggle.click();
    }
  }
});
