export function appendToBody(tag, content, count) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const element = document.createElement(tag);
    element.textContent = content;
    fragment.appendChild(element);
  }

  document.body.appendChild(fragment);
}

export function generateTree(childrenCount, level, currentLevel = 1) {
  const node = document.createElement('div');
  node.classList.add(`item_${currentLevel}`);

  if (currentLevel < level) {
    for (let i = 0; i < childrenCount; i += 1) {
      const child = generateTree(childrenCount, level, currentLevel + 1);
      node.appendChild(child);
    }
  }

  return node;
}

export function replaceNodes() {
  const tree = generateTree(2, 3);
  const secondLevelNodes = tree.querySelectorAll('.item_2');

  secondLevelNodes.forEach((oldNode) => {
    const section = document.createElement('section');
    section.className = oldNode.className;

    while (oldNode.firstChild) {
      section.appendChild(oldNode.firstChild);
    }

    oldNode.replaceWith(section);
  });

  return tree;
}
