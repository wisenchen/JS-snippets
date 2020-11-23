function ListNode(val){
  this.val = val;
  this.next = null;
  this.prev = null;
}

function createListNode(nodes) {
  if(!nodes || !nodes.length) return null;
  const root = new ListNode(nodes[0]);
  let head = root;
  for(let i = 1; i < nodes.length; i++) {
    head.next = new ListNode(nodes[i]);
    head.next.prev = head;
    head = head.next;
  }
  return root;
}

const nodes = [1,2,3,4];
createListNode(nodes);
