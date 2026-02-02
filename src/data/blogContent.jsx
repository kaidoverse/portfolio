
export default [
  {
    title: "Programming concepts and analogies",
    description: "javascript principles made easier as a developer.",
    date: "Jan 29, 2026",
    slug: "Programming",
    content: (
      <>
        <h2>Analogy-based learning</h2>

        <p>
          I’ll go out on a limb and say that most developers struggle with understanding programming concepts at some point. If you’re self-taught like me, there’s a good chance you’ve felt lost reading technical documentation or tutorials. Now a neat little trick that has helped me tremendously is the use of analogies to relate complex ideas to everyday experiences.
        </p>

        <p>
          Through Analogy-based learning, abstract concepts became more tangible and easier to grasp and this happens when you connect new concepts to familiar situations. They become more memorable and easier to explain to others.

        </p>

        <h2>An Analogy for JavaScript Closures</h2>

        <p>
          Imagine you just returned home from boarding school. Before you even unpack, your least favorite aunt sends you on an errand. Your friend is visiting and overhears the entire conversation.
        </p>

        <p>
          Even after you leave the house, your friend still remembers what your aunt said, the instructions she gave, and the context of the conversation. In the event that you forget what to do, your friend can step in and remind you.So there's no room for confusion later on.
        </p>

        <p>
          In JavaScript terms, the inner function has closed over the outer function’s variables. This means it still has access to the outer scope through the closure scope chain, even after the outer function has returned. The data is preserved in memory as part of the closure.
        </p>

        <p>
          This is essentially how closures work in JavaScript.
        </p>

        <h3>Mapping the Analogy to Programming Concepts</h3>

        <ul>
          <li><strong>Your aunt</strong> → The <em>outer function</em></li>
          <li><strong>You</strong> → The <em>inner function</em></li>
          <li><strong>Your friend</strong> → The <em>closure</em></li>
          <li><strong>The conversation and instructions</strong> → The <em>outer function’s variables and scope</em></li>
        </ul>

        <p>
          When the outer function (your aunt) finishes executing, the inner function (you) may still exist. The closure (your friend) remembers the variables and context from the outer function, even after it’s gone. In JavaScript, this means the inner function can still access variables from its outer function, even after that outer function has returned.
        </p>

        <h3>Closure Example in JavaScript</h3>

        <pre>
          <code>{`
function outerFunction() {
  const secret = "boarding school gossip";

  function innerFunction() {
    console.log(secret);
  }

  return innerFunction;
}

const friend = outerFunction();
friend(); // still remembers 'secret'
`}</code>
        </pre>


        <h2>Why Analogies Work So Well</h2>

        <p>
          Analogies reduce cognitive load. Instead of juggling abstract syntax and theory, your brain anchors new ideas to familiar mental models. This makes learning faster and teaching easier.
        </p>

        <h2>How to Create Effective Programming Analogies</h2>

        <ul>
          <li>
            <strong>Use everyday experiences:</strong> School, family, cooking, travel, or money are relatable to almost everyone.
          </li>
          <li>
            <strong>Map each technical term clearly:</strong> Explicitly explain what each part of the analogy represents in code.
          </li>
          <li>
            <strong>Keep it simple:</strong> Avoid overly complex stories that introduce more confusion.
          </li>
          <li>
            <strong>Highlight the key behavior:</strong> Focus on what makes the concept unique (for closures, it’s remembering scope).
          </li>
          <li>
            <strong>Test the analogy:</strong> If someone can explain the concept back using your analogy, it worked.
          </li>
        </ul>

        <p>
          Programming is full of abstract ideas, but abstraction doesn’t have to feel abstract. If abstract thinking doesn’t come naturally to you, programming can feel harder than it needs to be. With the right analogy, even the most confusing concepts can suddenly feel obvious.
        </p>
      </>
    ),
  },

  // {
  //   title: "2024 in Review",
  //   description: "A look back at my projects and learnings in 2024.",
  //   date: "Dec 31, 2024",
  //   slug: "2024-review",
  //   content: (
  //     <>
  //       <h2>2024 in Review</h2>
  //       <p>2024 was full of growth and experimentation.</p>

  //       <ul>
  //         <li>Built my portfolio</li>
  //         <li>Learned Next.js</li>
  //         <li>Contributed to open source</li>
  //       </ul>
  //     </>
  //   ),
  // },
];
