var initDom = null

function nodeRender(node) {
  var newNode = document.createElement(node.tagName)
  if (node.attributs) {
    Object.keys(node.attributs).forEach(key => {
      var attr = document.createAttribute(key);
      attr.value = node.attributs[key];
      newNode.setAttributeNode(attr)
    })
  }
  if (node.child) {
    node.child.forEach(
      ch => newNode.appendChild(nodeRender(ch))
    )
  }
  if (node.textContent) {
    newNode.textContent = node.textContent
  }
  return newNode
}

function creerElement(tagName, opts) {
  return {
    tagName,
    attributs: opts.attributs,
    child: opts.child,
    textContent: opts.textContent || null,
  };
}

function mount(newDiv) {
  var divMain = document.getElementById('main')
  if (divMain) {
    divMain.replaceWith(newDiv)
  } else {
    document.body.appendChild(newDiv)
  }
  initDom = divMain
}

function makeDiff(newNode, oldNode) {
  if (newNode === undefined){
    return node => {
      node.remove();
      return undefined;
    }
  }
  if (oldNode.tagName !== newNode.tagName) {
    return node => {
      node.replaceWith(newNode);
      return node;
    }
  }
  if (oldNode.createTextNode !== newNode.createTextNode){
    return node => {

    }
  }
  if(typeof(newNode) == 'string' && typeof(oldNode) == 'string' ){
    return node => {
      node.replaceWith(newNode);
      return node;
    }
  }
}

setInterval( function () {
    mount(
      nodeRender(
        creerElement('div', {
          attributs: {
            id: 'main',
          },
          child: [
            creerElement('img', {
              attributs: {
                src: `https://picsum.photos/2${Math.floor(Math.random() * 10)}0`,
              },
            }),
            creerElement('p', {
              textContent: Math.floor(Math.random() * 10) || "0",
            }),
            creerElement('div', {
              attributs: {
                id: 'second',
              },
              child: [
                creerElement('p', {
                  textContent: Math.floor(Math.random() * 100) || "N",
                }),
              ],
            }),
          ],
        })
      )
    )
  }, 5000
)