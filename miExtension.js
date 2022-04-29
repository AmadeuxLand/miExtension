class MyExtension {

  getInfo() {
    return {

      id: 'myextensionexample',

      name: 'Cool Extension',

      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello, world!'
        }
      ]
    };
  }

  hello() {

    return 'Hello, world!';
  }
}

Scratch.extensions.register(new MyExtension());