Object.assign(window.search, {"doc_urls":["1-introduction/1-1-introduction.html#introduction--what-is-this-book-about","1-introduction/1-2-what-is-yul.html#what-is-yul","1-introduction/1-3-why-is-yul-important.html#why-is-yul-important","1-introduction/1-4-yul's-advantages.html#yuls-advantage","1-introduction/1-5-yul's-disadvantage.html#yuls-disadvantage","1-introduction/1-6-code-layout.html#code-layout"],"index":{"documentStore":{"docInfo":{"0":{"body":43,"breadcrumbs":3,"title":2},"1":{"body":57,"breadcrumbs":2,"title":1},"2":{"body":43,"breadcrumbs":4,"title":2},"3":{"body":23,"breadcrumbs":4,"title":2},"4":{"body":35,"breadcrumbs":4,"title":2},"5":{"body":29,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"Hello there! This is a book about Yul, a low-level, intermediate language written alongside Solidity that can be compiled to bytecode for different backends [ 1 ]. Over the course of this book, we are going to go through what Yul is, why it is important, its advantage and disadvantage over Solidity and its implementations in a smart contract. Also, we will see how storage and memory are laid out in Solidity and how we would harness the power of Yul to infiltrate and modify to our taste. Enjoy!","breadcrumbs":"Introduction » Introduction (What is this book about?)","id":"0","title":"Introduction (What is this book about?)"},"1":{"body":"Yul is an intermediate language that compiles to Ethereum Virtual Machine (EVM) bytecode. It is designed to be a low-level language that gives developers a high degree of control over the execution of their smart contracts. It is similar in many ways to Assembly but with higher-level features that make it easier to work with. [ 2 ] Yul was previously called Julia or Iulia . Within the context of smart contract development, Yul is usually referred to as Inline Assembly . As it is very similar to Assembly and is written within functions in smart contract code.","breadcrumbs":"What Is Yul? » What Is Yul?","id":"1","title":"What Is Yul?"},"2":{"body":"During smart contract development process, there are actions, or manipulations which are not feasible for the programmer from the high-level Solidity code. Using Yul, the programmer is given much more fine-grained control over the storage, memory and in some cases calldata layout of the EVM. This control also allows for much more gas efficient code to be written. The flexibility and gas optimization of Yul are what makes it important.","breadcrumbs":"Why Is Yul Important? » Why Is Yul Important?","id":"2","title":"Why Is Yul Important?"},"3":{"body":"As stated in the previous chapter , the ability to manipulate the storage, memory or calldata layout to the programmer's taste with an extra benefit of much more gas optimized code is Yul's major advantage over Solidity.","breadcrumbs":"Yul's Advantages » Yul's Advantage","id":"3","title":"Yul's Advantage"},"4":{"body":"As with everything without control limits, the wrong modification, setting or manipulation of the storage or memory layout has the potential of breaching the security of the smart contract, rendering it useless till eternity, or putting users' funds at risk. For this reason, it is advised that before writing Yul, one must understand the risks involved, and also, the workings of the EVM.","breadcrumbs":"Yul's Disadvantage » Yul's Disadvantage","id":"4","title":"Yul's Disadvantage"},"5":{"body":"Every piece of Yul code written here can be rerun on Remix . Remix is an online smart contract development suite. It also offers a way of observing the process of EVM layouts and storage. It will be used over the course of this book, and you can replicate whatever we have done here on the suite.","breadcrumbs":"Code Layout » Code Layout","id":"5","title":"Code Layout"}},"length":6,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":5,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"5":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"5":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"a":{"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"m":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"a":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"l":{"a":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"k":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}}},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"n":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":5,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":5,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":5,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"s":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"5":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"'":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"df":5,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":2.0},"2":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":2.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":2.0},"5":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"5":{"tf":2.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":5,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.0},"5":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"5":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"a":{"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"m":{"df":4,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"f":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"g":{"a":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":2.0}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"l":{"a":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":4,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":2.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"k":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}}},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}},"u":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"n":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":5,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"3":{"tf":1.0}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":5,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":5,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"s":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"5":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"'":{"df":2,"docs":{"3":{"tf":2.0},"4":{"tf":1.7320508075688772}}},"df":5,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":2.449489742783178},"2":{"tf":2.23606797749979},"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"title":{"root":{"a":{"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"a":{"d":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"'":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});