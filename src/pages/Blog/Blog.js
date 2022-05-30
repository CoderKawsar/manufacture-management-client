import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-8">Blog</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>
                How will you improve the performance of a React Application?
              </td>
              <td>
                1. Use React.Fragment to Avoid Adding Extra Nodes to the DOM
                <br />
                2. Use Production Build
                <br />
                3. Use React.Suspense and React.Lazy for Lazy Loading
                Components. <br />
                4. Use React.memo for Component Memoization
                <br />
                5. Virtualize a Large List Using react-window
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>2</th>
              <td>
                What are the different ways to manage a state in a React
                application?
              </td>
              <td>
                1. Local state
                <br />
                2. Global state
                <br />
                3. Server state
                <br />
                4. URL state
              </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>How does prototypical inheritance work?</td>
              <td>
                JavaScript is a prototype-based, Object Oriented programming
                language. After the ES6 updates, JavaScript allowed for
                “prototypal inheritance”, meaning that objects and methods can
                be shared, extended, and copied.
                <br />
                Sharing amid objects makes for easy inheritance of structure
                (data fields), behavior (functions / methods), and state (data
                values).
                <br />
                JavaScript is the most common of the prototype-capable
                languages, and its capabilities are relatively unique. When used
                appropriately, prototypical inheritance in JavaScript is a
                powerful tool that can save hours of coding.
                <br />
                Today, we want to get you acquainted with prototypal inheritance
                in JavaScript to get you up to date with the ES6 capabilities.
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Why you do not set the state directly in React?</td>
              <td>
                If you update it directly, calling the setState() afterward may
                just replace the update you made.
                <br />
                When you directly update the state, it does not change
                this.state immediately. Instead, it creates a pending state
                transition, and accessing it after calling this method will only
                return the present value.
                <br />
                You will lose control of the state across all components.
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>What is a unit test? Why should write unit tests?</td>
              <td>
                UNIT TESTING is a type of software testing where individual
                units or components of a software are tested. The purpose is to
                validate that each unit of the software code performs as
                expected. Unit Testing is done during the development (coding
                phase) of an application by the developers. Unit Tests isolate a
                section of code and verify its correctness. A unit may be an
                individual function, method, procedure, module, or object.
                <br />
                Unit Testing is important because software developers sometimes
                try saving time doing minimal unit testing and this is myth
                because inappropriate unit testing leads to high cost Defect
                fixing during System Testing, Integration Testing and even Beta
                Testing after application is built. If proper unit testing is
                done in early development, then it saves time and money in the
                end.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
