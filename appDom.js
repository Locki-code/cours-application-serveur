function nodeRender(node) {
  var newNode = document.createElement(node.tagName)
  node.content ? newNode.appendChild(node.content) : null
  node.child.forEach(attr => nodeRender(attr))
}

function creerElement(tagName, opts) {
  return {
    tagName,
    attributs: opts.attributs,
    child: opts.child,
  };
}

nodeRender(
  creerElement('div', {
    attributs: {
      id: 'main',
    },
    child: [
      creerElement('img', {
        attributs: {
          src: 'https://media.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif',
        },
      }),
    ],
  })
)