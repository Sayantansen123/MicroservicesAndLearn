//Linked list for collisions handling
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

//BST tree structure for treeified buckets
class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;

    this.left = null;
    this.right = null;

    this.color = "RED";
  }
}

class HashMap {
  //base size of the hash map
  constructor(size = 5) {
    this.buckets = new Array(size).fill(null);

    this.size = size;
    this.count = 0;

    this.TREEIFY_THRESHOLD = 4;
  }

  // Better Hash Function to distinguish between types and values, e.g., "123" vs 123, "true" vs true
  // Combines type and string representation of the key to generate a more unique hash
  hash(key) {
    const typedKey = typeof key + ":" + String(key);

    let hash = 0;
    const PRIME = 31;

    for (let i = 0; i < typedKey.length; i++) {
      hash = hash * PRIME + typedKey.charCodeAt(i);
    }

    return Math.abs(hash) % this.size;
  }

  // Load Factor
  loadFactor() {
    return this.count / this.size;
  }

  // Resize + Rehash
  resize() {
    console.log(`\nResizing from ${this.size} to ${this.size * 2}\n`);

    const oldBuckets = this.buckets;

    this.size = this.size * 2;

    this.buckets = new Array(this.size).fill(null);

    this.count = 0;

    for (let bucket of oldBuckets) {
      // Linked List Bucket
      if (bucket instanceof Node) {
        let current = bucket;

        while (current) {
          this.set(current.key, current.value);
          current = current.next;
        }
      }

      // Tree Bucket
      else if (bucket instanceof TreeNode) {
        this.reinsertTree(bucket);
      }
    }
  }

  // Reinsert Tree During Resize
  reinsertTree(root) {
    if (!root) {
      return;
    }

    this.set(root.key, root.value);

    this.reinsertTree(root.left);
    this.reinsertTree(root.right);
  }

  // BST Insert
  insertTree(root, key, value) {
    if (root === null) {
      return new TreeNode(key, value);
    }

    if (String(key) < String(root.key)) {
      root.left = this.insertTree(root.left, key, value);
    } else if (String(key) > String(root.key)) {
      root.right = this.insertTree(root.right, key, value);
    } else {
      root.value = value;
    }

    return root;
  }

  // Convert Linked List -> Tree
  treeify(head) {
    let root = null;

    let current = head;

    while (current) {
      root = this.insertTree(root, current.key, current.value);
      current = current.next;
    }

    return root;
  }

  // Count Linked List Length
  getChainLength(head) {
    let count = 0;

    let current = head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Insert / Update
  set(key, value) {
    if (this.loadFactor() > 0.7) {
      this.resize();
    }

    const index = this.hash(key);

    const bucket = this.buckets[index];

    // Empty Bucket
    if (bucket === null) {
      this.buckets[index] = new Node(key, value);
      this.count++;
      return;
    }

    // TREE BUCKET
    if (bucket instanceof TreeNode) {
      this.buckets[index] = this.insertTree(bucket, key, value);

      this.count++;

      return;
    }

    // LINKED LIST BUCKET

    let current = bucket;

    while (current) {
      // Update Existing Key
      if (current.key === key) {
        current.value = value;
        return;
      }

      if (current.next === null) {
        break;
      }

      current = current.next;
    }

    current.next = new Node(key, value);

    this.count++;

    // Check Collision Chain Length
    const chainLength = this.getChainLength(bucket);

    if (chainLength >= this.TREEIFY_THRESHOLD) {
      console.log(`\nTreeifying bucket ${index}\n`);

      this.buckets[index] = this.treeify(bucket);
    }
  }

  // Search Tree
  searchTree(root, key) {
    if (root === null) {
      return undefined;
    }

    if (root.key === key) {
      return root.value;
    }

    if (String(key) < String(root.key)) {
      return this.searchTree(root.left, key);
    }

    return this.searchTree(root.right, key);
  }

  // Get Value
  get(key) {
    const index = this.hash(key);

    const bucket = this.buckets[index];

    // TREE SEARCH
    if (bucket instanceof TreeNode) {
      return this.searchTree(bucket, key);
    }

    // LINKED LIST SEARCH
    let current = bucket;

    while (current) {
      if (current.key === key) {
        return current.value;
      }

      current = current.next;
    }

    return undefined;
  }

  // Print Tree
  printTree(root, space = 0) {
    if (root === null) {
      return;
    }

    space += 5;

    this.printTree(root.right, space);

    console.log(" ".repeat(space) + root.key);

    this.printTree(root.left, space);
  }

  // Print HashMap
  print() {
    console.log("\n====== HASHMAP ======\n");

    for (let i = 0; i < this.size; i++) {
      const bucket = this.buckets[i];

      console.log(`Bucket ${i}:`);

      // TREE BUCKET
      if (bucket instanceof TreeNode) {
        console.log("[TREE]");

        this.printTree(bucket);
      }

      // LINKED LIST BUCKET
      else {
        let current = bucket;

        let output = "";

        while (current) {
          output += `[${current.key}: ${current.value}] -> `;
          current = current.next;
        }

        output += "null";

        console.log(output);
      }

      console.log("-----------------");
    }
  }
}

//example

const map = new HashMap(5);

map.set("cat", "animal");
map.set("tac", "word");
map.set("act", "verb");
map.set("cta", "another");
map.set("dog", "pet");
map.set("god", "reverse");

map.set(123, "number");
map.set(true, "boolean");

console.log(map.get("cat"));
console.log(map.get(123));
console.log(map.get(true));

map.print();
